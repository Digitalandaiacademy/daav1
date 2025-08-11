"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Lock, Check, Shield, Zap, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()

  useEffect(() => {
    // Vérifier si nous avons les paramètres nécessaires
    const accessToken = searchParams.get("access_token")
    const refreshToken = searchParams.get("refresh_token")

    if (!accessToken || !refreshToken) {
      setError("Lien de réinitialisation invalide ou expiré")
    }
  }, [searchParams])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      setLoading(false)
      return
    }

    if (getPasswordStrength(password) < 3) {
      setError("Le mot de passe doit être plus fort")
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      })

      if (error) throw error

      setSuccess(true)
      setTimeout(() => {
        router.push("/auth/login")
      }, 3000)
    } catch (err: any) {
      setError(err.message || "Erreur lors de la réinitialisation du mot de passe")
    } finally {
      setLoading(false)
    }
  }

  const passwordStrength = getPasswordStrength(password)
  const passwordStrengthInfo = getPasswordStrengthLabel(passwordStrength)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 4 === 0
                ? "w-1 h-1 bg-emerald-400"
                : i % 4 === 1
                  ? "w-2 h-2 bg-green-400"
                  : i % 4 === 2
                    ? "w-1.5 h-1.5 bg-teal-400"
                    : "w-0.5 h-0.5 bg-white"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Grille digitale animée */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border border-emerald-400 animate-pulse"
              style={{
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Effets de lumière */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  Nouveau mot de passe
                </span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                {success ? "Mot de passe mis à jour avec succès !" : "Créez un nouveau mot de passe sécurisé"}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            {success ? (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400">
                    Votre mot de passe a été réinitialisé avec succès !
                  </div>
                  <p className="text-gray-300 text-sm">
                    Vous allez être redirigé vers la page de connexion dans quelques secondes.
                  </p>
                </div>
                <Link href="/auth/login">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white">
                    Se connecter maintenant
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    Nouveau mot de passe
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-emerald-400 focus:ring-emerald-400 pr-12"
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
                  {password && (
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
                        <span className={`text-xs ${passwordStrengthInfo.color}`}>{passwordStrengthInfo.label}</span>
                      </div>
                      <div className="text-xs text-gray-400 space-y-1">
                        <p>Le mot de passe doit contenir :</p>
                        <ul className="space-y-1 ml-4">
                          <li className={password.length >= 8 ? "text-green-400" : "text-gray-400"}>
                            • Au moins 8 caractères
                          </li>
                          <li className={/[A-Z]/.test(password) ? "text-green-400" : "text-gray-400"}>
                            • Une majuscule
                          </li>
                          <li className={/[a-z]/.test(password) ? "text-green-400" : "text-gray-400"}>
                            • Une minuscule
                          </li>
                          <li className={/[0-9]/.test(password) ? "text-green-400" : "text-gray-400"}>• Un chiffre</li>
                          <li className={/[^A-Za-z0-9]/.test(password) ? "text-green-400" : "text-gray-400"}>
                            • Un caractère spécial
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-green-400" />
                    Confirmer le mot de passe
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:ring-green-400 pr-12"
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
                  {confirmPassword && password !== confirmPassword && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Les mots de passe ne correspondent pas
                    </p>
                  )}
                  {confirmPassword && password === confirmPassword && password && (
                    <p className="text-green-400 text-xs flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Les mots de passe correspondent
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading || password !== confirmPassword || getPasswordStrength(password) < 3}
                  className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white font-medium py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Mise à jour...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-5 h-5" />
                      Mettre à jour le mot de passe
                    </div>
                  )}
                </Button>

                <div className="text-center">
                  <Link
                    href="/auth/login"
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    Retour à la connexion
                  </Link>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Indicateurs de sécurité */}
        <div className="mt-6 flex justify-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Shield className="w-4 h-4 text-green-400" />
            Sécurisé SSL
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Zap className="w-4 h-4 text-emerald-400" />
            Chiffrement fort
          </div>
        </div>
      </div>
    </div>
  )
}
