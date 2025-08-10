import { createSeo, localBusinessJsonLd } from "@/lib/seo"
import { JsonLd } from "@/components/seo/jsonld"
import { Hero } from "@/components/sections/hero"
import { FeaturedProjectsGrid } from "@/components/sections/featured-projects"
import { WallpaperCategoriesRail } from "@/components/sections/wallpaper-categories-rail"
import { HomeRoomIdeas } from "@/components/sections/room-ideas"
import { WhyUs } from "@/components/sections/why-us"
import { Testimonials } from "@/components/sections/testimonials"
import ShapedGalleryMarquee from "@/components/sections/ShapedGalleryMarquee"
import EverythingInteriors from "@/components/sections/everything-interiors"
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

  const inspirationItems = [
    { src: "/botanical-wallpaper.png", alt: "Botanical custom wallpaper" },
    { src: "/geometric-wallpaper.png", alt: "Geometric custom wallpaper" },
    {
      src: "https://images.unsplash.com/photo-1505692952047-b19be8fe80f2?w=1600&q=70&auto=format&fit=crop",
      alt: "Warm minimalist living room",
    },
    {
      src: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=1600&q=70&auto=format&fit=crop",
      alt: "Natural light with soft drapery",
    },
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=70&auto=format&fit=crop",
      alt: "White kitchen with wood accents",
    },
    {
      src: "https://images.unsplash.com/photo-1493809842364-1a78307da8f2?w=1600&q=70&auto=format&fit=crop",
      alt: "Neutral bedroom with layered textiles",
    },
    {
      src: "https://images.unsplash.com/photo-1493660412993-7dacf7beaa0a?w=1600&q=70&auto=format&fit=crop",
      alt: "Modern lounge chair vignette",
    },
    {
      src: "https://images.unsplash.com/photo-1493809842364-37526070297c?w=1600&q=70&auto=format&fit=crop",
      alt: "Elegant dining setup",
    },
    {
      src: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=1600&q=70&auto=format&fit=crop",
      alt: "Compact home office corner",
    },
    {
      src: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=1600&q=70&auto=format&fit=crop",
      alt: "Soft pampas styling on console",
    },
    {
      src: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=1600&q=70&auto=format&fit=crop",
      alt: "Cozy bedroom with warm lighting",
    },
    {
      src: "https://images.unsplash.com/photo-1493809842364-37526070297c?w=1600&q=70&auto=format&fit=crop",
      alt: "Calm entryway with round mirror",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=70&auto=format&fit=crop",
      alt: "Kitchen island and pendant",
    },
    {
      src: "https://images.unsplash.com/photo-1493660412993-37526070297c?w=1600&q=70&auto=format&fit=crop",
      alt: "Green textured accent wall (wallpaper look)",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=70&auto=format&fit=crop",
      alt: "Spa-like bathroom with natural tones",
    },
    {
      src: "https://images.unsplash.com/photo-1505692794403-34d4982a83cd?w=1600&q=70&auto=format&fit=crop",
      alt: "Sunlit staircase shadows",
    },
    {
      src: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=1600&q=70&auto=format&fit=crop",
      alt: "Outdoor seating with rattan chairs",
    },
  ]

  return (
    <>
      <JsonLd id="jsonld-localbusiness" data={jsonLd} />
      <Hero />
      <FeaturedProjectsGrid />
      <HomeRoomIdeas />
      <ShapedGalleryMarquee items={inspirationItems} />
      <WallpaperCategoriesRail />
      <EverythingInteriors />
      <WhyUs />
      <Testimonials />
    </>
  )
}
