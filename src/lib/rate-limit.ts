const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const WINDOW_MS = 60 * 1000 // 1 minuto
const MAX_REQUESTS = 5

export function rateLimit(identifier: string): { success: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + WINDOW_MS })
    return { success: true, remaining: MAX_REQUESTS - 1 }
  }

  if (record.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 }
  }

  record.count++
  return { success: true, remaining: MAX_REQUESTS - record.count }
}
