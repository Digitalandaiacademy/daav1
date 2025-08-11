import type { Metadata } from 'next'
import { Montserrat, Poppins, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/components/providers/AuthProvider'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Digital & AI Academy - Formation et Services Digitaux à Douala',
  description: 'Centre de formation et services digitaux spécialisé en IA, développement web, marketing digital et automatisation à Douala, Cameroun.',
  keywords: 'formation digitale, IA, intelligence artificielle, développement web, marketing digital, Douala, Cameroun',
  authors: [{ name: 'Digital & AI Academy' }],
  openGraph: {
    title: 'Digital & AI Academy - Formation et Services Digitaux',
    description: 'Centre de formation et services digitaux spécialisé en IA à Douala',
    type: 'website',
    locale: 'fr_FR',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${poppins.variable} ${openSans.variable}`}>
      <body className="font-open-sans bg-gray-50 text-gray-900">
        <AuthProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
