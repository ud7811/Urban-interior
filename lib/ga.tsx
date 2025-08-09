"use client"

import Script from "next/script"

export function GA() {
  const id = process.env.NEXT_PUBLIC_GA4_ID
  if (!id) return null
  return (
    <>
      <Script id="ga4" async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <Script id="ga4-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', '${id}', { send_page_view: true });
        `}
      </Script>
    </>
  )
}

export function pushEvent(event: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return
  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push({ event, ...params })
}
