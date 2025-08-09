import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="font-serif text-xl mb-2">Urban Luxe Interiors</div>
          <p className="text-sm text-muted-foreground">
            Premium interiors and designer wallpapers for elegant homes and offices in Noida, Greater Noida, and Ghaziabad.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="grid gap-2 text-sm">
            <li><Link className="hover:underline" href="/services">Services</Link></li>
            <li><Link className="hover:underline" href="/wallpapers">Wallpapers</Link></li>
            <li><Link className="hover:underline" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:underline" href="/blog">Blog</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Service Areas</div>
          <ul className="grid gap-2 text-sm">
            <li><Link className="hover:underline" href="/areas/noida">Noida</Link></li>
            <li><Link className="hover:underline" href="/areas/greater-noida">Greater Noida</Link></li>
            <li><Link className="hover:underline" href="/areas/ghaziabad">Ghaziabad</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="grid gap-2 text-sm">
            <li><a className="hover:underline" href="tel:+919999999999">+91 99999 99999</a></li>
            <li><a className="hover:underline" href="mailto:hello@urbanluxe.example">hello@urbanluxe.example</a></li>
            <li className="text-muted-foreground">Mon-Sat 10:00–18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Urban Luxe Interiors. All rights reserved.
      </div>
    </footer>
  )
}
