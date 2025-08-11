import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Users, Target, Lightbulb, TrendingUp, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Coaching & Développement Personnel - Digital & AI Academy",
  description:
    "Services de coaching en leadership digital, communication, personal branding et développement entrepreneurial à Douala, Cameroun.",
}

export default function CoachingFormationPage() {
  const services = [
    {
      icon: Target,
      title: "Coaching Leadership Digital",
      description: "Développez vos compétences de leader à l'ère numérique",
      price: "À partir de 25,000 FCFA/session",
      duration: "Sessions de 1h30",
      features: [
        "Évaluation des compétences actuelles",
        "Plan de développement personnalisé",
        "Techniques de leadership moderne",
        "Gestion d'équipes digitales",
        "Suivi et accompagnement continu",
        "Ressources et outils inclus",
      ],
    },
    {
      icon: Users,
      title: "Communication Digitale",
      description: "Maîtrisez l'art de communiquer dans l'univers digital",
      price: "À partir de 20,000 FCFA/session",
      duration: "Sessions de 1h",
      features: [
        "Techniques de communication moderne",
        "Présentation et pitch efficaces",
        "Communication sur les réseaux sociaux",
        "Gestion de l'image en ligne",
        "Exercices pratiques",
        "Feedback personnalisé",
      ],
    },
    {
      icon: Lightbulb,
      title: "Personal Branding",
      description: "Construisez et développez votre marque personnelle",
      price: "À partir de 30,000 FCFA/session",
      duration: "Sessions de 2h",
      features: [
        "Audit de votre présence actuelle",
        "Stratégie de personal branding",
        "Optimisation profils sociaux",
        "Création de contenu personnel",
        "Networking digital efficace",
        "Plan d'action sur 6 mois",
      ],
    },
    {
      icon: TrendingUp,
      title: "Accompagnement Entrepreneurial",
      description: "De l'idée au succès, nous vous accompagnons",
      price: "À partir de 40,000 FCFA/session",
      duration: "Sessions de 2h",
      features: [
        "Validation d'idée business",
        "Business model et stratégie",
        "Plan de financement",
        "Marketing et acquisition clients",
        "Outils de gestion d'entreprise",
        "Mentorat sur 12 mois",
      ],
    },
  ]

  const coachingAreas = [
    {
      title: "Leadership & Management",
      description: "Développez votre style de leadership pour l'ère digitale",
      topics: ["Vision et stratégie", "Gestion d'équipe", "Prise de décision", "Innovation"],
    },
    {
      title: "Communication & Influence",
      description: "Améliorez votre impact et votre influence",
      topics: ["Prise de parole", "Négociation", "Persuasion", "Storytelling"],
    },
    {
      title: "Développement Personnel",
      description: "Atteignez votre plein potentiel professionnel",
      topics: ["Confiance en soi", "Gestion du stress", "Productivité", "Équilibre vie-travail"],
    },
    {
      title: "Entrepreneuriat Digital",
      description: "Lancez et développez votre business en ligne",
      topics: ["Idéation", "Validation marché", "Financement", "Croissance"],
    },
  ]

  const testimonials = [
    {
      name: "Marie Kouam",
      role: "Directrice Marketing",
      company: "TechStart Cameroun",
      content:
        "Le coaching m'a permis de développer ma confiance en leadership. J'ai obtenu une promotion 3 mois après !",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=MK",
    },
    {
      name: "Paul Mbarga",
      role: "Entrepreneur",
      company: "Fondateur StartupCM",
      content: "Grâce à l'accompagnement entrepreneurial, j'ai pu structurer mon business et lever mes premiers fonds.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=PM",
    },
    {
      name: "Fatima Nkomo",
      role: "Consultante",
      company: "Freelance",
      content: "Le personal branding a transformé ma visibilité. Mes revenus ont doublé en 6 mois !",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80&text=FN",
    },
  ]

  const process = [
    {
      step: 1,
      title: "Évaluation Initiale",
      description: "Analyse de votre situation actuelle et définition des objectifs",
    },
    {
      step: 2,
      title: "Plan Personnalisé",
      description: "Création d'un programme sur mesure adapté à vos besoins",
    },
    {
      step: 3,
      title: "Sessions de Coaching",
      description: "Accompagnement régulier avec exercices pratiques",
    },
    {
      step: 4,
      title: "Suivi & Ajustements",
      description: "Évaluation des progrès et adaptation du programme",
    },
    {
      step: 5,
      title: "Autonomie",
      description: "Développement de votre autonomie et maintien des acquis",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF3B30] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">Développement Personnel</Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">Coaching & Développement</h1>
              <p className="font-open-sans text-xl text-white/90 leading-relaxed mb-8">
                Développez vos compétences en leadership digital et communication. Nos coachs experts vous accompagnent
                dans votre développement professionnel et entrepreneurial.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Coaching personnalisé</span>
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
                <Link href="/contact?service=coaching-formation">
                  <Button className="bg-white text-[#FF3B30] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4">
                    Session découverte gratuite
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#testimonials">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#FF3B30] text-lg px-8 py-4 bg-transparent"
                  >
                    Témoignages clients
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Coaching+Leadership+Illustration"
                alt="Coaching et Développement"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services de coaching */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Services de Coaching</h2>
            <p className="section-subtitle">Un accompagnement personnalisé pour votre développement professionnel</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] rounded-xl flex items-center justify-center mr-4">
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
                    <h4 className="font-poppins font-semibold text-lg mb-4">Programme inclus :</h4>
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
                        Réserver une session
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

      {/* Domaines de coaching */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos Domaines d'Expertise</h2>
            <p className="section-subtitle">Des compétences clés pour votre réussite professionnelle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coachingAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-[#121212] mb-4">{area.title}</h3>
                  <p className="font-open-sans text-gray-600 mb-6">{area.description}</p>
                  <div className="space-y-2">
                    {area.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <Badge variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de coaching */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre Processus de Coaching</h2>
            <p className="section-subtitle">Une méthode éprouvée pour votre développement</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] rounded-full flex items-center justify-center">
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

      {/* Témoignages */}
      <section id="testimonials" className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Témoignages de Nos Coachés</h2>
            <p className="section-subtitle">Découvrez les transformations de nos clients</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-poppins font-semibold text-[#121212]">{testimonial.name}</h4>
                      <p className="font-open-sans text-sm text-[#FF3B30] font-medium">{testimonial.role}</p>
                      <p className="font-open-sans text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <p className="font-open-sans text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coach principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Votre Coach Principal</h2>
              <p className="section-subtitle">Un expert reconnu en leadership et développement personnel</p>
            </div>

            <Card className="bg-gradient-to-r from-[#FF3B30]/10 to-[#7D3C98]/10 border-0">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-8">
                      <Image
                        src="/placeholder.svg?height=200&width=200&text=Joseph+Chanel+OBAH"
                        alt="Joseph Chanel OBAH - Coach Principal"
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl"
                      />
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-montserrat font-bold text-3xl text-[#121212] mb-2">Joseph Chanel OBAH</h3>
                    <p className="font-poppins font-medium text-xl text-[#FF3B30] mb-6">Coach Certifié & Fondateur</p>

                    <div className="space-y-4 font-open-sans text-gray-600 leading-relaxed mb-8">
                      <p>
                        Expert en transformation digitale et développement personnel avec plus de 15 années
                        d'expérience. Joseph accompagne les leaders et entrepreneurs dans leur développement
                        professionnel.
                      </p>
                      <p>
                        Certifié en coaching professionnel et spécialisé en leadership digital, il a accompagné plus de
                        200 professionnels vers l'atteinte de leurs objectifs.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-white rounded-xl shadow-md">
                        <Users className="w-8 h-8 text-[#FF3B30] mx-auto mb-2" />
                        <div className="font-poppins font-bold text-2xl text-[#121212]">200+</div>
                        <div className="font-open-sans text-sm text-gray-600">Clients accompagnés</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl shadow-md">
                        <Award className="w-8 h-8 text-[#7D3C98] mx-auto mb-2" />
                        <div className="font-poppins font-bold text-2xl text-[#121212]">15+</div>
                        <div className="font-open-sans text-sm text-gray-600">Années d'expérience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-4xl mb-6">Prêt à développer votre potentiel ?</h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Réservez votre session découverte gratuite et commencez votre transformation dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=coaching-formation">
              <Button className="bg-white text-[#FF3B30] hover:bg-gray-100 text-lg px-8 py-4">
                Session découverte gratuite
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
