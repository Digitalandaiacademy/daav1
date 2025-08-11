import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] text-white relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 border border-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Prêt à transformer votre avenir ?
          </h2>
          <p className="font-open-sans text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Rejoignez des centaines d'étudiants et d'entreprises qui ont fait confiance à 
            Digital & AI Academy pour leur transformation digitale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-semibold text-lg mb-2">Téléphone</h3>
            <p className="text-white/80">+237 6XX XXX XXX</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-semibold text-lg mb-2">Email</h3>
            <p className="text-white/80">info@digitalai-academy.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-semibold text-lg mb-2">Adresse</h3>
            <p className="text-white/80">Douala - Bonaberi, Cameroun</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-white/80">+237 6XX XXX XXX</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-white text-[#0A84FF] hover:bg-gray-100 font-poppins font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              Nous contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          
          <Link href="/formations">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A84FF] font-poppins font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300">
              Voir les formations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
