'use client'

import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID

export function GoogleAnalytics() {
  if (!GA_ID || GA_ID === 'PLACEHOLDER') return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}
