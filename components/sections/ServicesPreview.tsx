import Link from 'next/link'
import { ArrowRight, Globe, Megaphone, Palette, Zap, Users, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Code,
    title: "Création & Développement",
    description: "Sites web, applications mobiles et plateformes sur mesure",
    features: ["Sites vitrine", "E-commerce", "Applications web", "Applications mobiles"],
    color: "from-[#0A84FF] to-[#7D3C98]"
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Stratégies publicitaires et gestion des réseaux sociaux",
    features: ["Community Management", "Publicité Facebook/Google", "SEO", "Content Marketing"],
    color: "from-[#FF3B30] to-[#0A84FF]"
  },
  {
    icon: Palette,
    title: "Design & Identité",
    description: "Création graphique et identité visuelle complète",
    features: ["Logo & Branding", "Flyers & Affiches", "Vidéos publicitaires", "Design web"],
    color: "from-[#7D3C98] to-[#FF3B30]"
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "Transformation digitale et automatisation des processus",
    features: ["Processus automatisés", "Intégration CRM", "Reporting automatique", "Outils intelligents"],
    color: "from-[#0A84FF] to-[#FF3B30]"
  },
  {
    icon: Users,
    title: "Développement Personnel",
    description: "Coaching et formation en leadership digital",
    features: ["Coaching personnel", "Communication digitale", "E-réputation", "Leadership"],
    color: "from-[#FF3B30] to-[#7D3C98]"
  },
  {
    icon: Globe,
    title: "Création d'Entreprise",
    description: "Accompagnement complet pour créer votre entreprise",
    features: ["Démarches légales", "Branding complet", "Mise en place digitale", "Stratégie business"],
    color: "from-[#7D3C98] to-[#0A84FF]"
  }
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Nous offrons un large éventail de services adaptés aux besoins actuels du marché digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-poppins font-semibold text-xl text-[#121212]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#0A84FF] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'et')}`}>
                    <Button variant="outline" className="w-full group-hover:bg-[#0A84FF] group-hover:text-white transition-colors">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="text-center">
          <Link href="/services">
            <Button className="btn-primary text-lg px-8 py-4">
              Voir tous nos services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
