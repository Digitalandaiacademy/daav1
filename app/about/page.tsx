import type { Metadata } from "next"
import Image from "next/image"
import { Target, Eye, Heart, Users, Award, Lightbulb, Globe, Zap, Star, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "À propos - Digital & AI Academy",
  description:
    "Découvrez l'histoire, la mission et l'équipe de Digital & AI Academy, centre de formation digitale fondé par Joseph Chanel OBAH à Douala.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Nous restons à la pointe des technologies émergentes pour offrir les formations les plus actuelles.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos programmes de formation et services.",
    },
    {
      icon: Globe,
      title: "Accessibilité",
      description: "Nous rendons la formation digitale accessible à tous, quel que soit le niveau de départ.",
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Nous créons un impact positif durable dans la communauté et l'économie locale.",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A84FF] to-[#7D3C98] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">À propos de Digital & AI Academy</h1>
            <p className="font-open-sans text-xl md:text-2xl text-white/90 leading-relaxed">
              Nous sommes passionnés par la démocratisation de l'accès aux technologies digitales et à l'Intelligence
              Artificielle en Afrique.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Notre Histoire</h2>
              <div className="space-y-6 font-open-sans text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2020 à Douala par <strong className="text-[#0A84FF]">Joseph Chanel OBAH</strong>, Digital &
                  AI Academy est née d'une vision simple mais ambitieuse : rendre les technologies digitales et
                  l'Intelligence Artificielle accessibles à tous en Afrique centrale.
                </p>
                <p>
                  Partant du constat que le continent africain accusait un retard dans l'adoption des nouvelles
                  technologies, notre fondateur a décidé de créer un centre de formation et de services qui combinerait
                  expertise internationale et compréhension des réalités locales.
                </p>
                <p>
                  Depuis nos débuts, nous avons formé plus de 500 étudiants et accompagné des dizaines d'entreprises
                  dans leur transformation digitale. Notre approche pratique et orientée résultats nous a permis de
                  devenir une référence dans le domaine de la formation digitale au Cameroun.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Digital+AI+Academy+building+in+Douala+Cameroon"
                alt="Digital & AI Academy - Douala"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-20 bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title">Notre Fondateur</h2>
              <p className="section-subtitle">Visionnaire et expert en transformation digitale</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <div className="relative inline-block mb-8">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Joseph+Chanel+OBAH+CEO"
                      alt="Joseph Chanel OBAH - Fondateur & CEO"
                      width={300}
                      height={300}
                      className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-full flex items-center justify-center">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-montserrat font-bold text-3xl text-[#121212] mb-2">Joseph Chanel OBAH</h3>
                  <p className="font-poppins font-medium text-xl text-[#0A84FF] mb-6">Fondateur & CEO</p>

                  <div className="space-y-4 font-open-sans text-gray-600 leading-relaxed mb-8">
                    <p>
                      Expert en transformation digitale avec plus de 15 années d'expérience, Joseph Chanel OBAH est un
                      visionnaire passionné par l'innovation technologique et son impact sur le développement de
                      l'Afrique.
                    </p>
                    <p>
                      Diplômé en informatique et spécialisé en Intelligence Artificielle, il a travaillé avec de
                      nombreuses entreprises internationales avant de décider de créer Digital & AI Academy pour
                      partager son expertise et former la nouvelle génération de talents digitaux africains.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-[#F5F6FA] rounded-xl">
                      <Trophy className="w-8 h-8 text-[#0A84FF] mx-auto mb-2" />
                      <div className="font-poppins font-bold text-2xl text-[#121212]">15+</div>
                      <div className="font-open-sans text-sm text-gray-600">Années d'expérience</div>
                    </div>
                    <div className="text-center p-4 bg-[#F5F6FA] rounded-xl">
                      <Users className="w-8 h-8 text-[#FF3B30] mx-auto mb-2" />
                      <div className="font-poppins font-bold text-2xl text-[#121212]">500+</div>
                      <div className="font-open-sans text-sm text-gray-600">Étudiants formés</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Mission, Vision & Valeurs</h2>
            <p className="section-subtitle">Les piliers qui guident notre action quotidienne</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#0A84FF]/10 to-[#7D3C98]/10 rounded-2xl p-8 text-center border border-[#0A84FF]/20">
              <div className="w-20 h-20 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-[#121212] mb-4">Notre Mission</h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                Démocratiser l'accès aux technologies digitales et à l'Intelligence Artificielle en offrant des
                formations de qualité et des services innovants adaptés au contexte africain.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#FF3B30]/10 to-[#7D3C98]/10 rounded-2xl p-8 text-center border border-[#FF3B30]/20">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF3B30] to-[#7D3C98] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-[#121212] mb-4">Notre Vision</h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                Devenir le leader de la formation digitale en Afrique centrale et contribuer à l'émergence d'une
                génération de talents numériques compétitifs à l'international.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-br from-[#7D3C98]/10 to-[#0A84FF]/10 rounded-2xl p-8 text-center border border-[#7D3C98]/20">
              <div className="w-20 h-20 bg-gradient-to-r from-[#7D3C98] to-[#0A84FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-2xl text-[#121212] mb-4">Notre Impact</h3>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                Créer un écosystème digital dynamique qui favorise l'innovation, l'entrepreneuriat et le développement
                économique durable de notre région.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A84FF] to-[#7D3C98] rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-[#121212] mb-2">{value.title}</h4>
                  <p className="font-open-sans text-sm text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gradient-to-r from-[#121212] to-[#2a2a2a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl mb-6">Nos Réalisations</h2>
            <p className="font-open-sans text-xl text-gray-300">Des chiffres qui témoignent de notre impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-montserrat font-bold text-5xl md:text-6xl text-[#0A84FF] mb-4">500+</div>
              <div className="font-poppins font-medium text-lg mb-2">Étudiants Formés</div>
              <div className="font-open-sans text-sm text-gray-400">Depuis notre création</div>
            </div>

            <div className="text-center">
              <div className="font-montserrat font-bold text-5xl md:text-6xl text-[#FF3B30] mb-4">50+</div>
              <div className="font-poppins font-medium text-lg mb-2">Projets Réalisés</div>
              <div className="font-open-sans text-sm text-gray-400">Sites web et applications</div>
            </div>

            <div className="text-center">
              <div className="font-montserrat font-bold text-5xl md:text-6xl text-[#7D3C98] mb-4">95%</div>
              <div className="font-poppins font-medium text-lg mb-2">Satisfaction Client</div>
              <div className="font-open-sans text-sm text-gray-400">Taux de recommandation</div>
            </div>

            <div className="text-center">
              <div className="font-montserrat font-bold text-5xl md:text-6xl text-[#0A84FF] mb-4">4</div>
              <div className="font-poppins font-medium text-lg mb-2">Années d'Expérience</div>
              <div className="font-open-sans text-sm text-gray-400">Au service du digital</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
