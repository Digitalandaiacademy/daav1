import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Zap, Bot, Settings, BarChart3, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Automatisation & Transformation - Digital & AI Academy",
  description:
    "Services d'automatisation des processus métier, intégration IA, chatbots et transformation digitale à Douala, Cameroun.",
}

export default function AutomatisationPage() {
  const services = [
    {
      icon: Bot,
      title: "Chatbots Intelligents",
      description: "Assistants virtuels pour votre service client 24/7",
      price: "À partir de 100,000 FCFA",
      duration: "2-3 semaines",
      features: [
        "Chatbot personnalisé à votre marque",
        "Intégration WhatsApp/Facebook",
        "Réponses automatiques intelligentes",
        "Transfert vers agent humain",
        "Analytics et rapports",
        "Formation à la gestion",
      ],
    },
    {
      icon: Settings,
      title: "Automatisation Processus",
      description: "Automatisez vos tâches répétitives et workflows",
      price: "À partir de 150,000 FCFA",
      duration: "3-4 semaines",
      features: [
        "Analyse des processus existants",
        "Workflows automatisés",
        "Intégration multi-outils",
        "Notifications automatiques",
        "Rapports de performance",
        "Formation équipe complète",
      ],
    },
    {
      icon: BarChart3,
      title: "Reporting Automatique",
      description: "Tableaux de bord et rapports générés automatiquement",
      price: "À partir de 80,000 FCFA",
      duration: "1-2 semaines",
      features: [
        "Dashboards personnalisés",
        "Rapports automatiques",
        "Alertes en temps réel",
        "Visualisations graphiques",
        "Export multi-formats",
        "Accès mobile inclus",
      ],
    },
    {
      icon: Zap,
      title: "Intégration CRM",
      description: "Connectez tous vos outils pour une gestion unifiée",
      price: "À partir de 120,000 FCFA",
      duration: "2-3 semaines",
      features: [
        "Configuration CRM complet",
        "Synchronisation des données",
        "Automatisation marketing",
        "Suivi des prospects",
        "Pipeline de ventes",
        "Formation utilisateurs",
      ],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Gain de Temps",
      description: "Économisez jusqu'à 80% de temps sur les tâches répétitives",
      metric: "80%",
    },
    {
      icon: BarChart3,
      title: "Productivité",
      description: "Augmentez votre productivité et celle de vos équipes",
      metric: "+300%",
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Réduisez les erreurs humaines et améliorez la qualité",
      metric: "95%",
    },
    {
      icon: Zap,
      title: "ROI",
      description: "Retour sur investissement rapide et mesurable",
      metric: "6 mois",
    },
  ]

  const tools = [
    {
      name: "Zapier",
      description: "Connecteur d'applications",
      logo: "/placeholder.svg?height=60&width=60&text=Zapier",
    },
    { name: "Make", description: "Automatisation avancée", logo: "/placeholder.svg?height=60&width=60&text=Make" },
    {
      name: "Airtable",
      description: "Base de données intelligente",
      logo: "/placeholder.svg?height=60&width=60&text=Airtable",
    },
    { name: "Notion", description: "Workspace tout-en-un", logo: "/placeholder.svg?height=60&width=60&text=Notion" },
    {
      name: "ChatGPT API",
      description: "Intelligence artificielle",
      logo: "/placeholder.svg?height=60&width=60&text=ChatGPT",
    },
    {
      name: "Power Automate",
      description: "Automatisation Microsoft",
      logo: "/placeholder.svg?height=60&width=60&text=Power",
    },
  ]

  const caseStudies = [
    {
      title: "Cabinet Comptable",
      challenge: "Traitement manuel des factures",
      solution: "Automatisation OCR + workflow",
      result: "90% de temps économisé",
      image: "/placeholder.svg?height=300&width=400&text=Accounting+Automation",
    },
    {
      title: "E-commerce Mode",
      challenge: "Gestion manuelle des commandes",
      solution: "CRM automatisé + notifications",
      result: "300% d'augmentation des ventes",
      image: "/placeholder.svg?height=300&width=400&text=Ecommerce+Automation",
    },
    {
      title: "Agence Immobilière",
      challenge: "Suivi des prospects inefficace",
      solution: "Pipeline automatisé + chatbot",
      result: "250% de prospects qualifiés",
      image: "/placeholder.svg?height=300&width=400&text=Real+Estate+CRM",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Mballa",
      company: "Clinique Santé Plus",
      content: "L'automatisation de nos rendez-vous a révolutionné notre organisation. Plus d'oublis !",
      rating: 5,
    },
    {
      name: "Sophie Nkomo",
      company: "Boutique en ligne",
      content: "Grâce aux workflows automatisés, je peux me concentrer sur le développement de mon business.",
      rating: 5,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A84FF] to-[#FF3B30] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Innovation IA</Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">Automatisation & Transformation</h1>
              <p className="font-open-sans text-xl text-white/90 leading-relaxed mb-8">
                Transformez votre façon de travailler grâce à l'automatisation intelligente. Optimisez vos processus,
                réduisez les tâches répétitives et boostez votre productivité.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>ROI garanti</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Gain de temps immédiat</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Support inclus</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=automatisation">
                  <Button className="bg-white text-[#0A84FF] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4">
                    Audit gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#case-studies">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#0A84FF] text-lg px-8 py-4 bg-transparent"
                  >
                    Voir nos résultats
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Automation+AI+Illustration"
                alt="Automatisation et IA"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi Automatiser ?</h2>
            <p className="section-subtitle">Les bénéfices concrets de l'automatisation pour votre business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0A84FF] to-[#FF3B30] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-montserrat font-bold text-4xl text-[#0A84FF] mb-2">{benefit.metric}</div>
                    <h3 className="font-poppins font-semibold text-lg text-[#121212] mb-2">{benefit.title}</h3>
                    <p className="font-open-sans text-gray-600">{benefit.description}</p>
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
            <h2 className="section-title">Nos Solutions d'Automatisation</h2>
            <p className="section-subtitle">Des outils intelligents pour optimiser votre productivité</p>
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
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0A84FF] to-[#FF3B30] rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-poppins font-bold text-xl text-[#121212]">{service.title}</CardTitle>
                        <p className="text-[#0A84FF] font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <p className="font-open-sans text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      Mise en place: {service.duration}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <h4 className="font-poppins font-semibold text-lg mb-4">Fonctionnalités incluses :</h4>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#0A84FF] mr-3 flex-shrink-0" />
                          <span className="font-open-sans text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="btn-primary w-full">
                        Commencer l'automatisation
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

      {/* Outils */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Outils que nous maîtrisons</h2>
            <p className="section-subtitle">Les meilleures plateformes d'automatisation du marché</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#F5F6FA] rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="font-poppins font-semibold text-sm text-[#121212] mb-1">{tool.name}</h3>
                <p className="font-open-sans text-xs text-gray-500">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section id="case-studies" className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Études de Cas</h2>
            <p className="section-subtitle">Comment l'automatisation a transformé nos clients</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                <div className="relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#0A84FF] text-white">Automatisation</Badge>
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
                      <p className="font-open-sans text-sm text-[#0A84FF] font-semibold">{study.result}</p>
                    </div>
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
            <h2 className="section-title">Témoignages Clients</h2>
            <p className="section-subtitle">L'automatisation vue par nos clients</p>
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
                    <p className="font-open-sans text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0A84FF] to-[#FF3B30] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">Prêt à automatiser votre business ?</h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez un audit gratuit de vos processus et découvrez comment l'automatisation peut transformer votre
            entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=automatisation">
              <Button className="bg-white text-[#0A84FF] hover:bg-gray-100 text-lg px-8 py-4">
                Audit gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+237695265626">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A84FF] text-lg px-8 py-4 bg-transparent"
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
