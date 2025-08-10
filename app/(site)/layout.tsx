import type React from "react"
import "../../styles/theme.css"
import { GA } from "@/lib/ga"
import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import StickyMobileCTA from "@/components/site/sticky-mobile-cta"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export async function generateMetadata(): Promise<Metadata> {
  const base = createSeo()
  const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION
  const md: Metadata = { ...base }
  if (gsc) {
    ;(md as any).verification = { google: gsc }
  }
  return md
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${playfair.variable}`} style={{ fontFamily: "var(--font-inter)" }}>
      <GA />
      <Header />
      <Toaster position="top-center" richColors closeButton />
      <main>{children}</main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
