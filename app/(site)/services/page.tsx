import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { services } from "@/data/services"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const generateMetadata = async (): Promise<Metadata> => createSeo({ title: "Services", path: "/services" })

export default async function ServicesPage() {
  return (
    <div className="section">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl mb-6">Services</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="card p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{s.title}</div>
                {s.priceFrom ? <Badge variant="secondary">From ₹{s.priceFrom}</Badge> : null}
              </div>
              <p className="text-sm text-muted-foreground">{s.excerpt}</p>
              <div className="text-xs text-muted-foreground">{s.duration ? `Typical duration: ${s.duration}` : ""}</div>
              <Link href="/contact">
                <Button className="btn-gold-hover">Get a quote</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
