const stats = [
  { value: '2.000+', label: 'Alunos Formados' },
  { value: '20+', label: 'Anos de Experiencia' },
  { value: '98%', label: 'Taxa de Satisfacao' },
  { value: '50+', label: 'Cidades Alcancadas' },
]

const testimonials = [
  {
    name: 'Carla M.',
    role: 'Cabeleireira - SP',
    text: 'Depois do curso do JP, meu faturamento triplicou. Hoje sou referencia em cacheados na minha regiao.',
  },
  {
    name: 'Rafael S.',
    role: 'Hair Stylist - RJ',
    text: 'As tecnicas do JP mudaram completamente minha forma de trabalhar com texturas. Recomendo demais!',
  },
  {
    name: 'Ana Paula L.',
    role: 'Proprietaria de Salao - MG',
    text: 'Investir na formacao com JP foi a melhor decisao para o meu salao. Os resultados sao visiveis.',
  },
]

export function SocialProof() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-primary-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            O que dizem nossos alunos
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
