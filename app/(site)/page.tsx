import { createSeo, localBusinessJsonLd } from "@/lib/seo"
import { JsonLd } from "@/components/seo/jsonld"
import { Hero } from "@/components/sections/hero"
import { FeaturedProjectsGrid } from "@/components/sections/featured-projects"
import { WallpaperCategoriesRail } from "@/components/sections/wallpaper-categories-rail"
import { HomeRoomIdeas } from "@/components/sections/room-ideas"
import { WhyUs } from "@/components/sections/why-us"
import { Testimonials } from "@/components/sections/testimonials"
import type { Metadata } from "next"

export const generateMetadata = async (): Promise<Metadata> => {
  return createSeo({
    title: "Elegant Interiors & Designer Wallpapers",
    path: "/",
  })
}

export default function HomePage() {
  // LocalBusiness JSON-LD
  const jsonLd = localBusinessJsonLd({
    brand: "Urban Luxe Interiors",
    phone: "+91 99999 99999",
    email: "hello@urbanluxe.example",
    address: {
      streetAddress: "Sector 62",
      addressLocality: "Noida",
      postalCode: "201301",
      addressRegion: "UP",
      addressCountry: "IN",
    },
    cities: ["Noida", "Greater Noida", "Ghaziabad"],
  })

  return (
    <>
      <JsonLd id="jsonld-localbusiness" data={jsonLd} />
      <Hero />
      <FeaturedProjectsGrid />
      <HomeRoomIdeas />
      <WallpaperCategoriesRail />
      <WhyUs />
      <Testimonials />
    </>
  )
}
