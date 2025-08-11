import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Zap, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Création & Développement - Digital & AI Academy",
  description:
    "Services de création de sites web, applications mobiles et plateformes sur mesure. Développement professionnel à Douala, Cameroun.",
}

export default function CreationDeveloppementPage() {
  const services = [
    {
      icon: Globe,
      title: "Sites Web Vitrine",
      description: "Sites web professionnels pour présenter votre entreprise",
      price: "À partir de 150,000 FCFA",
      duration: "2-3 semaines",
      features: [
        "Design responsive moderne",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Intégration réseaux sociaux",
        "Hébergement 1 an inclus",
        "Formation à la gestion",
      ],
    },
    {
      icon: Code,
      title: "Sites E-commerce",
      description: "Boutiques en ligne complètes pour vendre vos produits",
      price: "À partir de 300,000 FCFA",
      duration: "4-6 semaines",
      features: [
        "Catalogue produits illimité",
        "Panier et commandes",
        "Paiements sécurisés",
        "Gestion des stocks",
        "Tableau de bord admin",
        "Formation complète",
      ],
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Apps iOS et Android pour votre business",
      price: "À partir de 500,000 FCFA",
      duration: "6-10 semaines",
      features: [
        "Design natif iOS/Android",
        "Synchronisation cloud",
        "Notifications push",
        "Analyses d'usage",
        "Mise à jour gratuite 6 mois",
        "Publication sur les stores",
      ],
    },
    {
      icon: Zap,
      title: "Applications Web",
      description: "Plateformes web sur mesure pour vos besoins spécifiques",
      price: "À partir de 400,000 FCFA",
      duration: "4-8 semaines",
      features: [
        "Interface utilisateur intuitive",
        "Base de données sécurisée",
        "Système d'authentification",
        "API intégrées",
        "Tableau de bord analytics",
        "Support technique inclus",
      ],
    },
  ]

  const technologies = [
    { name: "WordPress", logo: "/placeholder.svg?height=60&width=60&text=WP" },
    { name: "React", logo: "/placeholder.svg?height=60&width=60&text=React" },
    { name: "Next.js", logo: "/placeholder.svg?height=60&width=60&text=Next" },
    { name: "Flutter", logo: "/placeholder.svg?height=60&width=60&text=Flutter" },
    { name: "PHP", logo: "/placeholder.svg?height=60&width=60&text=PHP" },
    { name: "Node.js", logo: "/placeholder.svg?height=60&width=60&text=Node" },
  ]

  const portfolio = [
    {
      title: "Site E-commerce Mode",
      category: "E-commerce",
      image: "/placeholder.svg?height=300&width=400&text=E-commerce+Fashion",
      description: "Boutique en ligne complète avec 500+ produits",
    },
    {
      title: "App Mobile Restaurant",
      category: "Application Mobile",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+App",
      description: "Application de commande et livraison",
    },
    {
      title: "Plateforme Formation",
      category: "Application Web",
      image: "/placeholder.svg?height=300&width=400&text=Learning+Platform",
      description: "LMS avec gestion des cours et étudiants",
    },
  ]

  const testimonials = [
    {
      name: "Marie Kouam",
      company: "Boutique Élégance",
      content: "Grâce à mon site e-commerce, mes ventes ont augmenté de 300% en 6 mois !",
      rating: 5,
    },
    {
      name: "Paul Mbarga",
      company: "Restaurant Le Savoureux",
      content: "L'application mobile a révolutionné notre service de livraison.",
      rating: 5,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A84FF] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Service Premium</Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">Création & Développement</h1>
              <p className="font-open-sans text-xl text-white/90 leading-relaxed mb-8">
                Transformez vos idées en solutions digitales performantes. Sites web, applications mobiles et
                plateformes sur mesure développées avec les dernières technologies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Garantie satisfaction</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Livraison rapide</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Support inclus</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=creation-developpement">
                  <Button className="bg-white text-[#0A84FF] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4">
                    Demander un devis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#portfolio">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#0A84FF] text-lg px-8 py-4 bg-transparent"
                  >
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Web+Development+Illustration"
                alt="Création et Développement Web"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Solutions de Développement</h2>
            <p className="section-subtitle">Des solutions sur mesure adaptées à vos besoins et votre budget</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-xl flex items-center justify-center mr-4">
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
                      Délai: {service.duration}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <h4 className="font-poppins font-semibold text-lg mb-4">Inclus dans cette offre :</h4>
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
                        Commander ce service
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

      {/* Technologies */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Technologies que nous maîtrisons</h2>
            <p className="section-subtitle">Nous utilisons les technologies les plus modernes et fiables du marché</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <p className="font-poppins font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Réalisations</h2>
            <p className="section-subtitle">Découvrez quelques-uns de nos projets récents</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#0A84FF] text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-bold text-lg text-[#121212] mb-2">{project.title}</h3>
                  <p className="font-open-sans text-gray-600">{project.description}</p>
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
            <h2 className="section-title">Ce que disent nos clients</h2>
            <p className="section-subtitle">La satisfaction de nos clients est notre priorité</p>
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
      <section className="py-20 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">Prêt à lancer votre projet ?</h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=creation-developpement">
              <Button className="bg-white text-[#0A84FF] hover:bg-gray-100 text-lg px-8 py-4">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="tel:+237695265626">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A84FF] text-lg px-8 py-4 bg-transparent"
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
