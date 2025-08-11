import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Palette, Brush, Camera, Video, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Design & Identité Visuelle - Digital & AI Academy",
  description:
    "Services de création graphique : logo, branding, flyers, vidéos publicitaires et identité visuelle complète à Douala, Cameroun.",
}

export default function DesignIdentitePage() {
  const services = [
    {
      icon: Palette,
      title: "Logo & Branding",
      description: "Création d'identité visuelle complète et mémorable",
      price: "À partir de 50,000 FCFA",
      duration: "1-2 semaines",
      features: [
        "Recherche et concept créatif",
        "3 propositions de logo",
        "Déclinaisons couleurs",
        "Fichiers vectoriels HD",
        "Guide d'utilisation",
        "Révisions illimitées",
      ],
    },
    {
      icon: Brush,
      title: "Charte Graphique",
      description: "Guide complet de votre identité visuelle",
      price: "À partir de 75,000 FCFA",
      duration: "2-3 semaines",
      features: [
        "Palette de couleurs",
        "Typographies officielles",
        "Règles d'utilisation",
        "Déclinaisons du logo",
        "Modèles de documents",
        "Manuel de marque complet",
      ],
    },
    {
      icon: Camera,
      title: "Supports Print",
      description: "Flyers, affiches, cartes de visite et papeterie",
      price: "À partir de 25,000 FCFA",
      duration: "3-5 jours",
      features: [
        "Design créatif et impactant",
        "Formats print optimisés",
        "Fichiers haute résolution",
        "Conseils d'impression",
        "Révisions incluses",
        "Livraison rapide",
      ],
    },
    {
      icon: Video,
      title: "Vidéos & Motion Design",
      description: "Vidéos publicitaires et animations professionnelles",
      price: "À partir de 100,000 FCFA",
      duration: "1-2 semaines",
      features: [
        "Scénario et storyboard",
        "Animation professionnelle",
        "Musique et voix-off",
        "Formats réseaux sociaux",
        "Révisions incluses",
        "Livraison multi-formats",
      ],
    },
  ]

  const portfolio = [
    {
      title: "Identité Visuelle Restaurant",
      category: "Branding Complet",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+Branding",
      description: "Logo, charte graphique et supports de communication",
    },
    {
      title: "Campagne Publicitaire Mode",
      category: "Design Print",
      image: "/placeholder.svg?height=300&width=400&text=Fashion+Campaign",
      description: "Flyers, affiches et visuels réseaux sociaux",
    },
    {
      title: "Vidéo Promotionnelle Tech",
      category: "Motion Design",
      image: "/placeholder.svg?height=300&width=400&text=Tech+Video",
      description: "Animation 2D pour startup technologique",
    },
    {
      title: "Identité Visuelle Salon",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400&text=Beauty+Salon+Brand",
      description: "Logo et charte graphique salon de beauté",
    },
    {
      title: "Packaging Produit",
      category: "Design Produit",
      image: "/placeholder.svg?height=300&width=400&text=Product+Packaging",
      description: "Design d'emballage produit cosmétique",
    },
    {
      title: "Site Web Créatif",
      category: "Web Design",
      image: "/placeholder.svg?height=300&width=400&text=Creative+Website",
      description: "Interface utilisateur moderne et responsive",
    },
  ]

  const process = [
    {
      step: 1,
      title: "Brief & Analyse",
      description: "Nous analysons vos besoins et votre secteur d'activité",
    },
    {
      step: 2,
      title: "Recherche Créative",
      description: "Exploration des tendances et création de concepts",
    },
    {
      step: 3,
      title: "Propositions",
      description: "Présentation de 3 directions créatives différentes",
    },
    {
      step: 4,
      title: "Révisions",
      description: "Ajustements selon vos retours et préférences",
    },
    {
      step: 5,
      title: "Finalisation",
      description: "Livraison des fichiers finaux dans tous les formats",
    },
  ]

  const testimonials = [
    {
      name: "Aminata Diallo",
      company: "Boutique Élégance",
      content: "Le logo créé par l'équipe a complètement transformé l'image de ma boutique. Mes clients adorent !",
      rating: 5,
    },
    {
      name: "Pierre Kamga",
      company: "Restaurant Le Délice",
      content: "Design exceptionnel pour nos supports de communication. Très professionnel et créatif.",
      rating: 5,
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7D3C98] to-[#FF3B30] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Service Créatif</Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">Design & Identité Visuelle</h1>
              <p className="font-open-sans text-xl text-white/90 leading-relaxed mb-8">
                Créez une identité visuelle forte et mémorable qui reflète parfaitement votre marque. Logo, branding,
                supports print et vidéos publicitaires professionnelles.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Design unique</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Livraison rapide</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Révisions illimitées</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?service=design-identite">
                  <Button className="bg-white text-[#7D3C98] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4">
                    Demander un devis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#portfolio">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#7D3C98] text-lg px-8 py-4 bg-transparent"
                  >
                    Voir notre portfolio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Design+Creative+Illustration"
                alt="Design et Identité Visuelle"
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
            <h2 className="section-title">Nos Services Créatifs</h2>
            <p className="section-subtitle">Des solutions design complètes pour votre identité visuelle</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7D3C98] to-[#FF3B30] rounded-xl flex items-center justify-center mr-4">
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
                    <h4 className="font-poppins font-semibold text-lg mb-4">Ce qui est inclus :</h4>
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

      {/* Processus créatif */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre Processus Créatif</h2>
            <p className="section-subtitle">Une méthode éprouvée pour créer des designs exceptionnels</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#7D3C98] to-[#FF3B30] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-xl text-[#121212] mb-2">{step.title}</h3>
                    <p className="font-open-sans text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre Portfolio</h2>
            <p className="section-subtitle">Découvrez nos créations récentes</p>
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
                    <Badge className="bg-[#7D3C98] text-white">{project.category}</Badge>
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
            <h2 className="section-title">Témoignages Clients</h2>
            <p className="section-subtitle">Ce que pensent nos clients de nos créations</p>
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
      <section className="py-20 bg-gradient-to-r from-[#7D3C98] to-[#FF3B30] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">Prêt à créer votre identité visuelle ?</h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet créatif et obtenir un devis personnalisé gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=design-identite">
              <Button className="bg-white text-[#7D3C98] hover:bg-gray-100 text-lg px-8 py-4">
                Demander un devis gratuit
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
