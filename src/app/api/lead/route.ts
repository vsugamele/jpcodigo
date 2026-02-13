import { NextRequest, NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations/lead'
import { rateLimit } from '@/lib/rate-limit'
import { createActiveCampaignContact } from '@/lib/activecampaign'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const { success, remaining } = rateLimit(ip)

    if (!success) {
      return NextResponse.json(
        { error: 'Muitas requisicoes. Tente novamente em 1 minuto.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      )
    }

    const body = await request.json()
    const result = leadSchema.safeParse(body)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return NextResponse.json({ error: 'Dados invalidos', details: errors }, { status: 400 })
    }

    const { name, email, phone } = result.data
    const utmData = {
      utm_source: body.utm_source || '',
      utm_medium: body.utm_medium || '',
      utm_campaign: body.utm_campaign || '',
      utm_content: body.utm_content || '',
      utm_term: body.utm_term || '',
    }

    await createActiveCampaignContact({
      name,
      email,
      phone,
      tags: [
        'codigo-dos-cortes',
        'lead-captura',
        utmData.utm_source ? `src:${utmData.utm_source}` : '',
        utmData.utm_campaign ? `camp:${utmData.utm_campaign}` : '',
      ].filter(Boolean),
      utmData,
    })

    return NextResponse.json(
      { success: true, message: 'Lead registrado com sucesso' },
      {
        status: 201,
        headers: { 'X-RateLimit-Remaining': remaining.toString() },
      }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    )
  }
}
