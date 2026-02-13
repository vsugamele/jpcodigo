'use client'

import { MetaPixel } from './MetaPixel'
import { GoogleAnalytics } from './GoogleAnalytics'
import { MicrosoftClarity } from './MicrosoftClarity'

export function TrackingProvider() {
  return (
    <>
      <MetaPixel />
      <GoogleAnalytics />
      <MicrosoftClarity />
    </>
  )
}
