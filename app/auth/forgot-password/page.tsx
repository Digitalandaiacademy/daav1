"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, ArrowLeft, Send, Check, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/components/providers/AuthProvider"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await resetPassword(email)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'envoi de l'email")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Particules flottantes - CSS only pour éviter les problèmes d'hydratation */}
      <div className="absolute inset-0">
        <div className="particle-forgot particle-forgot-1"></div>
        <div className="particle-forgot particle-forgot-2"></div>
        <div className="particle-forgot particle-forgot-3"></div>
        <div className="particle-forgot particle-forgot-4"></div>
        <div className="particle-forgot particle-forgot-5"></div>
        <div className="particle-forgot particle-forgot-6"></div>
        <div className="particle-forgot particle-forgot-7"></div>
        <div className="particle-forgot particle-forgot-8"></div>
        <div className="particle-forgot particle-forgot-9"></div>
        <div className="particle-forgot particle-forgot-10"></div>
      </div>

      {/* Grille digitale animée - CSS only */}
      <div className="absolute inset-0 opacity-10">
        <div className="digital-grid-forgot"></div>
      </div>

      {/* Effets de lumière */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Mot de passe oublié
                </span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                {success
                  ? "Email envoyé avec succès !"
                  : "Entrez votre email pour recevoir un lien de réinitialisation"}
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
                    Un email de réinitialisation a été envoyé à <strong>{email}</strong>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Vérifiez votre boîte de réception et suivez les instructions pour réinitialiser votre mot de passe.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Vous n'avez pas reçu l'email ? Vérifiez vos spams ou{" "}
                    <button
                      onClick={() => {
                        setSuccess(false)
                        setEmail("")
                      }}
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      réessayez
                    </button>
                  </p>
                </div>
                <Link href="/auth/login">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour à la connexion
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Adresse email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="votre@email.com"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 text-white font-medium py-3 transition-all duration-300 transform hover:scale-105"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Envoyer le lien de réinitialisation
                    </div>
                  )}
                </Button>

                <div className="text-center">
                  <Link
                    href="/auth/login"
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
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
            Email sécurisé
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Zap className="w-4 h-4 text-cyan-400" />
            Lien temporaire
          </div>
        </div>
      </div>
    </div>
  )
}
