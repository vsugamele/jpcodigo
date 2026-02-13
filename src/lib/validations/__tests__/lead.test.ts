import { leadSchema, formatPhone } from '../lead'

describe('leadSchema', () => {
  it('validates a correct lead', () => {
    const result = leadSchema.safeParse({
      name: 'Joao Silva',
      email: 'joao@email.com',
      phone: '(11) 99999-9999',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBe('Joao Silva')
      expect(result.data.email).toBe('joao@email.com')
      expect(result.data.phone).toBe('11999999999')
    }
  })

  it('trims whitespace from name and email', () => {
    const result = leadSchema.safeParse({
      name: '  Maria Santos  ',
      email: '  MARIA@Email.COM  ',
      phone: '11999999999',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBe('Maria Santos')
      expect(result.data.email).toBe('maria@email.com')
    }
  })

  it('rejects empty name', () => {
    const result = leadSchema.safeParse({
      name: '',
      email: 'test@email.com',
      phone: '11999999999',
    })
    expect(result.success).toBe(false)
  })

  it('rejects name with only 1 char', () => {
    const result = leadSchema.safeParse({
      name: 'A',
      email: 'test@email.com',
      phone: '11999999999',
    })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = leadSchema.safeParse({
      name: 'Test User',
      email: 'not-an-email',
      phone: '11999999999',
    })
    expect(result.success).toBe(false)
  })

  it('rejects short phone', () => {
    const result = leadSchema.safeParse({
      name: 'Test User',
      email: 'test@email.com',
      phone: '123',
    })
    expect(result.success).toBe(false)
  })

  it('rejects phone with letters', () => {
    const result = leadSchema.safeParse({
      name: 'Test User',
      email: 'test@email.com',
      phone: 'abcdefghij',
    })
    expect(result.success).toBe(false)
  })

  it('strips non-digit chars from phone', () => {
    const result = leadSchema.safeParse({
      name: 'Test User',
      email: 'test@email.com',
      phone: '(11) 99999-9999',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.phone).toBe('11999999999')
    }
  })
})

describe('formatPhone', () => {
  it('formats 2 digits', () => {
    expect(formatPhone('11')).toBe('11')
  })

  it('formats partial phone', () => {
    expect(formatPhone('1199')).toBe('(11) 99')
  })

  it('formats 7 digits', () => {
    expect(formatPhone('1199999')).toBe('(11) 99999')
  })

  it('formats full phone', () => {
    expect(formatPhone('11999999999')).toBe('(11) 99999-9999')
  })

  it('handles already formatted input', () => {
    expect(formatPhone('(11) 99999-9999')).toBe('(11) 99999-9999')
  })
})
