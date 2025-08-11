"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  User,
  Settings,
  BookOpen,
  ShoppingCart,
  Bell,
  Shield,
  Edit3,
  Save,
  X,
  Check,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Building,
  Calendar,
  Heart,
  Sparkles,
  LogOut,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/providers/AuthProvider"
import { createClient } from "@/lib/supabase-client"

interface Profile {
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

const countries = [
  "Cameroun",
  "France",
  "Canada",
  "Belgique",
  "Suisse",
  "Côte d'Ivoire",
  "Sénégal",
  "Mali",
  "Burkina Faso",
  "Niger",
  "Tchad",
  "Gabon",
  "Congo",
  "RDC",
  "Madagascar",
  "Maroc",
  "Tunisie",
  "Algérie",
  "Autre",
]

const experienceLevels = [
  { value: "beginner", label: "Débutant", icon: "🌱" },
  { value: "intermediate", label: "Intermédiaire", icon: "🚀" },
  { value: "advanced", label: "Avancé", icon: "⭐" },
]

const interests = [
  "Intelligence Artificielle",
  "Développement Web",
  "Mobile",
  "Data Science",
  "Cybersécurité",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Marketing Digital",
  "E-commerce",
  "Blockchain",
  "IoT",
]

export default function AccountPage() {
  const { user, loading: authLoading, signOut } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState<Partial<Profile>>({})

  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/auth/login")
      return
    }

