"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@supabase/supabase-js"
import { createClient } from "@/lib/supabase-client"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, metadata?: any) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  refreshUser: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  const refreshUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    } catch (error) {
      console.error("Error refreshing user:", error)
      setUser(null)
    }
  }

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
      } catch (error) {
        console.error("Error getting initial session:", error)
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)

      // Create profile if user just signed up
      if (event === "SIGNED_UP" && session?.user) {
        try {
          // Check if profile already exists
          const { data: existingProfile } = await supabase
            .from("profiles")
            .select("id")
            .eq("id", session.user.id)
            .single()

          if (!existingProfile) {
            // Create profile with basic info from auth metadata
            const { error } = await supabase.from("profiles").insert({
              id: session.user.id,
              email: session.user.email || "",
              first_name: session.user.user_metadata?.first_name || "",
              last_name: session.user.user_metadata?.last_name || "",
              phone: session.user.user_metadata?.phone || null,
              city: session.user.user_metadata?.city || null,
              country: session.user.user_metadata?.country || "Cameroun",
              profession: session.user.user_metadata?.profession || null,
              company: session.user.user_metadata?.company || null,
              user_type: "student",
              status: "active",
              experience_level: session.user.user_metadata?.experience_level || "beginner",
              date_of_birth: session.user.user_metadata?.date_of_birth || null,
              interests: session.user.user_metadata?.interests || null,
              bio: session.user.user_metadata?.bio || null,
              marketing_consent: session.user.user_metadata?.marketing_consent || false,
            })

            if (error) {
              console.error("Error creating profile:", error)
            }
          }
        } catch (error) {
          console.error("Error handling profile creation:", error)
        }
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
  }

  // Dans votre AuthProvider
// Dans AuthProvider.tsx, remplacer la fonction signUp par :
const signUp = async (email: string, password: string, additionalData: any) => {
  try {
    // 1. Créer l'utilisateur
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: additionalData.first_name,
          last_name: additionalData.last_name,
        }
      }
    })

    if (error) throw error

    // 2. Créer le profil avec un délai pour éviter les conflits
    if (data.user) {
      setTimeout(async () => {
        try {
          const profileData = {
            id: data.user!.id,
            email: data.user!.email!,
            first_name: additionalData.first_name || '',
            last_name: additionalData.last_name || '',
            phone: additionalData.phone || null,
            city: additionalData.city || null,
            country: additionalData.country || 'Cameroun',
            profession: additionalData.profession || null,
            company: additionalData.company || null,
            user_type: 'student',
            status: 'active',
            experience_level: additionalData.experience_level || 'beginner',
            date_of_birth: additionalData.date_of_birth || null,
            interests: additionalData.interests || null,
            bio: additionalData.bio || null,
            marketing_consent: additionalData.marketing_consent || false,
          }

          const { error: profileError } = await supabase
            .from('profiles')
            .insert(profileData)

          if (profileError) {
            console.error('Erreur création profil:', profileError)
          }
        } catch (profileError) {
          console.error('Erreur lors de la création du profil:', profileError)
        }
      }, 100) // Petit délai pour éviter les conflits
    }

    return { data, error }
  } catch (error) {
    console.error('Erreur inscription:', error)
    throw error
  }
}

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    if (error) throw error
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, resetPassword, refreshUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
