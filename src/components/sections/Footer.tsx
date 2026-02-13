import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} JP Freitas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/termos"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacidade"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Politica de Privacidade
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-gray-400">
          Este site nao e afiliado ao Facebook/Meta. Ao se cadastrar, voce concorda com nossa
          politica de privacidade e termos de uso conforme a LGPD (Lei 13.709/2018).
        </p>
      </div>
    </footer>
  )
}
