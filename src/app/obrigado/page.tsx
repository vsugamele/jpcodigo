import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Obrigado! | Codigo dos Cortes - JP Freitas',
  description: 'Seu guia gratuito esta a caminho! Verifique seu email.',
  robots: { index: false, follow: false },
}

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-1 items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
            <svg
              className="h-10 w-10 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="mt-6 font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Parabens! Seu guia esta a caminho!
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-primary-100/90">
            Enviamos o material para o seu email. Verifique tambem a{' '}
            <strong className="text-white">caixa de spam ou promocoes</strong> para garantir que
            voce receba.
          </p>

          <div className="mt-8 rounded-xl border border-primary-700/50 bg-primary-800/50 p-6">
            <h2 className="font-heading text-lg font-semibold text-gold-400">
              Proximos passos:
            </h2>
            <ol className="mt-4 space-y-3 text-left text-sm text-primary-100/80">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-xs font-bold text-gold-400">
                  1
                </span>
                <span>Abra seu email e baixe o guia gratuito</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-xs font-bold text-gold-400">
                  2
                </span>
                <span>Estude o material e aplique as tecnicas no seu dia a dia</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-xs font-bold text-gold-400">
                  3
                </span>
                <span>Fique de olho no email para conteudos exclusivos do JP</span>
              </li>
            </ol>
          </div>

          <div className="mt-8">
            <a
              href="https://www.instagram.com/jpfreitashair"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Siga JP Freitas no Instagram
            </a>
          </div>

          <Link
            href="/captura"
            className="mt-6 inline-block text-sm text-primary-300 transition-colors hover:text-white"
          >
            Voltar para a pagina inicial
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
