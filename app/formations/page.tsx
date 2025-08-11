import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Clock,
  Users,
  Award,
  BookOpen,
  Brain,
  Smartphone,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Formations - Digital & AI Academy",
  description:
    "Découvrez nos formations en Intelligence Artificielle, développement web, marketing digital et plus encore. Formez-vous aux métiers du futur.",
}

const formations = [
  {
    id: "intelligence-artificielle",
    icon: Brain,
    title: "Intelligence Artificielle",
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
  },
  {
    id: "creation-sites-web",
    icon: BookOpen,
    title: "Création de Sites Web",
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
  },
  {
    id: "marketing-digital",
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Stratégies publicitaires et marketing en ligne efficaces pour booster votre business sur le digital",
    duration: "10 semaines",
    level: "Intermédiaire",
    students: 180,
    price: 175000,
    rating: 4.7,
    image: "/digital-marketing-course.png",
    highlights: ["Facebook Ads", "Google Ads", "Analytics", "ROI Marketing"],
    program: [
      "Stratégie marketing digital",
      "Publicité Facebook et Instagram",
      "Google Ads et SEA",
      "Email marketing",
      "Analytics et mesure de performance",
      "Community management",
      "Stratégies de contenu",
      "Campagne marketing complète",
    ],
    prerequisites: ["Bases du marketing", "Utilisation des réseaux sociaux"],
    certificate: true,
    support: "24/7",
    format: "Hybride",
  },
  {
    id: "content-creation",
    icon: Smartphone,
    title: "Content Creation",
    description: "Créez du contenu visuel et vidéo professionnel pour les réseaux sociaux et le marketing digital",
    duration: "6 semaines",
    level: "Débutant",
    students: 120,
    price: 125000,
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=400&text=Content+Creation+Course",
    highlights: ["Photoshop", "Canva Pro", "Montage vidéo", "Storytelling"],
    program: [
      "Bases de la création de contenu",
      "Design avec Photoshop",
      "Canva Pro pour les réseaux sociaux",
      "Montage vidéo avec Premiere",
      "Storytelling et narration",
      "Stratégies de contenu viral",
      "Portfolio professionnel",
    ],
    prerequisites: ["Créativité", "Bases en informatique"],
    certificate: true,
    support: "24/7",
    format: "Présentiel + En ligne",
  },
  {
    id: "community-management",
    icon: Users,
    title: "Community Management",
    description: "Gérez et animez les communautés en ligne, développez l'engagement et la fidélité de votre audience",
    duration: "8 semaines",
    level: "Intermédiaire",
    students: 95,
    price: 140000,
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=400&text=Community+Management",
    highlights: ["Stratégies d'engagement", "Gestion de crise", "Analytics sociaux", "Calendrier éditorial"],
    program: [
      "Fondamentaux du community management",
      "Stratégies d'engagement",
      "Création de calendrier éditorial",
      "Gestion de crise en ligne",
      "Analytics et reporting",
      "Outils de gestion",
      "Cas pratiques réels",
    ],
    prerequisites: ["Maîtrise des réseaux sociaux", "Sens de la communication"],
    certificate: true,
    support: "24/7",
    format: "En ligne",
  },
  {
    id: "automatisation-productivite",
    icon: Award,
    title: "Automatisation & Productivité",
    description: "Automatisez vos tâches répétitives et boostez votre productivité avec les outils digitaux modernes",
    duration: "6 semaines",
    level: "Intermédiaire",
    students: 85,
    price: 130000,
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=400&text=Automation+Tools",
    highlights: ["Zapier", "Notion", "Airtable", "Workflows automatisés"],
    program: [
      "Introduction à l'automatisation",
      "Zapier pour connecter vos apps",
      "Notion pour l'organisation",
      "Airtable comme base de données",
      "Workflows automatisés",
      "Intégrations avancées",
      "Projet d'automatisation personnalisé",
    ],
    prerequisites: ["Utilisation d'outils digitaux", "Logique de base"],
    certificate: true,
    support: "24/7",
    format: "En ligne",
  },
]

export default function FormationsPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA"
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A84FF] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">Nos Formations</h1>
            <p className="font-open-sans text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Des formations pratiques et orientées métier pour répondre aux besoins du marché digital et vous préparer
              aux métiers du futur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Certificat inclus
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                4.8/5 satisfaction
              </Badge>
              <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                500+ diplômés
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => {
              const IconComponent = formation.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={formation.image || "/placeholder.svg"}
                      alt={formation.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          formation.level === "Débutant"
                            ? "bg-green-500"
                            : formation.level === "Intermédiaire"
                              ? "bg-orange-500"
                              : "bg-red-500"
                        } text-white`}
                      >
                        {formation.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="font-poppins font-semibold text-[#0A84FF]">{formatPrice(formation.price)}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-poppins font-medium text-sm">{formation.rating}</span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-poppins font-semibold text-xl text-[#121212] mb-1">
                          {formation.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {formation.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {formation.students}+ étudiants
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="font-open-sans text-gray-600 mb-4">
                      {formation.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-poppins font-medium text-sm text-[#121212] mb-3">Points clés :</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {formation.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Award className="w-3 h-3 text-[#0A84FF] mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Link href={`/formations/${formation.id}`} className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          Détails
                        </Button>
                      </Link>
                      <Link href={`/formations/${formation.id}/inscription`} className="flex-1">
                        <Button className="btn-primary w-full">S'inscrire</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title mb-6">Prêt à commencer votre transformation digitale ?</h2>
          <p className="section-subtitle mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'étudiants qui ont déjà transformé leur carrière grâce à nos formations pratiques
            et certifiantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-primary text-lg px-8 py-4">
                Demander des informations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white bg-transparent"
              >
                Voir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
