import Link from 'next/link'
import { ArrowRight, Clock, Users, Award, BookOpen, Brain, Smartphone, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const formations = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Maîtrisez les outils IA pour votre activité professionnelle",
    duration: "8 semaines",
    level: "Débutant",
    students: 150,
    price: "150,000 FCFA",
    image: "/ai-training-neural-networks.png",
    highlights: ["ChatGPT & outils IA", "Automatisation", "Création de contenu", "Intégration business"]
  },
  {
    icon: BookOpen,
    title: "Création de Sites Web",
    description: "Développez des sites web modernes avec WordPress et HTML/CSS",
    duration: "12 semaines",
    level: "Débutant",
    students: 200,
    price: "200,000 FCFA",
    image: "/web-development-course.png",
    highlights: ["WordPress", "HTML/CSS", "Responsive Design", "SEO de base"]
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Stratégies publicitaires et marketing en ligne efficaces",
    duration: "10 semaines",
    level: "Intermédiaire",
    students: 180,
    price: "175,000 FCFA",
    image: "/digital-marketing-course.png",
    highlights: ["Facebook Ads", "Google Ads", "Analytics", "ROI Marketing"]
  },
  {
    icon: Smartphone,
    title: "Content Creation",
    description: "Créez du contenu visuel et vidéo professionnel",
    duration: "6 semaines",
    level: "Débutant",
    students: 120,
    price: "125,000 FCFA",
    image: "/placeholder-mgp2g.png",
    highlights: ["Photoshop", "Canva Pro", "Montage vidéo", "Storytelling"]
  }
]

export default function FormationsPreview() {
  return (
    <section className="py-20 bg-[#F5F6FA] particles-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Formations</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Des formations pratiques et orientées métier pour répondre aux besoins du marché digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {formations.map((formation, index) => {
            const IconComponent = formation.icon
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={formation.image || "/placeholder.svg"}
                    alt={formation.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      formation.level === 'Débutant' ? 'bg-green-500' : 
                      formation.level === 'Intermédiaire' ? 'bg-orange-500' : 'bg-red-500'
                    } text-white`}>
                      {formation.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="font-poppins font-semibold text-[#0A84FF]">{formation.price}</span>
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
                    <Link href={`/formations/${formation.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Détails
                      </Button>
                    </Link>
                    <Link href={`/formations/${formation.title.toLowerCase().replace(/\s+/g, '-')}/inscription`} className="flex-1">
                      <Button className="btn-primary w-full">
                        S'inscrire
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center">
          <Link href="/formations">
            <Button className="btn-secondary text-lg px-8 py-4">
              Voir toutes nos formations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