    if (user) {
      fetchProfile()
    }
  }, [user, authLoading, router])

  const fetchProfile = async () => {
    if (!user) return
  
    try {
      setLoading(true)
      setError("")
  
      // Récupérer le profil avec toutes les colonnes
      const { data, error } = await supabase
        .from("profiles")
        .select("*") // Ceci récupère toutes les colonnes
        .eq("id", user.id)
        .single()
  
      if (error) {
        if (error.code === "PGRST116") {
          // Profile doesn't exist, create a default one
          const defaultProfile = {
            id: user.id,
            email: user.email || "",
            first_name: user.user_metadata?.first_name || "",
            last_name: user.user_metadata?.last_name || "",
            phone: null,
            city: null,
            country: "Cameroun",
            profession: null,
            company: null,
            user_type: "student" as const,
            status: "active" as const,
            experience_level: "beginner" as const,
            date_of_birth: null,
            interests: null,
            bio: null,
            avatar_url: null,
            marketing_consent: false,
          }
  
          const { data: newProfile, error: insertError } = await supabase
            .from("profiles")
            .insert(defaultProfile)
            .select()
            .single()
  
          if (insertError) throw insertError
  
          setProfile(newProfile)
          setEditedProfile(newProfile)
        } else {
          throw error
        }
      } else {
        console.log('Profil récupéré:', data) // Pour debug
        setProfile(data)
        setEditedProfile(data)
      }
    } catch (err: any) {
      console.error("Error fetching profile:", err)
      setError("Erreur lors du chargement du profil")
    } finally {
      setLoading(false)
    }
  }
  

  const handleSaveProfile = async () => {
    if (!user || !profile) return

    try {
      setLoading(true)
      setError("")
      setSuccess("")

      const { error } = await supabase
        .from("profiles")
        .update({
          ...editedProfile,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (error) throw error

      setProfile({ ...profile, ...editedProfile })
      setIsEditing(false)
      setSuccess("Profil mis à jour avec succès !")

      setTimeout(() => setSuccess(""), 3000)
    } catch (err: any) {
      console.error("Error updating profile:", err)
      setError("Erreur lors de la mise à jour du profil")
    } finally {
      setLoading(false)
    }
  }

  const handleInterestToggle = (interest: string) => {
    const currentInterests = editedProfile.interests || []
    const newInterests = currentInterests.includes(interest)
      ? currentInterests.filter((i) => i !== interest)
      : [...currentInterests, interest]

    setEditedProfile((prev) => ({ ...prev, interests: newInterests }))
  }

  const handleLogout = async () => {
    try {
      await signOut()
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Chargement de votre profil...</p>
        </div>
      </div>
    )
  }

  if (!user || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <p className="text-white text-lg">Erreur de chargement du profil</p>
          <Button onClick={() => router.push("/auth/login")} className="mt-4">
            Retour à la connexion
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? "w-1 h-1 bg-purple-400" : i % 3 === 1 ? "w-2 h-2 bg-blue-400" : "w-1.5 h-1.5 bg-indigo-400"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Effets de lumière */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 right-1/6 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Mon Compte
              </span>
            </h1>
            <p className="text-gray-300">
              Bienvenue, {profile.first_name} {profile.last_name} !
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>

        {/* Messages */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 text-red-400">
            <div className="flex items-center gap-2">
              <X className="w-4 h-4" />
              {error}
            </div>
          </div>
        )}

        {success && (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6 text-green-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              {success}
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-white/10 border border-white/20 p-1 rounded-lg">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-gray-300"
            >
              <User className="w-4 h-4 mr-2" />
              Profil
            </TabsTrigger>
            <TabsTrigger
              value="formations"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-300"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Formations
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-gray-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Commandes
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-gray-300"
            >
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Informations personnelles</CardTitle>
                  <CardDescription className="text-gray-300">
                    Gérez vos informations de profil et préférences
                  </CardDescription>
                </div>
                <Button
                  onClick={() => {
                    if (isEditing) {
                      setEditedProfile(profile)
                      setIsEditing(false)
                    } else {
                      setIsEditing(true)
                    }
                  }}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  {isEditing ? (
                    <>
                      <X className="w-4 h-4 mr-2" />
                      Annuler
                    </>
                  ) : (
                    <>
                      <Edit3 className="w-4 h-4 mr-2" />
                      Modifier
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Informations de base */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      Prénom
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile.first_name || ""}
                        onChange={(e) => setEditedProfile((prev) => ({ ...prev, first_name: e.target.value }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    ) : (
                      <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.first_name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-400" />
                      Nom
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile.last_name || ""}
                        onChange={(e) => setEditedProfile((prev) => ({ ...prev, last_name: e.target.value }))}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    ) : (
                      <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.last_name}</p>
                    )}
                  </div>
                </div>

                {/* Email et téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-pink-400" />
                      Email
                    </Label>
                    <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.email}</p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      Téléphone
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile.phone || ""}
                        onChange={(e) => setEditedProfile((prev) => ({ ...prev, phone: e.target.value }))}
                        className="bg-white/5 border-white/20 text-white"
                        placeholder="+237 6XX XXX XXX"
                      />
                    ) : (
                      <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.phone || "Non renseigné"}</p>
                    )}
                  </div>
                </div>

                {/* Ville et pays */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      Ville
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile.city || ""}
                        onChange={(e) => setEditedProfile((prev) => ({ ...prev, city: e.target.value }))}
                        className="bg-white/5 border-white/20 text-white"
                        placeholder="Votre ville"
                      />
                    ) : (
                      <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.city || "Non renseigné"}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <Globe className="w-4 h-4 text-purple-400" />
                      Pays
                    </Label>
                    {isEditing ? (
                      <Select
                        value={editedProfile.country || ""}
                        onValueChange={(value) => setEditedProfile((prev) => ({ ...prev, country: value }))}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Sélectionnez votre pays" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country} className="text-white hover:bg-gray-800">
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.country || "Non renseigné"}</p>
                    )}
                  </div>
                </div>

                {/* Profession et entreprise */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-orange-400" />
                      Profession
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile.profession || ""}
                        onChange={(e) => setEditedProfile((prev) => ({ ...prev, profession: e.target.value }))}
                        className="bg-white/5 border-white/20 text-white"
                        placeholder="Votre profession"
                      />
                    ) : (
                      <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.profession || "Non renseigné"}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white flex items-center gap-2">
                      <Building className="w-4 h-4 text-cyan-400" />
                      Entreprise
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedProfile.company || ""}
                        onChange={(e) => setEditedProfile((prev) => ({ ...prev, company: e.target.value }))}
                        className="bg-white/5 border-white/20 text-white"
                        placeholder="Votre entreprise"
                      />
                    ) : (
                      <p className="text-gray-300 bg-white/5 p-3 rounded-lg">{profile.company || "Non renseigné"}</p>
                    )}
                  </div>
                </div>

                {/* Date de naissance */}
                <div className="space-y-2">
                  <Label className="text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-pink-400" />
                    Date de naissance
                  </Label>
                  {isEditing ? (
                    <Input
                      type="date"
                      value={editedProfile.date_of_birth || ""}
                      onChange={(e) => setEditedProfile((prev) => ({ ...prev, date_of_birth: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white"
                    />
                  ) : (
                    <p className="text-gray-300 bg-white/5 p-3 rounded-lg">
                      {profile.date_of_birth
                        ? new Date(profile.date_of_birth).toLocaleDateString("fr-FR")
                        : "Non renseigné"}
                    </p>
                  )}
                </div>

                {/* Niveau d'expérience */}
                <div className="space-y-3">
                  <Label className="text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Niveau d'expérience
                  </Label>
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {experienceLevels.map((level) => (
                        <button
                          key={level.value}
                          type="button"
                          onClick={() => setEditedProfile((prev) => ({ ...prev, experience_level: level.value }))}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                            editedProfile.experience_level === level.value
                              ? "border-purple-400 bg-purple-400/20 text-white"
                              : "border-white/20 bg-white/5 text-gray-300 hover:border-purple-400/50"
                          }`}
                        >
                          <div className="text-2xl mb-2">{level.icon}</div>
                          <div className="font-medium">{level.label}</div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <span className="text-2xl">
                        {experienceLevels.find((l) => l.value === profile.experience_level)?.icon}
                      </span>
                      <span className="text-gray-300">
                        {experienceLevels.find((l) => l.value === profile.experience_level)?.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* Centres d'intérêt */}
                <div className="space-y-3">
                  <Label className="text-white flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-400" />
                    Centres d'intérêt
                  </Label>
                  {isEditing ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {interests.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          disabled={
                            (editedProfile.interests?.length || 0) >= 5 &&
                            !(editedProfile.interests || []).includes(interest)
                          }
                          className={`p-3 rounded-lg text-sm transition-all duration-300 ${
                            (editedProfile.interests || []).includes(interest)
                              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                              : "bg-white/5 border border-white/20 text-gray-300 hover:border-purple-400/50 disabled:opacity-50"
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profile.interests && profile.interests.length > 0 ? (
                        profile.interests.map((interest) => (
                          <Badge key={interest} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                            {interest}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-gray-400">Aucun centre d'intérêt renseigné</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label className="text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-400" />À propos de vous
                  </Label>
                  {isEditing ? (
                    <Textarea
                      value={editedProfile.bio || ""}
                      onChange={(e) => setEditedProfile((prev) => ({ ...prev, bio: e.target.value }))}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                      placeholder="Parlez-nous de vous, vos objectifs, votre parcours..."
                      maxLength={500}
                    />
                  ) : (
                    <p className="text-gray-300 bg-white/5 p-3 rounded-lg min-h-[100px]">
                      {profile.bio || "Aucune description renseignée"}
                    </p>
                  )}
                </div>

                {/* Bouton de sauvegarde */}
                {isEditing && (
                  <div className="flex justify-end">
                    <Button
                      onClick={handleSaveProfile}
                      disabled={loading}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sauvegarde...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Save className="w-4 h-4" />
                          Sauvegarder
                        </div>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formations Tab */}
          <TabsContent value="formations">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">Mes Formations</CardTitle>
                <CardDescription className="text-gray-300">
                  Suivez vos progrès et accédez à vos formations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 mb-4">Aucune formation inscrite pour le moment</p>
                  <Button
                    onClick={() => router.push("/formations")}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Découvrir nos formations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">Mes Commandes</CardTitle>
                <CardDescription className="text-gray-300">Historique de vos achats et services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 mb-4">Aucune commande pour le moment</p>
                  <Button
                    onClick={() => router.push("/services")}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Découvrir nos services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">Paramètres</CardTitle>
                <CardDescription className="text-gray-300">Gérez vos préférences et notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Notifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Bell className="w-5 h-5 text-yellow-400" />
                    Notifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Emails marketing</p>
                        <p className="text-sm text-gray-400">Recevez nos newsletters et offres spéciales</p>
                      </div>
                      <Switch
                        checked={editedProfile.marketing_consent || false}
                        onCheckedChange={(checked) =>
                          setEditedProfile((prev) => ({ ...prev, marketing_consent: checked }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Notifications de formation</p>
                        <p className="text-sm text-gray-400">Alertes sur vos formations en cours</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white">Rappels de paiement</p>
                        <p className="text-sm text-gray-400">Notifications pour les échéances</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                {/* Sécurité */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    Sécurité
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      Changer le mot de passe
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      Authentification à deux facteurs
                    </Button>
                  </div>
                </div>

                {/* Sauvegarde des paramètres */}
                <div className="flex justify-end">
                  <Button
                    onClick={handleSaveProfile}
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sauvegarde...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Save className="w-4 h-4" />
                        Sauvegarder les paramètres
                      </div>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
