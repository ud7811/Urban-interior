import { defineField, defineType } from "sanity"

export default defineType({
  name: "wallpaperCategory",
  title: "Wallpaper Category",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "blurb", type: "text" }),
  ],
})
