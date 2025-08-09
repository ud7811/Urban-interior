import { groq } from "next-sanity"

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{brandName, description, logo, phone, whatsapp, email, address, cities, social, ogImage}`

export const servicesQuery = groq`*[_type == "service"]|order(title asc){_id, title, slug, excerpt, details, priceFrom, duration, icon}`

export const testimonialsQuery = groq`*[_type == "testimonial"]|order(_createdAt desc)[0...8]{name, rating, quote, location}`

export const featuredProjectsQuery = groq`*[_type == "project"]|order(publishedAt desc)[0...6]{_id, title, slug, coverImage, rooms, style, location, description}`

export const projectsByFilterQuery = groq`*[_type == "project" && (!defined($room) || $room in rooms[]) && (!defined($style) || $style in style[])]|order(publishedAt desc){
  _id, title, slug, coverImage, rooms, style, location, description
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id, title, slug, coverImage, gallery, rooms, style, location, description, beforeAfter, publishedAt
}`

export const wallpaperCategoriesQuery = groq`*[_type == "wallpaperCategory"]|order(title asc){_id, title, slug, heroImage, blurb}`

export const wallpapersQuery = groq`*[_type == "wallpaper"]|order(_createdAt desc){
  _id, title, slug, "category": category-> {title, slug}, images, specs, priceRange, installTime, description
}`

export const wallpaperBySlugQuery = groq`*[_type == "wallpaper" && slug.current == $slug][0]{
  _id, title, slug, "category": category-> {title, slug}, images, specs, priceRange, installTime, description
}`

export const postsQuery = groq`*[_type == "post"]|order(publishedAt desc)[0...12]{_id, title, slug, heroImage, excerpt, tags, publishedAt}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{_id, title, slug, heroImage, excerpt, body, tags, publishedAt}`

export const roomCoverByNameQuery = groq`*[_type == "project" && $room in rooms[]][0]{coverImage}`
