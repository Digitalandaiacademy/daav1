import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Megaphone, TrendingUp, Users, BarChart, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Marketing Digital - Digital & AI Academy",
  description:
    "Services de marketing digital : gestion réseaux sociaux, publicité Facebook/Google, SEO et stratégies digitales à Douala, Cameroun.",
}

export default function MarketingDigitalPage() {
  const services = [
    {
      icon: Users,
      title: "Community Management",
      description: "Gestion complète de vos réseaux sociaux",
      price: "À partir de 75,000 FCFA/mois",
      duration: "Service mensuel",
      features: [
        "Création de contenu quotidien",
        "Gestion Facebook & Instagram",
        "Interaction avec la communauté",
        "Planification des publications",
        "Rapport mensuel détaillé",
        "Stratégie de croissance",
      ],
    },
    {
      icon: Megaphone,
      title: "Publicité Facebook & Instagram",
      description: "Campagnes publicitaires ciblées et performantes",
      price: "À partir de 100,000 FCFA/mois",
      duration: "Campagnes mensuelles",
      features: [
        "Création des visuels publicitaires",
        "Ciblage précis de l'audience",
        "Optimisation des campagnes",
        "A/B testing des annonces",
        "Suivi des conversions",
        "Rapport de performance",
      ],
    },
    {
      icon: TrendingUp,
      title: "Google Ads & SEA",
      description: "Publicité sur Google pour plus de visibilité",
      price: "À partir de 120,000 FCFA/mois",
      duration: "Gestion mensuelle",
      features: [
        "Recherche de mots-clés",
        "Création des annonces Google",
        "Optimisation du Quality Score",
        "Landing pages optimisées",
        "Suivi des conversions",
        "Analyse concurrentielle",
      ],
    },
    {
      icon: BarChart,
      title: "SEO & Référencement",
      description: "Amélioration de votre visibilité naturelle",
      price: "À partir de 90,000 FCFA/mois",
      duration: "Optimisation continue",
      features: [
        "Audit SEO complet",
        "Optimisation technique",
        "Création de contenu SEO",
        "Netlinking de qualité",
        "Suivi des positions",
        "Rapport mensuel détaillé",
      ],
    },
  ]

  const results = [
    {
      metric: "+300%",
      description: "Augmentation moyenne du trafic web",
      icon: TrendingUp,
    },
    {
      metric: "+250%",
      description: "Croissance des ventes en ligne",
      icon: BarChart,
    },
    {
      metric: "+400%",
      description: "Engagement sur les réseaux sociaux",
      icon: Users,
    },
    {
      metric: "95%",
      description: "Taux de satisfaction client",
      icon: Award,
    },
  ]

  const caseStudies = [
    {
      title: "Restaurant Le Délice",
      category: "Restauration",
      challenge: "Augmenter les commandes en ligne",
      solution: "Campagne Facebook Ads + Community Management",
      result: "+400% de commandes en 3 mois",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+Case+Study",
    },
    {
      title: "Boutique Mode Africaine",
      category: "E-commerce",
      challenge: "Développer la notoriété de marque",
      solution: "Stratégie Instagram + Influenceurs",
      result: "+500% de followers, +200% de ventes",
      image: "/placeholder.svg?height=300&width=400&text=Fashion+Case+Study",
    },
    {
      title: "Cabinet d'Avocat",
      category: "Services",
      challenge: "Générer plus de prospects qualifiés",
      solution: "SEO + Google Ads ciblés",
      result: "+300% de demandes de consultation",
      image: "/placeholder.svg?height=300&width=400&text=Law+Firm+Case+Study",
    },
  ]

  const testimonials = [
    {
      name: "Fatima Nkomo",
      company: "Boutique Élégance",
      content: "Grâce à leur stratégie marketing, mes ventes ont triplé en 6 mois. Une équipe exceptionnelle !",
      rating: 5,
    },
    {
      name: "Jean-Claude Mbarga",
      company: "Restaurant Le Savoureux",
      content: "Leur gestion de nos réseaux sociaux a transformé notre visibilité. Nous sommes ravis !",
      rating: 5,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF3B30] to-[#0A84FF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Service Expert</Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">Marketing Digital</h1>
              <p className="font-open-sans text-xl text-white/90 leading-relaxed mb-8">
                Boostez votre visibilité et vos ventes grâce à nos stratégies marketing digital personnalisées. Réseaux
                sociaux, publicité en ligne et référencement.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>ROI garanti</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Résultats rapides</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Experts certifiés</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=marketing-digital">
                  <Button className="bg-white text-[#FF3B30] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4">
                    Audit gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#case-studies">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#FF3B30] text-lg px-8 py-4 bg-transparent"
                  >
                    Voir nos résultats
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Digital+Marketing+Illustration"
                alt="Marketing Digital"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Résultats Parlent d'Eux-Mêmes</h2>
            <p className="section-subtitle">Des performances mesurables pour nos clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#0A84FF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-montserrat font-bold text-4xl text-[#FF3B30] mb-2">{result.metric}</div>
                    <p className="font-open-sans text-gray-600">{result.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Services Marketing</h2>
            <p className="section-subtitle">Des solutions complètes pour votre présence digitale</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#0A84FF] rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-poppins font-bold text-xl text-[#121212]">{service.title}</CardTitle>
                        <p className="text-[#FF3B30] font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="font-open-sans text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <h4 className="font-poppins font-semibold text-lg mb-4">Ce qui est inclus :</h4>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#FF3B30] mr-3 flex-shrink-0" />
                          <span className="font-open-sans text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="btn-secondary w-full">
                        Commencer maintenant
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Études de Cas</h2>
            <p className="section-subtitle">Découvrez comment nous avons aidé nos clients à réussir</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#FF3B30] text-white">{study.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-bold text-lg text-[#121212] mb-4">{study.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="font-poppins font-semibold text-sm text-gray-700">Défi :</span>
                      <p className="font-open-sans text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-poppins font-semibold text-sm text-gray-700">Solution :</span>
                      <p className="font-open-sans text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-poppins font-semibold text-sm text-gray-700">Résultat :</span>
                      <p className="font-open-sans text-sm text-[#FF3B30] font-semibold">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Témoignages Clients</h2>
            <p className="section-subtitle">Ce que disent nos clients de nos services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="font-open-sans text-gray-600 italic mb-6">"{testimonial.content}"</p>
                  <div>
                    <p className="font-poppins font-semibold text-[#121212]">{testimonial.name}</p>
                    <p className="font-open-sans text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF3B30] to-[#0A84FF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">Prêt à booster votre business ?</h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez un audit gratuit de votre présence digitale et découvrez comment nous pouvons vous aider à atteindre
            vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=marketing-digital">
              <Button className="bg-white text-[#FF3B30] hover:bg-gray-100 text-lg px-8 py-4">
                Audit gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+237695265626">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#FF3B30] text-lg px-8 py-4 bg-transparent"
              >
                Appeler Joseph Chanel
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
