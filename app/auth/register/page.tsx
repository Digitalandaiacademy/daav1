"use client"

import "./styles.css"
import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Building,
  Calendar,
  Heart,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "@/components/providers/AuthProvider"

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

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  // Données du formulaire
  const [formData, setFormData] = useState({
    // Étape 1 - Informations de base
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    phone: "",

    // Étape 2 - Informations personnelles
    city: "",
    country: "Cameroun",
    profession: "",
    company: "",
    date_of_birth: "",
    experience_level: "beginner",

    // Étape 3 - Préférences
    interests: [] as string[],
    bio: "",
    marketing_consent: false,
    terms_accepted: false,
  })

  const { signUp } = useAuth()
  const router = useRouter()

  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const getPasswordStrengthLabel = (strength: number) => {
    switch (strength) {
      case 0:
      case 1:
        return { label: "Très faible", color: "text-red-400" }
      case 2:
        return { label: "Faible", color: "text-orange-400" }
      case 3:
        return { label: "Moyen", color: "text-yellow-400" }
      case 4:
        return { label: "Fort", color: "text-green-400" }
      case 5:
        return { label: "Très fort", color: "text-emerald-400" }
      default:
        return { label: "", color: "" }
    }
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : prev.interests.length < 5
          ? [...prev.interests, interest]
          : prev.interests,
    }))
  }

  const validateStep1 = () => {
    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.first_name ||
      !formData.last_name
    ) {
      setError("Veuillez remplir tous les champs obligatoires")
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      return false
    }
    if (getPasswordStrength(formData.password) < 3) {
      setError("Le mot de passe doit être plus fort")
      return false
    }
    return true
  }

  const validateStep3 = () => {
    if (!formData.terms_accepted) {
      setError("Vous devez accepter les conditions d'utilisation")
      return false
    }
    return true
  }

  const handleNext = () => {
    setError("")
    if (step === 1 && !validateStep1()) return
    if (step === 3 && !validateStep3()) return
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setError("")
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep3()) return

    setLoading(true)
    setError("")

    try {
      await signUp(formData.email, formData.password, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        profession: formData.profession,
        company: formData.company,
        date_of_birth: formData.date_of_birth,
        experience_level: formData.experience_level,
        interests: formData.interests,
        bio: formData.bio,
        marketing_consent: formData.marketing_consent,
      })

      setSuccess("Inscription réussie ! Vérifiez votre email pour confirmer votre compte.")
      setTimeout(() => {
        router.push("/auth/login")
      }, 3000)
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'inscription")
    } finally {
      setLoading(false)
    }
  }

  const passwordStrength = getPasswordStrength(formData.password)
  const passwordStrengthInfo = getPasswordStrengthLabel(passwordStrength)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Particules flottantes - CSS only pour éviter les problèmes d'hydratation */}
      <div className="absolute inset-0">
        <div className="particle-register particle-register-1"></div>
        <div className="particle-register particle-register-2"></div>
        <div className="particle-register particle-register-3"></div>
        <div className="particle-register particle-register-4"></div>
        <div className="particle-register particle-register-5"></div>
        <div className="particle-register particle-register-6"></div>
        <div className="particle-register particle-register-7"></div>
        <div className="particle-register particle-register-8"></div>
        <div className="particle-register particle-register-9"></div>
        <div className="particle-register particle-register-10"></div>
      </div>

      {/* Grille digitale animée - CSS only */}
      <div className="absolute inset-0 opacity-10">
        <div className="digital-grid-register"></div>
      </div>

      {/* Effets de lumière */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-lg">
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full flex items-center justify-center animate-pulse">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Inscription
                </span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Rejoignez Digital & AI Academy - Étape {step}/3
              </CardDescription>
            </div>

            {/* Indicateur de progression */}
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i <= step ? "bg-gradient-to-r from-purple-400 to-pink-400" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </CardHeader>

          <CardContent>
            {success ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400">
                  {success}
                </div>
              </div>
            ) : (
              <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Étape 1 - Informations de base */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Informations de base</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first_name" className="text-white flex items-center gap-2">
                          <User className="w-4 h-4 text-purple-400" />
                          Prénom *
                        </Label>
                        <Input
                          id="first_name"
                          value={formData.first_name}
                          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                          required
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                          placeholder="Votre prénom"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="last_name" className="text-white flex items-center gap-2">
                          <User className="w-4 h-4 text-pink-400" />
                          Nom *
                        </Label>
                        <Input
                          id="last_name"
                          value={formData.last_name}
                          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                          required
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white flex items-center gap-2">
                        <Mail className="w-4 h-4 text-rose-400" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white flex items-center gap-2">
                        <Phone className="w-4 h-4 text-purple-400" />
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        placeholder="+237 6XX XXX XXX"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white flex items-center gap-2">
                        <Lock className="w-4 h-4 text-pink-400" />
                        Mot de passe *
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          required
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400 pr-12"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showPassword ? (
                            <div className="relative">
                              <EyeOff className="w-5 h-5" />
                              {/* Effet panda */}
                              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full animate-pulse" />
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
                            </div>
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {formData.password && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-white/10 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  passwordStrength <= 1
                                    ? "bg-red-400 w-1/5"
                                    : passwordStrength === 2
                                      ? "bg-orange-400 w-2/5"
                                      : passwordStrength === 3
                                        ? "bg-yellow-400 w-3/5"
                                        : passwordStrength === 4
                                          ? "bg-green-400 w-4/5"
                                          : "bg-emerald-400 w-full"
                                }`}
                              />
                            </div>
                            <span className={`text-xs ${passwordStrengthInfo.color}`}>
                              {passwordStrengthInfo.label}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white flex items-center gap-2">
                        <Lock className="w-4 h-4 text-rose-400" />
                        Confirmer le mot de passe *
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          required
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400 pr-12"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showConfirmPassword ? (
                            <div className="relative">
                              <EyeOff className="w-5 h-5" />
                              {/* Effet panda */}
                              <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full animate-pulse" />
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
                            </div>
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                        <p className="text-red-400 text-xs">Les mots de passe ne correspondent pas</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Étape 2 - Informations personnelles */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Informations personnelles</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-white flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          Ville
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                          placeholder="Votre ville"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-white flex items-center gap-2">
                          <Globe className="w-4 h-4 text-purple-400" />
                          Pays
                        </Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData({ ...formData, country: value })}
                        >
                          <SelectTrigger className="bg-white/5 border-white/20 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700">
                            {countries.map((country) => (
                              <SelectItem key={country} value={country} className="text-white hover:bg-gray-800">
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="profession" className="text-white flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-orange-400" />
                          Profession
                        </Label>
                        <Input
                          id="profession"
                          value={formData.profession}
                          onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                          placeholder="Votre profession"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white flex items-center gap-2">
                          <Building className="w-4 h-4 text-cyan-400" />
                          Entreprise
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                          placeholder="Votre entreprise"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date_of_birth" className="text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-400" />
                        Date de naissance
                      </Label>
                      <Input
                        id="date_of_birth"
                        type="date"
                        value={formData.date_of_birth}
                        onChange={(e) => setFormData({ ...formData, date_of_birth: e.target.value })}
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Niveau d'expérience
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {experienceLevels.map((level) => (
                          <button
                            key={level.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, experience_level: level.value })}
                            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                              formData.experience_level === level.value
                                ? "border-purple-400 bg-purple-400/20 text-white"
                                : "border-white/20 bg-white/5 text-gray-300 hover:border-purple-400/50"
                            }`}
                          >
                            <div className="text-2xl mb-2">{level.icon}</div>
                            <div className="font-medium">{level.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 3 - Préférences */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Préférences et finalisation</h3>

                    <div className="space-y-3">
                      <Label className="text-white flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        Centres d'intérêt (max 5)
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {interests.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            disabled={formData.interests.length >= 5 && !formData.interests.includes(interest)}
                            className={`p-3 rounded-lg text-sm transition-all duration-300 ${
                              formData.interests.includes(interest)
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                : "bg-white/5 border border-white/20 text-gray-300 hover:border-purple-400/50 disabled:opacity-50"
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">{formData.interests.length}/5 sélectionnés</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-white flex items-center gap-2">
                        <User className="w-4 h-4 text-indigo-400" />À propos de vous
                      </Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 min-h-[100px]"
                        placeholder="Parlez-nous de vous, vos objectifs, votre parcours..."
                        maxLength={500}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="marketing_consent"
                          checked={formData.marketing_consent}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, marketing_consent: checked as boolean })
                          }
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <Label htmlFor="marketing_consent" className="text-sm text-gray-300 leading-relaxed">
                          J'accepte de recevoir des emails marketing et des newsletters de Digital & AI Academy
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms_accepted"
                          checked={formData.terms_accepted}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, terms_accepted: checked as boolean })
                          }
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <Label htmlFor="terms_accepted" className="text-sm text-gray-300 leading-relaxed">
                          J'accepte les{" "}
                          <Link href="/terms" className="text-purple-400 hover:text-purple-300 underline">
                            conditions d'utilisation
                          </Link>{" "}
                          et la{" "}
                          <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">
                            politique de confidentialité
                          </Link>{" "}
                          *
                        </Label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Boutons de navigation */}
                <div className="flex justify-between gap-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={handlePrevious}
                      variant="outline"
                      className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Précédent
                    </Button>
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="ml-auto bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white"
                    >
                      Suivant
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={loading}
                      className="ml-auto bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white font-medium py-3 transition-all duration-300 transform hover:scale-105"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Inscription...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          Créer mon compte
                        </div>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            )}

            {!success && (
              <div className="text-center mt-6">
                <p className="text-gray-300">
                  Déjà un compte ?{" "}
                  <Link href="/auth/login" className="text-pink-400 hover:text-pink-300 font-medium transition-colors">
                    Se connecter
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Indicateurs de sécurité */}
        <div className="mt-6 flex justify-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Shield className="w-4 h-4 text-green-400" />
            Données sécurisées
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Zap className="w-4 h-4 text-purple-400" />
            Chiffrement SSL
          </div>
        </div>
      </div>
    </div>
  )
}
