import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Globe, FileText, Briefcase, TrendingUp, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Création d'Entreprise - Digital & AI Academy",
  description:
    "Accompagnement complet pour créer votre entreprise : démarches légales, branding, mise en place digitale et stratégie business à Douala, Cameroun.",
}

export default function CreationEntreprisePage() {
  const services = [
    {
      icon: FileText,
      title: "Démarches Légales",
      description: "Toutes les formalités administratives pour créer votre entreprise",
      price: "À partir de 75,000 FCFA",
      duration: "2-3 semaines",
      features: [
        "Choix de la forme juridique",
        "Rédaction des statuts",
        "Immatriculation RCCM",
        "Obtention du NUI",
        "Déclaration fiscale",
        "Suivi administratif complet",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Plan Complet",
      description: "Étude de marché et plan d'affaires professionnel",
      price: "À partir de 100,000 FCFA",
      duration: "3-4 semaines",
      features: [
        "Étude de marché approfondie",
        "Analyse concurrentielle",
        "Modèle économique",
        "Prévisions financières",
        "Stratégie marketing",
        "Présentation investisseurs",
      ],
    },
    {
      icon: Globe,
      title: "Identité & Présence Digitale",
      description: "Création de votre marque et présence en ligne",
      price: "À partir de 150,000 FCFA",
      duration: "2-3 semaines",
      features: [
        "Logo et identité visuelle",
        "Site web professionnel",
        "Réseaux sociaux",
        "Cartes de visite",
        "Supports de communication",
        "Stratégie de lancement",
      ],
    },
    {
      icon: TrendingUp,
      title: "Accompagnement Post-Création",
      description: "Suivi et conseils pour les premiers mois d'activité",
      price: "À partir de 50,000 FCFA/mois",
      duration: "Suivi mensuel",
      features: [
        "Conseils en gestion",
        "Optimisation fiscale",
        "Développement commercial",
        "Recrutement et RH",
        "Financement et subventions",
        "Mentorat personnalisé",
      ],
    },
  ]

  const steps = [
    {
      step: 1,
      title: "Consultation Initiale",
      description: "Analyse de votre projet et définition de la stratégie",
      duration: "1 semaine",
    },
    {
      step: 2,
      title: "Étude de Faisabilité",
      description: "Validation du marché et du modèle économique",
      duration: "2 semaines",
    },
    {
      step: 3,
      title: "Création Légale",
      description: "Toutes les démarches administratives et légales",
      duration: "3 semaines",
    },
    {
      step: 4,
      title: "Identité & Digital",
      description: "Création de la marque et présence en ligne",
      duration: "2 semaines",
    },
    {
      step: 5,
      title: "Lancement",
      description: "Mise sur le marché et premières actions commerciales",
      duration: "1 semaine",
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "200,000 FCFA",
      description: "Pour les projets simples",
      features: [
        "Démarches légales complètes",
        "Logo et identité de base",
        "Site web vitrine",
        "1 mois de suivi",
        "Support email",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "350,000 FCFA",
      description: "Pour les projets ambitieux",
      features: [
        "Tout du pack Starter",
        "Business plan complet",
        "Étude de marché",
        "Branding professionnel",
        "Site web e-commerce",
        "3 mois de suivi",
        "Support téléphonique",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "500,000 FCFA",
      description: "Accompagnement complet",
      features: [
        "Tout du pack Business",
        "Recherche de financement",
        "Stratégie marketing complète",
        "Formation équipe",
        "6 mois de mentorat",
        "Support prioritaire 24/7",
      ],
      popular: false,
    },
  ]

  const successStories = [
    {
      name: "TechStart Cameroun",
      founder: "Marie Kouam",
      sector: "Technologie",
      description: "Startup spécialisée dans les solutions digitales pour PME",
      result: "50 clients en 6 mois, levée de fonds de 10M FCFA",
      image: "/placeholder.svg?height=300&width=400&text=TechStart+Success",
    },
    {
      name: "Délice Africain",
      founder: "Paul Mbarga",
      sector: "Restauration",
      description: "Chaîne de restaurants de cuisine africaine moderne",
      result: "3 restaurants ouverts, 25 employés, CA 100M FCFA/an",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+Success",
    },
    {
      name: "Mode & Style",
      founder: "Fatima Nkomo",
      sector: "Mode",
      description: "Boutique en ligne de vêtements africains contemporains",
      result: "1000+ clients, présence dans 5 pays, CA 50M FCFA/an",
      image: "/placeholder.svg?height=300&width=400&text=Fashion+Success",
    },
  ]

  const testimonials = [
    {
      name: "Marie Kouam",
      company: "TechStart Cameroun",
      content:
        "L'accompagnement a été exceptionnel. De l'idée à la réalisation, l'équipe nous a guidés à chaque étape.",
      rating: 5,
    },
    {
      name: "Paul Mbarga",
      company: "Délice Africain",
      content: "Grâce à leur expertise, j'ai évité de nombreux pièges et mon entreprise a démarré sur de bonnes bases.",
      rating: 5,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7D3C98] to-[#0A84FF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Entrepreneuriat</Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">Création d'Entreprise</h1>
              <p className="font-open-sans text-xl text-white/90 leading-relaxed mb-8">
                De l'idée à la réalisation, nous vous accompagnons dans toutes les étapes de création de votre
                entreprise. Démarches légales, branding, digital et stratégie business.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Accompagnement complet</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Création rapide</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Expertise reconnue</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=creation-entreprise">
                  <Button className="bg-white text-[#7D3C98] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4">
                    Consultation gratuite
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#success-stories">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#7D3C98] text-lg px-8 py-4 bg-transparent"
                  >
                    Voir nos succès
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Business+Creation+Illustration"
                alt="Création d'Entreprise"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Processus de création */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre Processus de Création</h2>
            <p className="section-subtitle">Une méthode éprouvée pour créer votre entreprise en toute sérénité</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#7D3C98] to-[#0A84FF] rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-2xl">{step.step}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#7D3C98] to-[#0A84FF] transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-[#121212] mb-2">{step.title}</h3>
                  <p className="font-open-sans text-sm text-gray-600 mb-2">{step.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Services de Création</h2>
            <p className="section-subtitle">Un accompagnement sur mesure pour chaque étape</p>
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
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7D3C98] to-[#0A84FF] rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-poppins font-bold text-xl text-[#121212]">{service.title}</CardTitle>
                        <p className="text-[#7D3C98] font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="font-open-sans text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      Délai: {service.duration}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <h4 className="font-poppins font-semibold text-lg mb-4">Services inclus :</h4>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#7D3C98] mr-3 flex-shrink-0" />
                          <span className="font-open-sans text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="btn-accent w-full">
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

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Packages de Création</h2>
            <p className="section-subtitle">Choisissez la formule qui correspond à vos besoins et votre budget</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-[#7D3C98] shadow-2xl scale-105" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#7D3C98] text-white px-6 py-2">Le plus populaire</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-poppins font-bold text-2xl text-[#121212] mb-2">{pkg.name}</CardTitle>
                  <div className="font-montserrat font-bold text-4xl text-[#7D3C98] mb-2">{pkg.price}</div>
                  <p className="font-open-sans text-gray-600">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#7D3C98] mr-3 flex-shrink-0" />
                        <span className="font-open-sans text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/contact?service=creation-entreprise&package=${pkg.name.toLowerCase()}`}>
                    <Button className={`w-full ${pkg.popular ? "btn-accent" : "btn-primary"}`}>
                      Choisir ce package
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Histoires de Succès</h2>
            <p className="section-subtitle">Découvrez les entreprises que nous avons aidées à naître et prospérer</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                <div className="relative">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#7D3C98] text-white">{story.sector}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-bold text-xl text-[#121212] mb-2">{story.name}</h3>
                  <p className="font-poppins font-medium text-[#7D3C98] mb-3">Fondé par {story.founder}</p>
                  <p className="font-open-sans text-gray-600 mb-4">{story.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-poppins font-semibold text-green-800 mb-2">Résultats :</h4>
                    <p className="font-open-sans text-sm text-green-700">{story.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Témoignages d'Entrepreneurs</h2>
            <p className="section-subtitle">Ce que disent les fondateurs que nous avons accompagnés</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#F5F6FA] shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="font-open-sans text-gray-600 italic mb-6">"{testimonial.content}"</p>
                  <div>
                    <p className="font-poppins font-semibold text-[#121212]">{testimonial.name}</p>
                    <p className="font-open-sans text-sm text-gray-500">Fondateur, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#7D3C98] to-[#0A84FF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">Prêt à créer votre entreprise ?</h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transformez votre idée en entreprise prospère. Contactez Joseph Chanel OBAH pour une consultation gratuite
            et commencez votre aventure entrepreneuriale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=creation-entreprise">
              <Button className="bg-white text-[#7D3C98] hover:bg-gray-100 text-lg px-8 py-4">
                Consultation gratuite
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+237695265626">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#7D3C98] text-lg px-8 py-4 bg-transparent"
              >
                Appeler maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
