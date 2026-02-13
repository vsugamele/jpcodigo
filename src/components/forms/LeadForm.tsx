'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { leadSchema, type LeadFormData, formatPhone } from '@/lib/validations/lead'
import { trackEvent } from '@/lib/analytics'

export function LeadForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  })

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhone(e.target.value)
      setValue('phone', formatted, { shouldValidate: true })
    },
    [setValue]
  )

  const onSubmit = async (data: LeadFormData) => {
    setSubmitStatus('loading')
    setErrorMessage('')

    try {
      const params = new URLSearchParams(window.location.search)
      const utmData = {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
        utm_term: params.get('utm_term') || '',
      }

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, ...utmData }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Erro ao enviar formulario')
      }

      trackEvent('Lead', { method: 'landing_page' })
      router.push('/obrigado')
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Erro inesperado. Tente novamente.'
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Input
        id="name"
        label="Seu nome"
        placeholder="Como voce se chama?"
        autoComplete="name"
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        id="email"
        label="Seu melhor email"
        type="email"
        placeholder="seu@email.com"
        autoComplete="email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        id="phone"
        label="WhatsApp"
        type="tel"
        placeholder="(11) 99999-9999"
        autoComplete="tel"
        {...register('phone', { onChange: handlePhoneChange })}
        error={errors.phone?.message}
      />

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-gray-500">
          Concordo em receber comunicacoes e aceito a{' '}
          <a href="/privacidade" className="text-primary-600 underline">
            Politica de Privacidade
          </a>{' '}
          conforme a LGPD.
        </label>
      </div>

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </div>
      )}

      <Button type="submit" isLoading={submitStatus === 'loading'} className="w-full text-lg">
        Quero Receber o Guia Gratuito
      </Button>

      <p className="text-center text-xs text-gray-400">
        Seus dados estao seguros. Nao enviamos spam.
      </p>
    </form>
  )
}
