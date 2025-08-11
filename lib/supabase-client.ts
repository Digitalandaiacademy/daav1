import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

// Client-side Supabase client
export const createClient = () => createClientComponentClient()

// Export a singleton client instance for client-side usage
export const supabase = createClient()

// Database types
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone: string | null
          city: string | null
          country: string | null
          profession: string | null
          company: string | null
          user_type: "admin" | "instructor" | "student" | "client"
          status: "active" | "inactive" | "suspended"
          experience_level: "beginner" | "intermediate" | "advanced"
          date_of_birth: string | null
          interests: string[] | null
          bio: string | null
          avatar_url: string | null
          marketing_consent: boolean | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone?: string | null
          city?: string | null
          country?: string | null
          profession?: string | null
          company?: string | null
          user_type?: "admin" | "instructor" | "student" | "client"
          status?: "active" | "inactive" | "suspended"
          experience_level?: "beginner" | "intermediate" | "advanced"
          date_of_birth?: string | null
          interests?: string[] | null
          bio?: string | null
          avatar_url?: string | null
          marketing_consent?: boolean | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          phone?: string | null
          city?: string | null
          country?: string | null
          profession?: string | null
          company?: string | null
          user_type?: "admin" | "instructor" | "student" | "client"
          status?: "active" | "inactive" | "suspended"
          experience_level?: "beginner" | "intermediate" | "advanced"
          date_of_birth?: string | null
          interests?: string[] | null
          bio?: string | null
          avatar_url?: string | null
          marketing_consent?: boolean | null
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          image_url: string | null
          slug: string
          features: string[]
          technologies: string[]
          delivery_time: string
          created_at: string
          updated_at: string
        }
      }
      formations: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          duration: string
          level: string
          image_url: string | null
          slug: string
          program: string[]
          prerequisites: string[]
          created_at: string
          updated_at: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          product_id: string
          product_type: "service" | "formation"
          status: "pending" | "paid" | "cancelled"
          amount: number
          created_at: string
          updated_at: string
        }
      }
    }
    Functions: {
      get_user_profile: {
        Args: {
          user_id: string
        }
        Returns: {
          id: string
          email: string
          first_name: string
          last_name: string
          phone: string | null
          city: string | null
          country: string | null
          profession: string | null
          company: string | null
          user_type: "admin" | "instructor" | "student" | "client"
          status: "active" | "inactive" | "suspended"
          experience_level: "beginner" | "intermediate" | "advanced"
          date_of_birth: string | null
          interests: string[] | null
          bio: string | null
          avatar_url: string | null
          marketing_consent: boolean | null
          created_at: string
          updated_at: string
        }[]
      }
    }
  }
}
