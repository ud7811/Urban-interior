import { defineField, defineType } from "sanity"

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "rating", type: "number" }),
    defineField({ name: "quote", type: "text" }),
    defineField({ name: "location", type: "string" }),
  ],
})
