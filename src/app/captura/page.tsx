import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Benefits } from '@/components/sections/Benefits'
import { SocialProof } from '@/components/sections/SocialProof'
import { Footer } from '@/components/sections/Footer'
import { LeadFormSection } from '@/components/forms/LeadFormSection'

export const metadata: Metadata = {
  title: 'Guia Gratuito - Codigo dos Cortes | JP Freitas',
  description:
    'Baixe agora o guia gratuito com tecnicas exclusivas para cortes de cabelos cacheados, crespos e ondulados. Por JP Freitas.',
}

export default function CapturaPage() {
  return (
    <main>
      <Hero />
      <LeadFormSection />
      <Benefits />
      <SocialProof />
      <Footer />
    </main>
  )
}
