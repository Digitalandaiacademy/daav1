import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121212] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/logo-digital-ai-academy.png"
                alt="Digital & AI Academy"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="font-open-sans text-gray-400 mb-6 leading-relaxed">
              Centre de formation et services digitaux spécialisé en Intelligence Artificielle à Douala, Cameroun. Fondé
              par Joseph Chanel OBAH.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#0A84FF] rounded-full flex items-center justify-center hover:bg-[#0A84FF]/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#FF3B30] rounded-full flex items-center justify-center hover:bg-[#FF3B30]/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#7D3C98] rounded-full flex items-center justify-center hover:bg-[#7D3C98]/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#FF3B30] rounded-full flex items-center justify-center hover:bg-[#FF3B30]/80 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-400 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/creation-developpement"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Création & Développement
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-digital" className="text-gray-400 hover:text-white transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="/services/design-identite" className="text-gray-400 hover:text-white transition-colors">
                  Design & Identité
                </Link>
              </li>
              <li>
                <Link href="/services/automatisation" className="text-gray-400 hover:text-white transition-colors">
                  Automatisation
                </Link>
              </li>
              <li>
                <Link href="/services/coaching-formation" className="text-gray-400 hover:text-white transition-colors">
                  Formation & Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#0A84FF] flex-shrink-0" />
                <span className="text-gray-400">Douala - Bonaberi, Cameroun</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0A84FF] flex-shrink-0" />
                <span className="text-gray-400">+237 695 265 626</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0A84FF] flex-shrink-0" />
                <span className="text-gray-400">info@digitalai-academy.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Digital & AI Academy. Tous droits réservés. Fondé par Joseph Chanel OBAH.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
