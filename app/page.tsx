import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import FormationsPreview from '@/components/sections/FormationsPreview'
import AboutPreview from '@/components/sections/AboutPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <FormationsPreview />
      <ContactCTA />
    </main>
  )
}
