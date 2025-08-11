"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Megaphone, Palette, Zap, Users, Globe, CheckCircle, Star, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  features: string[]
  technologies: string[]
  startingPrice: string
  deliveryTime: string
  color: string
  image_url: string | null
  slug: string
}

const iconMap: Record<string, any> = {
  'creation-developpement': Code,
  'marketing-digital': Megaphone,
  'design-identite': Palette,
  'automatisation': Zap,
  'coaching-formation': Users,
  'creation-entreprise': Globe
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [formData, setFormData] = useState({
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    businessDomain: ''
  })
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)

      if (error) {
        toast({
          title: "Erreur",
          description: "Impossible de charger les services",
          variant: "destructive"
        })
        return
      }

      const mappedServices = data?.map((service: any) => ({
        ...service,
        startingPrice: service.base_price ? new Intl.NumberFormat('fr-FR').format(service.base_price) + ' FCFA' : '',
        longDescription: service.description,
        features: service.features || [],
        technologies: service.technologies || [],
        image_url: service.image_url || null,
        deliveryTime: service.delivery_time || ''
      })) || []

      setServices(mappedServices)
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors du chargement des services",
        variant: "destructive"
      })
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const openForm = (service: Service) => {
    setSelectedService(service)
    setStep(1)
  }

  const closeForm = () => {
    setSelectedService(null)
    setStep(1)
    setFormData({
      clientName: '',
      companyName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      businessDomain: ''
    })
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step < 3) {
      nextStep()
      return
    }
    setIsSubmitting(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        toast({
          title: "Connexion requise",
          description: "Veuillez vous connecter pour commander un service.",
          variant: "destructive"
        })
        return
      }

      const { error } = await supabase.rpc('add_service_to_cart', {
        p_user_id: user.id,
        p_service_id: selectedService?.id,
        p_client_name: formData.clientName,
        p_company_name: formData.companyName,
        p_email: formData.email,
        p_phone: formData.phone,
        p_country: formData.country,
        p_city: formData.city,
        p_business_domain: formData.businessDomain
      })

      if (error) {
        toast({
          title: "Erreur",
          description: error.message || "Erreur lors de l'ajout au panier.",
          variant: "destructive"
        })
        return
      }

      toast({
        title: "Service ajouté au panier",
        description: "Vous pouvez maintenant procéder au paiement.",
      })

      closeForm()
    } catch (error: unknown) {
      toast({
        title: "Erreur",
        description: (error as Error).message || "Une erreur est survenue.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A84FF] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">
              Nos Services
            </h1>
            <p className="font-open-sans text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Des solutions digitales complètes pour transformer votre entreprise 
              et booster votre présence en ligne.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Expertise certifiée
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                95% de satisfaction
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Livraison rapide
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.slug] || Code
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={service.image_url || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="font-poppins font-semibold text-[#0A84FF]">
                        À partir de {service.startingPrice}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="font-poppins font-bold text-2xl text-[#121212] mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-open-sans text-gray-600 text-base leading-relaxed">
                      {service.longDescription}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                      <span>⏱️ {service.deliveryTime}</span>
                      <span>🔧 {service.technologies.length} technologies</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-lg text-[#121212] mb-4">
                        Ce qui est inclus :
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#0A84FF] mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-sm text-[#121212] mb-3">
                        Technologies utilisées :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" className="flex-1" onClick={() => openForm(service)}>
                        Commander
                      </Button>
                      <Link href={`/services/${service.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          En savoir plus
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulaire multi-étapes */}
      {selectedService && (
        <section className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-lg p-8 max-w-lg w-full relative text-white shadow-lg">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={closeForm}
              aria-label="Fermer le formulaire"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">Commander : {selectedService?.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div>
                    <label htmlFor="clientName" className="block font-medium mb-1">Nom du client *</label>
                    <Input
                      id="clientName"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      required
                      className="bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-1">Adresse mail *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-medium mb-1">Numéro de téléphone *</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button type="button" variant="outline" onClick={closeForm}>Annuler</Button>
                    <Button type="button" className="btn-primary" onClick={nextStep}>Suivant</Button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div>
                    <label htmlFor="companyName" className="block font-medium mb-1">Nom de l'entreprise</label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block font-medium mb-1">Pays *</label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block font-medium mb-1">Ville *</label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="bg-white text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessDomain" className="block font-medium mb-1">Domaine d'activité *</label>
                    <Input
                      id="businessDomain"
                      name="businessDomain"
                      value={formData.businessDomain}
                      onChange={handleInputChange}
                      required
                      className="bg-white text-black"
                    />
                  </div>
                  <div className="flex justify-between space-x-4">
                    <Button type="button" variant="outline" onClick={prevStep}>Précédent</Button>
                    <Button type="button" className="btn-primary" onClick={nextStep}>Suivant</Button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <div>
                    <h3 className="font-semibold mb-4">Confirmez vos informations</h3>
                    <ul className="text-sm space-y-2">
                      <li><strong>Nom du client:</strong> {formData.clientName}</li>
                      <li><strong>Email:</strong> {formData.email}</li>
                      <li><strong>Téléphone:</strong> {formData.phone}</li>
                      <li><strong>Nom de l'entreprise:</strong> {formData.companyName || '-'}</li>
                      <li><strong>Pays:</strong> {formData.country}</li>
                      <li><strong>Ville:</strong> {formData.city}</li>
                      <li><strong>Domaine d'activité:</strong> {formData.businessDomain}</li>
                    </ul>
                  </div>
                  <div className="flex justify-between space-x-4">
                    <Button type="button" variant="outline" onClick={prevStep}>Précédent</Button>
                    <Button type="submit" disabled={isSubmitting} className="btn-primary">
                      {isSubmitting ? 'Ajout en cours...' : 'Ajouter au panier'}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>
      )}
    </main>
  )
}
