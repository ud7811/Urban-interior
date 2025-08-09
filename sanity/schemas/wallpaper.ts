import { defineField, defineType } from "sanity"

export default defineType({
  name: "wallpaper",
  title: "Wallpaper",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "category", type: "reference", to: [{ type: "wallpaperCategory" }] }),
    defineField({ name: "images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({
      name: "specs",
      type: "object",
      fields: [
        { name: "material", type: "string" },
        { name: "rollSize", type: "string" },
        { name: "finish", type: "string" },
      ],
    }),
    defineField({ name: "priceRange", type: "string" }),
    defineField({ name: "installTime", type: "string" }),
    defineField({ name: "description", type: "text" }),
  ],
})
