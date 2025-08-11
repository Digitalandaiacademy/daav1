"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A84FF] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">Contactez-nous</h1>
            <p className="font-open-sans text-xl md:text-2xl text-white/90 leading-relaxed">
              Prêt à transformer votre projet digital ? Parlons-en ensemble !
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulaire */}
            <div>
              <h2 className="section-title mb-8">Envoyez-nous un message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-poppins font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-poppins font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-poppins font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-poppins font-medium text-gray-700 mb-2">
                      Service d'intérêt
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A84FF] focus:border-transparent"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="creation-developpement">Création & Développement</option>
                      <option value="marketing-digital">Marketing Digital</option>
                      <option value="design-identite">Design & Identité</option>
                      <option value="automatisation">Automatisation</option>
                      <option value="coaching-formation">Coaching & Formation</option>
                      <option value="formation-ia">Formation IA</option>
                      <option value="formation-web">Formation Web</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-poppins font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-poppins font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="btn-primary w-full text-lg py-4">
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title mb-8">Nos coordonnées</h2>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-[#0A84FF]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#0A84FF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg text-[#121212] mb-2">Adresse</h3>
                          <p className="font-open-sans text-gray-600">
                            Douala - Bonaberi
                            <br />
                            Cameroun
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#FF3B30]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#FF3B30] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg text-[#121212] mb-2">Téléphone</h3>
                          <p className="font-open-sans text-gray-600">
                            <a href="tel:+237695265626" className="hover:text-[#FF3B30] transition-colors">
                              +237 695 265 626
                            </a>
                          </p>
                          <p className="font-open-sans text-sm text-gray-500 mt-1">Joseph Chanel OBAH - Fondateur</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#7D3C98]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#7D3C98] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg text-[#121212] mb-2">Email</h3>
                          <p className="font-open-sans text-gray-600">
                            <a
                              href="mailto:info@digitalai-academy.com"
                              className="hover:text-[#7D3C98] transition-colors"
                            >
                              info@digitalai-academy.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#0A84FF]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#0A84FF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg text-[#121212] mb-2">WhatsApp</h3>
                          <p className="font-open-sans text-gray-600">
                            <a href="https://wa.me/237695265626" className="hover:text-[#0A84FF] transition-colors">
                              +237 695 265 626
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#FF3B30]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#FF3B30] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg text-[#121212] mb-2">Horaires</h3>
                          <div className="font-open-sans text-gray-600 space-y-1">
                            <p>Lundi - Vendredi: 8h00 - 18h00</p>
                            <p>Samedi: 9h00 - 15h00</p>
                            <p>Dimanche: Fermé</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Nous trouver</h2>
            <p className="section-subtitle">Venez nous rendre visite à Douala - Bonaberi</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#0A84FF] mx-auto mb-4" />
                <p className="font-poppins font-medium text-gray-600">Carte Google Maps à intégrer</p>
                <p className="font-open-sans text-sm text-gray-500">Douala - Bonaberi, Cameroun</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
