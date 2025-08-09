"use client"

import Script from "next/script"

export function JsonLd({ data, id }: { data: any; id: string }) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
