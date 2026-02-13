const benefits = [
  {
    icon: '✂️',
    title: 'Tecnicas Exclusivas de Corte',
    description:
      'Aprenda os metodos que JP Freitas desenvolveu em mais de 20 anos trabalhando com texturas.',
  },
  {
    icon: '📐',
    title: 'Visagismo Aplicado a Texturas',
    description:
      'Descubra como adaptar cada corte ao formato do rosto e tipo de curvatura do fio.',
  },
  {
    icon: '💰',
    title: 'Aumente Seu Ticket Medio',
    description:
      'Profissionais que dominam cortes texturizados cobram ate 3x mais por servico.',
  },
  {
    icon: '🎓',
    title: 'Certificado de Especializacao',
    description:
      'Receba um certificado reconhecido que valoriza seu curriculo profissional.',
  },
  {
    icon: '👥',
    title: 'Comunidade Exclusiva',
    description:
      'Acesso ao grupo de alunos para networking, duvidas e troca de experiencias.',
  },
]

export function Benefits() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-heading text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          O que voce vai aprender no guia gratuito
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
          Um material criado por quem vive e respira cabelos texturizados ha mais de duas decadas.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {benefit.icon}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
