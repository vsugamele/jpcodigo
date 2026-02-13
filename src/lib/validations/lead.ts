import { z } from 'zod'

export const leadSchema = z.object({
  name: z
    .string()
    .transform((val) => val.trim())
    .pipe(
      z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo')
    ),
  email: z
    .string()
    .transform((val) => val.trim().toLowerCase())
    .pipe(z.string().email('Email invalido').max(255, 'Email muito longo')),
  phone: z
    .string()
    .min(10, 'Telefone deve ter pelo menos 10 digitos')
    .max(15, 'Telefone muito longo')
    .regex(/^[\d\s()+-]+$/, 'Telefone invalido')
    .transform((val) => val.replace(/\D/g, '')),
})

export type LeadFormData = z.infer<typeof leadSchema>

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}
