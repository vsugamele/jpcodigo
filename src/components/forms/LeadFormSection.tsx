import { LeadForm } from './LeadForm'

export function LeadFormSection() {
  return (
    <section id="formulario" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8">
          <h2 className="font-heading text-center text-xl font-bold text-gray-900 sm:text-2xl">
            Receba seu guia gratuito agora
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Preencha abaixo e receba o material direto no seu email.
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
