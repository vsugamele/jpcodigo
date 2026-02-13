import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-semibold text-gold-300">
          Material Gratuito Exclusivo
        </p>
        <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Domine a Arte dos Cortes para{' '}
          <span className="text-gold-400">Cabelos Cacheados, Crespos e Ondulados</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-100/90 sm:text-xl">
          Baixe agora o guia gratuito com as tecnicas que transformaram a carreira de mais de
          2.000 profissionais da beleza em todo o Brasil.
        </p>
      </div>
    </section>
  )
}
