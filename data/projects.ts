export type Project = {
  slug: string
  title: string
  coverImage: string
  gallery: string[]
  rooms: string[]
  style: string[]
  location: string
  description: string
  publishedAt: string
}

export const projects: Project[] = [
  {
    slug: "urban-luxe-project-1",
    title: "Warm Minimal Living",
    coverImage: "/images/rooms/living.png",
    gallery: ["/images/rooms/living.png", "/images/hero-1.png", "/images/hero-2.png"],
    rooms: ["Living", "Dining"],
    style: ["Minimal"],
    location: "Noida",
    description: "A refined living-dining with warm textures, layered lighting, and a subtle feature wall.",
    publishedAt: "2024-09-01",
  },
  {
    slug: "urban-luxe-project-2",
    title: "Serene Bedroom Suite",
    coverImage: "/images/rooms/bedroom.png",
    gallery: ["/images/rooms/bedroom.png", "/images/hero-2.png"],
    rooms: ["Bedroom"],
    style: ["Geometric"],
    location: "Ghaziabad",
    description: "A cozy bedroom with soft textiles, premium finishes, and calm color palette.",
    publishedAt: "2024-08-28",
  },
  {
    slug: "urban-luxe-project-3",
    title: "Modern Kitchen Refresh",
    coverImage: "/images/rooms/kitchen.png",
    gallery: ["/images/rooms/kitchen.png"],
    rooms: ["Kitchen"],
    style: ["Modern"],
    location: "Greater Noida",
    description: "Efficient storage, durable surfaces, and understated elegance.",
    publishedAt: "2024-08-20",
  },
  {
    slug: "urban-luxe-project-4",
    title: "Spa-like Bath",
    coverImage: "/images/rooms/bath.png",
    gallery: ["/images/rooms/bath.png", "/images/hero-1.png"],
    rooms: ["Bath"],
    style: ["Textured"],
    location: "Noida",
    description: "A spa-inspired bathroom with textured finishes and warm lighting.",
    publishedAt: "2024-08-10",
  },
  {
    slug: "urban-luxe-project-5",
    title: "Outdoor Lounge",
    coverImage: "/images/rooms/outdoor.png",
    gallery: ["/images/rooms/outdoor.png"],
    rooms: ["Outdoor"],
    style: ["Modern"],
    location: "Noida",
    description: "An outdoor seating area with weather-friendly materials.",
    publishedAt: "2024-07-22",
  },
  {
    slug: "urban-luxe-project-6",
    title: "Elegant Dining",
    coverImage: "/images/rooms/dining.png",
    gallery: ["/images/rooms/dining.png", "/images/hero-2.png"],
    rooms: ["Dining"],
    style: ["Botanical"],
    location: "Ghaziabad",
    description: "A dining room featuring statement lighting and rich textures.",
    publishedAt: "2024-07-10",
  },
]
