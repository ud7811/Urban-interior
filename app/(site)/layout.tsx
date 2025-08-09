import "../..//styles/theme.css"
import { GA } from "@/lib/ga"
import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import StickyMobileCTA from "@/components/site/sticky-mobile-cta"
import { Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = createSeo()

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const gscToken = process.env.NEXT_PUBLIC_GSC_VERIFICATION

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {gscToken ? <meta name="google-site-verification" content={gscToken} /> : null}
      </head>
      <body className="min-h-dvh antialiased" style={{ fontFamily: "var(--font-inter)" }}>
        <GA />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
