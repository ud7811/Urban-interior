import { defineField, defineType } from "sanity"

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "logo", type: "image" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "whatsapp", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({
      name: "address",
      type: "object",
      fields: [
        { name: "streetAddress", type: "string" },
        { name: "addressLocality", type: "string" },
        { name: "postalCode", type: "string" },
        { name: "addressRegion", type: "string" },
        { name: "addressCountry", type: "string" },
      ],
    }),
    defineField({ name: "cities", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "social",
      type: "object",
      fields: [
        { name: "instagram", type: "url" },
        { name: "facebook", type: "url" },
        { name: "pinterest", type: "url" },
      ],
    }),
    defineField({ name: "ogImage", type: "image" }),
  ],
})
