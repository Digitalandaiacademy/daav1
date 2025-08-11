'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles, Zap, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  
  const heroTexts = [
    "Transformez votre avenir avec l'IA",
    "Maîtrisez les technologies digitales",
    "Créez votre entreprise digitale",
    "Automatisez vos processus"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg digital-grid">
      {/* Effets de fond animés */}
      <div className="absolute inset-0">
        {/* Particules flottantes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#0A84FF] rounded-full opacity-60 float-animation"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#FF3B30] rounded-full opacity-40 float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-[#7D3C98] rounded-full opacity-50 float-animation" style={{animationDelay: '2s'}}></div>
        
        {/* Connexions neurales */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A84FF" />
              <stop offset="50%" stopColor="#7D3C98" />
              <stop offset="100%" stopColor="#FF3B30" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="neural-pulse" />
          <path d="M200,400 Q400,300 600,400 T800,400" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="neural-pulse" style={{animationDelay: '1s'}} />
          <path d="M150,600 Q350,500 550,600 T850,600" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="neural-pulse" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Sparkles className="w-8 h-8 text-[#0A84FF] mr-3" />
              <span className="font-poppins font-medium text-[#7D3C98] text-lg">
                Digital & AI Academy
              </span>
            </div>
            
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-[#121212] mb-6 leading-tight">
              <span className="neon-text" suppressHydrationWarning={true}>
                {heroTexts[currentText]}
              </span>
            </h1>
            
            <p className="font-open-sans text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Centre de formation et services digitaux spécialisé en Intelligence Artificielle, 
              développement web, marketing digital et automatisation à Douala, Cameroun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/formations">
                <Button className="btn-primary text-lg px-8 py-4">
                  <Brain className="w-5 h-5 mr-2" />
                  Découvrir nos formations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link href="/services">
                <Button variant="outline" className="text-lg px-8 py-4 border-2 border-[#0A84FF] text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white">
                  <Zap className="w-5 h-5 mr-2" />
                  Nos services
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl md:text-3xl text-[#0A84FF] mb-2">500+</div>
                <div className="font-poppins text-sm text-gray-600">Étudiants formés</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl md:text-3xl text-[#FF3B30] mb-2">50+</div>
                <div className="font-poppins text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="font-montserrat font-bold text-2xl md:text-3xl text-[#7D3C98] mb-2">95%</div>
                <div className="font-poppins text-sm text-gray-600">Satisfaction client</div>
              </div>
            </div>
          </div>
          
          {/* Visuel héro */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Image principale */}
              <div className="relative z-10 pulse-glow rounded-2xl overflow-hidden">
                <img 
                  src="/futuristic-ai-brain.png"
                  alt="Intelligence Artificielle et Formation Digitale"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Éléments flottants */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-full flex items-center justify-center float-animation">
                <Brain className="w-10 h-10 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] rounded-full flex items-center justify-center float-animation" style={{animationDelay: '1s'}}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-[#7D3C98] to-[#0A84FF] rounded-full flex items-center justify-center float-animation" style={{animationDelay: '2s'}}>
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#0A84FF] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#0A84FF] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
