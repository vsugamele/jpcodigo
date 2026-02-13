import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { TrackingProvider } from '@/components/tracking/TrackingProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Codigo dos Cortes | JP Freitas',
  description:
    'Domine a arte dos cortes para cabelos cacheados, crespos e ondulados. Curso completo com JP Freitas, mais de 20 anos de experiencia e 2.000+ alunos formados.',
  keywords: [
    'cabelos cacheados',
    'corte cacheado',
    'JP Freitas',
    'codigo dos cortes',
    'cabelos crespos',
    'cabelos ondulados',
    'curso cabeleireiro',
  ],
  openGraph: {
    title: 'Codigo dos Cortes | JP Freitas',
    description:
      'Domine a arte dos cortes para cabelos cacheados, crespos e ondulados.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-white`}>
        <TrackingProvider />
        {children}
      </body>
    </html>
  )
}
