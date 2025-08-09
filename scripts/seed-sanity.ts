import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-05-01",
  token: process.env.SANITY_TOKEN!,
  useCdn: false,
})

async function uploadImage(url: string) {
  const res = await fetch(url)
  const buf = await res.arrayBuffer()
  const blob = new Blob([buf])
  const asset: any = await client.assets.upload("image", blob, { filename: url.split("?")[0].split("/").pop() || "image.jpg" })
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } }
}

async function run() {
  console.log("Seeding Sanity...")
  // Site settings
  const og = await uploadImage("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=60&auto=format&fit=crop")
  const siteSettings = {
    _type: "siteSettings",
    brandName: "Urban Luxe Interiors",
    description: "Premium interior design and designer wallpapers in Noida, Greater Noida, and Ghaziabad.",
    phone: "+91 99999 99999",
    whatsapp: "919999999999",
    email: "hello@urbanluxe.example",
    address: {
      streetAddress: "Sector 62",
      addressLocality: "Noida",
      postalCode: "201301",
      addressRegion: "UP",
      addressCountry: "IN",
    },
    cities: ["Noida", "Greater Noida", "Ghaziabad"],
    social: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      pinterest: "https://pinterest.com/",
    },
    ogImage: og,
  }
  const settingsId = await client.createOrReplace({ ...siteSettings, _id: "siteSettingsSingleton" })
  console.log("Site settings created", settingsId._id)

  // Wallpaper categories
  const catData = [
    { title: "Botanical" },
    { title: "Geometric" },
    { title: "Minimal" },
    { title: "Kids" },
    { title: "Textured" },
  ]
  const cats = []
  for (const c of catData) {
    const hero = await uploadImage("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=60&auto=format&fit=crop")
    const doc = await client.create({ _type: "wallpaperCategory", title: c.title, slug: { _type: "slug", current: c.title.toLowerCase() }, heroImage: hero, blurb: `${c.title} wallpaper ideas.` })
    cats.push(doc)
  }
  console.log("Categories:", cats.length)

  // Wallpapers
  for (let i = 0; i < 6; i++) {
    const img1 = await uploadImage("https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1600&q=60&auto=format&fit=crop")
    const img2 = await uploadImage("https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1600&q=60&auto=format&fit=crop")
    await client.create({
      _type: "wallpaper",
      title: `Designer Wallpaper ${i + 1}`,
      slug: { _type: "slug", current: `designer-wallpaper-${i + 1}` },
      category: { _type: "reference", _ref: cats[i % cats.length]._id },
      images: [img1, img2],
      specs: { material: "Non-woven vinyl", rollSize: "0.53m x 10m", finish: "Matte" },
      priceRange: "₹120/sq.ft – ₹350/sq.ft",
      installTime: "1–2 days",
      description: "Premium designer wallpaper with elegant texture and finish.",
    })
  }

  // Projects
  const roomSets = [["Living", "Dining"], ["Bedroom"], ["Kitchen"], ["Bath"], ["Outdoor"], ["Living", "Bedroom"]]
  const styleSets = [["Minimal"], ["Geometric"], ["Botanical"], ["Textured"], ["Modern"], ["Kids"]]
  for (let i = 0; i < 6; i++) {
    const cover = await uploadImage("https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=60&auto=format&fit=crop")
    const g1 = await uploadImage("https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=1600&q=60&auto=format&fit=crop")
    const g2 = await uploadImage("https://images.unsplash.com/photo-1505691723518-36aef88a3e50?w=1600&q=60&auto=format&fit=crop")
    await client.create({
      _type: "project",
      title: `Urban Luxe Project ${i + 1}`,
      slug: { _type: "slug", current: `urban-luxe-project-${i + 1}` },
      coverImage: cover,
      gallery: [g1, g2],
      rooms: roomSets[i % roomSets.length],
      style: styleSets[i % styleSets.length],
      location: "Noida",
      description: "A refined space blending warm materials with premium finishes.",
      publishedAt: new Date().toISOString(),
    })
  }

  // Services
  const services = [
    { title: "Interior Design", excerpt: "End-to-end interior design for homes and offices.", priceFrom: 50000, duration: "4–12 weeks" },
    { title: "Designer Wallpapers", excerpt: "Selection, supply, and installation of premium wallpapers.", priceFrom: 120, duration: "1–3 days" },
    { title: "Renovation", excerpt: "Space planning, upgrades, and turnkey makeovers.", priceFrom: 150000, duration: "2–8 weeks" },
  ]
  for (const s of services) {
    await client.create({
      _type: "service",
      title: s.title,
      slug: { _type: "slug", current: s.title.toLowerCase().replace(/\s+/g, "-") },
      excerpt: s.excerpt,
      priceFrom: s.priceFrom,
      duration: s.duration,
    })
  }

  // Testimonials
  const testimonials = [
    { name: "Riya Sharma", rating: 5, quote: "Beautiful designs and smooth execution!", location: "Noida" },
    { name: "Amit Verma", rating: 5, quote: "Loved the wallpaper curation and installation.", location: "Ghaziabad" },
  ]
  for (const t of testimonials) {
    await client.create({ _type: "testimonial", ...t })
  }

  // Posts
  for (let i = 0; i < 3; i++) {
    const hero = await uploadImage("https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=60&auto=format&fit=crop")
    await client.create({
      _type: "post",
      title: `Design Ideas ${i + 1}`,
      slug: { _type: "slug", current: `design-ideas-${i + 1}` },
      heroImage: hero,
      excerpt: "Our latest thoughts on materials, textures, and layouts.",
      body: [{ _type: "block", children: [{ _type: "span", text: "Inspiration for your next project." }] }],
      tags: ["ideas", "interior"],
      publishedAt: new Date().toISOString(),
    })
  }

  console.log("Seeding complete.")
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
