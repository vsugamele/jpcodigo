type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(eventName: string, params?: EventParams) {
  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }

  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName === 'Lead' ? 'generate_lead' : eventName, params)
  }
}

export function trackPageView(url: string) {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}
