import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#121212] to-[#2a2a2a] text-white relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#0A84FF] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#FF3B30] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-[#7D3C98] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu */}
          <div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              À propos de <span className="text-[#0A84FF]">Digital & AI Academy</span>
            </h2>
            
            <p className="font-open-sans text-lg text-gray-300 mb-8 leading-relaxed">
              Basé à Douala – Bonaberi, Digital & AI Academy est votre partenaire de confiance 
              pour la transformation digitale. Nous combinons expertise technique et pédagogie 
              innovante pour former les talents de demain et accompagner les entreprises dans 
              leur évolution numérique.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0A84FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Notre Mission</h3>
                  <p className="text-gray-400 text-sm">
                    Démocratiser l'accès aux technologies digitales et à l'IA en Afrique
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF3B30] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Notre Vision</h3>
                  <p className="text-gray-400 text-sm">
                    Être le leader de la formation digitale en Afrique centrale
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#7D3C98] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Nos Valeurs</h3>
                  <p className="text-gray-400 text-sm">
                    Innovation, Excellence, Accessibilité et Impact social
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Notre Équipe</h3>
                  <p className="text-gray-400 text-sm">
                    Experts passionnés et formateurs certifiés
                  </p>
                </div>
              </div>
            </div>
            
            <Link href="/about">
              <Button className="bg-white text-[#121212] hover:bg-gray-100 font-poppins font-medium px-8 py-3 rounded-lg transition-all duration-300">
                En savoir plus sur nous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          {/* Visuel */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/placeholder-vhljo.png"
                alt="Équipe Digital & AI Academy"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-full opacity-80 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] rounded-full opacity-80 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
