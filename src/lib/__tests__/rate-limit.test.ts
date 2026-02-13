import { rateLimit } from '../rate-limit'

describe('rateLimit', () => {
  it('allows first request', () => {
    const result = rateLimit('test-ip-1')
    expect(result.success).toBe(true)
    expect(result.remaining).toBe(4)
  })

  it('decrements remaining on each call', () => {
    const id = 'test-ip-decrement'
    rateLimit(id)
    const result = rateLimit(id)
    expect(result.success).toBe(true)
    expect(result.remaining).toBe(3)
  })

  it('blocks after max requests', () => {
    const id = 'test-ip-block'
    for (let i = 0; i < 5; i++) {
      rateLimit(id)
    }
    const result = rateLimit(id)
    expect(result.success).toBe(false)
    expect(result.remaining).toBe(0)
  })
})
