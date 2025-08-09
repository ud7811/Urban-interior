export type WallpaperCategory = {
  title: string
  slug: string
  heroImage: string
  blurb?: string
}

export type Wallpaper = {
  slug: string
  title: string
  categorySlug: string
  images: string[]
  specs: { material: string; rollSize: string; finish: string }
  priceRange: string
  installTime: string
  description: string
}

export const wallpaperCategories: WallpaperCategory[] = [
  {
    title: "Botanical",
    slug: "botanical",
    heroImage: "/images/wallpapers/botanical.png",
    blurb: "Nature-inspired motifs.",
  },
  {
    title: "Geometric",
    slug: "geometric",
    heroImage: "/images/wallpapers/geometric.png",
    blurb: "Crisp lines & patterns.",
  },
  {
    title: "Minimal",
    slug: "minimal",
    heroImage: "/images/wallpapers/minimal.png",
    blurb: "Calm, understated surfaces.",
  },
  { title: "Kids", slug: "kids", heroImage: "/images/wallpapers/kids.png", blurb: "Playful and durable." },
  {
    title: "Textured",
    slug: "textured",
    heroImage: "/images/wallpapers/textured.png",
    blurb: "Rich tactility and depth.",
  },
]

export const wallpapers: Wallpaper[] = [
  {
    slug: "designer-wallpaper-1",
    title: "Palm Whisper",
    categorySlug: "botanical",
    images: ["/botanical-wallpaper.png", "/images/hero-1.png"],
    specs: { material: "Non-woven vinyl", rollSize: "0.53m x 10m", finish: "Matte" },
    priceRange: "₹120/sq.ft – ₹350/sq.ft",
    installTime: "1–2 days",
    description: "Lush botanical pattern that brings nature indoors.",
  },
  {
    slug: "designer-wallpaper-2",
    title: "Geo Rhythm",
    categorySlug: "geometric",
    images: ["/geometric-wallpaper.png", "/images/hero-2.png"],
    specs: { material: "Paper-backed vinyl", rollSize: "0.53m x 10m", finish: "Satin" },
    priceRange: "₹150/sq.ft – ₹380/sq.ft",
    installTime: "1–3 days",
    description: "Bold geometric shapes for a modern statement wall.",
  },
  {
    slug: "designer-wallpaper-3",
    title: "Soft Linen",
    categorySlug: "textured",
    images: ["/images/wallpapers/textured.png"],
    specs: { material: "Fabric-backed", rollSize: "0.7m x 8m", finish: "Textured" },
    priceRange: "₹220/sq.ft – ₹420/sq.ft",
    installTime: "1–2 days",
    description: "Subtle linen texture adds warmth and depth.",
  },
  {
    slug: "designer-wallpaper-4",
    title: "Calm Sand",
    categorySlug: "minimal",
    images: ["/images/wallpapers/minimal.png"],
    specs: { material: "Non-woven", rollSize: "0.53m x 10m", finish: "Matte" },
    priceRange: "₹120/sq.ft – ₹300/sq.ft",
    installTime: "1 day",
    description: "Minimal tone-on-tone texture for serene spaces.",
  },
  {
    slug: "designer-wallpaper-5",
    title: "Space Rockets",
    categorySlug: "kids",
    images: ["/images/wallpapers/kids.png"],
    specs: { material: "PVC-free", rollSize: "0.53m x 10m", finish: "Washable" },
    priceRange: "₹130/sq.ft – ₹280/sq.ft",
    installTime: "1 day",
    description: "Playful rockets and stars for kids’ rooms.",
  },
  {
    slug: "designer-wallpaper-6",
    title: "Golden Weave",
    categorySlug: "textured",
    images: ["/images/wallpapers/textured.png", "/images/hero-2.png"],
    specs: { material: "Vinyl", rollSize: "0.7m x 10m", finish: "Pearl" },
    priceRange: "₹200/sq.ft – ₹400/sq.ft",
    installTime: "1–2 days",
    description: "Rich woven look with a subtle gold sheen.",
  },
]
