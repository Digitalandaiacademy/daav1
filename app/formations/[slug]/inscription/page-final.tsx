"use client"

import { useState, useEffect } from "react"
import { notFound, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowRight, CheckCircle, CreditCard, User, Phone, Calendar, Clock, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface Formation {
  id: string
  title: string
  slug: string
  price: number
  duration_weeks: number
  start_date: string | null
  level: string
  image_url: string | null
}

interface Props {
  params: Promise<{ slug: string }>
}

export default function InscriptionPage({ params }: Props) {
  const [formation, setFormation] = useState<Formation | null>(null)
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const supabase = createClientComponentClient()

  // Utiliser useEffect pour gérer les paramètres asynchrones
  const [slug, setSlug] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    profession: "",
    company: "",
    experience: "",

    // Motivations
    motivation: "",
    objectives: "",
    availability: "",

    // Paiement
    paymentMethod: "card",
    installments: false,
  })

  useEffect(() => {
    const loadParams = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
    }
    loadParams()
  }, [params])

  useEffect(() => {
    if (slug) {
      fetchFormation()
    }
  }, [slug])

  const fetchFormation = async () => {
    try {
      const { data, error } = await supabase
        .from('formations')
        .select('id, title, slug, price, duration_weeks, start_date, level, image_url')
        .eq('slug', slug)
        .eq('is_active', true)
        .single()

      if (error) {
        console.error('Erreur lors de la récupération de la formation:', error)
        setFormation(null)
      } else {
        setFormation(data)
      }
    } catch (error) {
      console.error('Erreur:', error)
      setFormation(null)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A84FF] mx-auto"></div>
              <p className="mt-4 text-gray-600">Chargement de la formation...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!formation) {
    notFound()
    return null
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA"
  }

  const formatDuration = (weeks: number) => {
    return `${weeks} semaine${weeks > 1 ? 's' : ''}`
  }

  const formatDate = (date: string | null) => {
    if (!date) return "Date à définir"
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const handleAddToCart = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Vérifier si l'utilisateur est connecté
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        toast({
          title: "Connexion requise",
          description: "Veuillez vous connecter pour ajouter cette formation à votre panier.",
          variant: "destructive",
        })
        router.push('/auth/login')
        return
      }

      // Ajouter la formation au panier via RPC
      const { data: orderId, error } = await supabase.rpc('add_formation_to_cart', {
        p_user_id: user.id,
        p_formation_id: formation.id,
        p_quantity: 1
      })

      if (error) {
        console.error('Erreur RPC:', error)
        toast({
          title: "Erreur RPC",
          description: error.message || JSON.stringify(error),
          variant: "destructive",
        })
        throw error
      }

      toast({
        title: "Formation ajoutée au panier !",
        description: "Vous pouvez maintenant procéder au paiement.",
      })

      // Rediriger vers le panier
      router.push('/cart')
      
    } catch (error: any) {
      console.error('Erreur catch:', error)
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'ajout au panier.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <main className="pt-20 min-h-screen bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-[#121212] mb-4">
              Inscription à la formation
            </h1>
            <h2 className="font-poppins font-semibold text-xl text-[#0A84FF] mb-6">{formation.title}</h2>

            {/* Progress bar */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((stepNumber) => (
                  <div key={stepNumber} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        step >= stepNumber ? "bg-[#0A84FF] text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {stepNumber}
                    </div>
                    {stepNumber < 3 && (
                      <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-[#0A84FF]" : "bg-gray-200"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins font-bold text-xl">
                    {step === 1 && "Informations personnelles"}
                    {step === 2 && "Motivations et objectifs"}
                    {step === 3 && "Confirmation et ajout au panier"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddToCart}>
                    {/* Étape 1: Informations personnelles */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block font-poppins font-medium text-gray-700 mb-2">Prénom *</label>
                            <Input
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Votre prénom"
                            />
                          </div>
                          <div>
                            <label className="block font-poppins font-medium text-gray-700 mb-2">Nom *</label>
                            <Input
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Votre nom"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block font-poppins font-medium text-gray-700 mb-2">Email *</label>
                            <Input
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="votre@email.com"
                            />
                          </div>
                          <div>
                            <label className="block font-poppins font-medium text-gray-700 mb-2">Téléphone *</label>
                            <Input
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+237 6XX XXX XXX"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block font-poppins font-medium text-gray-700 mb-2">
                              Date de naissance
                            </label>
                            <Input
                              name="dateOfBirth"
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <label className="block font-poppins font-medium text-gray-700 mb-2">
                              Profession actuelle
                            </label>
                            <Input
                              name="profession"
                              value={formData.profession}
                              onChange={handleChange}
                              placeholder="Votre profession"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-poppins font-medium text-gray-700 mb-2">
                            Entreprise/Organisation
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nom de votre entreprise (optionnel)"
                          />
                        </div>

                        <div>
                          <label className="block font-poppins font-medium text-gray-700 mb-2">
                            Niveau d'expérience dans le domaine
                          </label>
                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A84FF]"
                          >
                            <option value="">Sélectionnez votre niveau</option>
                            <option value="debutant">Débutant complet</option>
                            <option value="notions">Quelques notions</option>
                            <option value="intermediaire">Niveau intermédiaire</option>
                            <option value="avance">Niveau avancé</option>
                          </select>
                        </div>

                        <div className="flex justify-end">
                          <Button type="button" onClick={nextStep} className="btn-primary">
                            Suivant
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Étape 2: Motivations */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block font-poppins font-medium text-gray-700 mb-2">
                            Pourquoi souhaitez-vous suivre cette formation ? *
                          </label>
                          <Textarea
                            name="motivation"
                            required
                            value={formData.motivation}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Décrivez vos motivations..."
                          />
                        </div>

                        <div>
                          <label className="block font-poppins font-medium text-gray-700 mb-2">
                            Quels sont vos objectifs après cette formation ? *
                          </label>
                          <Textarea
                            name="objectives"
                            required
                            value={formData.objectives}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Vos objectifs professionnels..."
                          />
                        </div>

                        <div>
                          <label className="block font-poppins font-medium text-gray-700 mb-2">
                            Disponibilité pour suivre la formation
                          </label>
                          <select
                            name="availability"
                            value={formData.availability}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A84FF]"
                          >
                            <option value="">Sélectionnez votre disponibilité</option>
                            <option value="temps-plein">Temps plein</option>
                            <option value="temps-partiel">Temps partiel</option>
                            <option value="weekend">Week-ends uniquement</option>
                            <option value="soir">Cours du soir</option>
                          </select>
                        </div>

                        <div className="flex justify-between">
                          <Button type="button" onClick={prevStep} variant="outline">
                            Précédent
                          </Button>
                          <Button type="button" onClick={nextStep} className="btn-primary">
                            Suivant
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Étape 3: Confirmation */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div className="bg-[#F5F6FA] rounded-lg p-6">
                          <h3 className="font-poppins font-semibold text-lg mb-4">
                            Récapitulatif de votre inscription
                          </h3>
                          <div className="space-y-2 text-sm">
                            <p>
                              <strong>Nom:</strong> {formData.firstName} {formData.lastName}
                            </p>
                            <p>
                              <strong>Email:</strong> {formData.email}
                            </p>
                            <p>
                              <strong>Téléphone:</strong> {formData.phone}
                            </p>
                            <p>
                              <strong>Formation:</strong> {formation.title}
                            </p>
                            <p>
                              <strong>Début:</strong> {formatDate(formation.start_date)}
                            </p>
                            <p>
                              <strong>Durée:</strong> {formatDuration(formation.duration_weeks)}
                            </p>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-poppins font-semibold text-green-800">Garanties incluses</span>
                          </div>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Certificat de formation officiel</li>
                            <li>• Support 24/7 pendant la formation</li>
                            <li>• Accès aux ressources à vie</li>
                            <li>• Remboursement sous 7 jours si non satisfait</li>
                          </ul>
                        </div>

                        <div className="flex justify-between">
                          <Button type="button" onClick={prevStep} variant="outline">
                            Précédent
                          </Button>
                          <Button 
                            type="submit" 
                            disabled={isSubmitting} 
                            className="btn-primary"
                          >
                            {isSubmitting ? (
                              <>
                                <ShoppingCart className="w-4 h-4 mr-2 animate-spin" />
                                Ajout au panier...
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Ajouter au panier
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Résumé formation */}
                <Card>
                  <CardContent className="p-6">
                    <Image
                      src={formation.image_url || "/placeholder.svg"}
                      alt={formation.title}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-poppins font-bold text-lg text-[#121212] mb-2">{formation.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {formatDuration(formation.duration_weeks)}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Début: {formatDate(formation.start_date)}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Niveau {formation.level}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-poppins font-medium">Prix total:</span>
                        <span className="font-poppins font-bold text-2xl text-[#0A84FF]">
                          {formatPrice(formation.price)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="bg-gradient-to-r from-[#0A84FF]/10 to-[#7D3C98]/10">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-12 h-12 text-[#0A84FF] mx-auto mb-4" />
                    <h3 className="font-poppins font-semibold text-lg mb-2">Besoin d'aide ?</h3>
                    <p className="text-sm text-gray-600 mb-4">Notre équipe est là pour vous accompagner</p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Joseph Chanel OBAH</strong>
                      </p>
                      <p>+237 695 265 626</p>
                      <p>info@digitalai-academy.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
