import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Users, Award, CheckCircle, Star, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Données des formations (normalement depuis une base de données)
const formations = {
  "intelligence-artificielle": {
    title: "Formation Intelligence Artificielle",
    description:
      "Maîtrisez les outils IA pour votre activité professionnelle et découvrez les secrets de l'automatisation intelligente",
    duration: "8 semaines",
    level: "Débutant",
    students: 150,
    price: 150000,
    rating: 4.9,
    image: "/ai-training-neural-networks.png",
    highlights: ["ChatGPT & outils IA", "Automatisation", "Création de contenu", "Intégration business"],
    program: [
      "Introduction à l'IA et ses applications",
      "Maîtrise de ChatGPT et GPT-4",
      "Outils d'IA pour la création de contenu",
      "Automatisation avec l'IA",
      "Intégration IA dans les processus métier",
      "Éthique et limites de l'IA",
      "Projet final personnalisé",
    ],
    prerequisites: ["Aucun prérequis technique", "Motivation et curiosité"],
    certificate: true,
    support: "24/7",
    format: "Présentiel + En ligne",
    instructor: "Joseph Chanel OBAH",
    nextStart: "15 Mars 2024",
    testimonials: [
      {
        name: "Marie Dubois",
        role: "Entrepreneur",
        content:
          "Cette formation m'a permis d'automatiser 80% de mes tâches répétitives. Un investissement rentabilisé en 2 mois !",
        rating: 5,
      },
      {
        name: "Paul Nkomo",
        role: "Marketing Manager",
        content: "Excellente formation pratique. J'utilise maintenant l'IA quotidiennement dans mon travail.",
        rating: 5,
      },
    ],
  },
  "creation-sites-web": {
    title: "Formation Création de Sites Web",
    description:
      "Développez des sites web modernes et responsives avec WordPress, HTML/CSS et les dernières technologies",
    duration: "12 semaines",
    level: "Débutant",
    students: 200,
    price: 200000,
    rating: 4.8,
    image: "/web-development-course.png",
    highlights: ["WordPress", "HTML/CSS", "Responsive Design", "SEO de base"],
    program: [
      "Bases du web et HTML5",
      "Stylisation avec CSS3",
      "JavaScript pour l'interactivité",
      "WordPress de A à Z",
      "Responsive Design",
      "Optimisation SEO",
      "Mise en ligne et maintenance",
      "Projet de site complet",
    ],
    prerequisites: ["Bases en informatique", "Créativité"],
    certificate: true,
    support: "24/7",
    format: "Présentiel",
    instructor: "Joseph Chanel OBAH",
    nextStart: "1er Avril 2024",
    testimonials: [
      {
        name: "Jean Kamga",
        role: "Étudiant",
        content: "Formation très complète ! J'ai pu créer mon premier site professionnel en 3 mois.",
        rating: 5,
      },
    ],
  },
}

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const formation = formations[params.slug as keyof typeof formations]

  if (!formation) {
    return {
      title: "Formation non trouvée - Digital & AI Academy",
    }
  }

  return {
    title: `${formation.title} - Digital & AI Academy`,
    description: formation.description,
  }
}

export default function FormationDetailPage({ params }: Props) {
  const formation = formations[params.slug as keyof typeof formations]

  if (!formation) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA"
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A84FF] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Formation {formation.level}</Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">{formation.title}</h1>
              <p className="font-open-sans text-xl text-white/90 leading-relaxed mb-8">{formation.description}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{formation.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{formation.students}+ étudiants</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>{formation.rating}/5</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Début: {formation.nextStart}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/formations/${params.slug}/inscription`}>
                  <Button className="bg-white text-[#0A84FF] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4 rounded-lg">
                    S'inscrire maintenant
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#0A84FF] text-lg px-8 py-4 bg-transparent"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src={formation.image || "/placeholder.svg"}
                alt={formation.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-poppins font-bold text-2xl text-[#0A84FF]">{formatPrice(formation.price)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Programme */}
            <section>
              <h2 className="section-title mb-8">Programme de formation</h2>
              <div className="space-y-4">
                {formation.program.map((module, index) => (
                  <Card key={index} className="border-l-4 border-l-[#0A84FF]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-[#0A84FF] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg text-[#121212] mb-2">Module {index + 1}</h3>
                          <p className="font-open-sans text-gray-600">{module}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Points clés */}
            <section>
              <h2 className="section-title mb-8">Ce que vous allez apprendre</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {formation.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#0A84FF] flex-shrink-0" />
                    <span className="font-open-sans text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Prérequis */}
            <section>
              <h2 className="section-title mb-8">Prérequis</h2>
              <div className="bg-[#F5F6FA] rounded-xl p-6">
                <ul className="space-y-3">
                  {formation.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-[#0A84FF] flex-shrink-0" />
                      <span className="font-open-sans text-gray-700">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Témoignages */}
            <section>
              <h2 className="section-title mb-8">Témoignages d'étudiants</h2>
              <div className="space-y-6">
                {formation.testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-gradient-to-r from-[#0A84FF]/5 to-[#7D3C98]/5">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className="flex space-x-1 mr-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                              ))}
                            </div>
                            <span className="font-poppins font-semibold text-[#121212]">{testimonial.name}</span>
                            <span className="text-gray-500 ml-2">- {testimonial.role}</span>
                          </div>
                          <p className="font-open-sans text-gray-600 italic">"{testimonial.content}"</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Informations de formation */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins font-bold text-xl">Informations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-open-sans text-gray-600">Prix</span>
                    <span className="font-poppins font-bold text-xl text-[#0A84FF]">
                      {formatPrice(formation.price)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-open-sans text-gray-600">Durée</span>
                    <span className="font-poppins font-medium">{formation.duration}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-open-sans text-gray-600">Niveau</span>
                    <Badge
                      className={`${
                        formation.level === "Débutant"
                          ? "bg-green-500"
                          : formation.level === "Intermédiaire"
                            ? "bg-orange-500"
                            : "bg-red-500"
                      }`}
                    >
                      {formation.level}
                    </Badge>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-open-sans text-gray-600">Format</span>
                    <span className="font-poppins font-medium">{formation.format}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-open-sans text-gray-600">Support</span>
                    <span className="font-poppins font-medium">{formation.support}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-open-sans text-gray-600">Certificat</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-open-sans text-gray-600">Prochaine session</span>
                    </div>
                    <span className="font-poppins font-bold text-[#FF3B30]">{formation.nextStart}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-4">
                <Link href={`/formations/${params.slug}/inscription`}>
                  <Button className="btn-primary w-full text-lg py-4">
                    S'inscrire maintenant
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="outline" className="w-full bg-transparent">
                    Demander des informations
                  </Button>
                </Link>
              </div>

              {/* Formateur */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins font-bold text-lg">Votre formateur</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">JO</span>
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-[#121212]">{formation.instructor}</h3>
                      <p className="font-open-sans text-sm text-gray-600">Fondateur & Expert IA</p>
                      <p className="font-open-sans text-xs text-gray-500 mt-1">15+ années d'expérience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Garantie */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-poppins font-semibold text-green-800 mb-2">Garantie satisfaction</h3>
                  <p className="font-open-sans text-sm text-green-700">
                    Remboursement intégral sous 7 jours si vous n'êtes pas satisfait
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
