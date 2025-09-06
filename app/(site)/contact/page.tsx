import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import ContactForm from "@/components/forms/contact-form"
import { buildWhatsAppLink } from "@/lib/whatsapp"

export const generateMetadata = async (): Promise<Metadata> => createSeo({ title: "Contact", path: "/contact" })

export default function ContactPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999"
  const wa = buildWhatsAppLink({ number: whatsapp, text: "Hi Urban Luxe, I'd like a design consultation" })

  return (
    <div className="section">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="font-serif text-3xl mb-4">Contact</h1>
          <p className="text-muted-foreground mb-6">We&apos;d love to hear about your project. Fill this form or message us on WhatsApp.</p>
          <div className="text-sm mb-4">
            <a className="underline" href={wa} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
          <ContactForm />
        </div>
        <div className="card p-6">
          <div className="font-semibold mb-2">Studio</div>
          <p className="text-sm text-muted-foreground">
            Sector 62, Noida, 201301, UP, India
          </p>
          <div className="mt-4 text-sm">
            <div><strong>Phone:</strong> <a className="underline" href="tel:+917428095297">+917428095297</a></div>
            <div><strong>Email:</strong> <a className="underline" href="mailto:wallsninterior@gmail.com">wallsninterior@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}
