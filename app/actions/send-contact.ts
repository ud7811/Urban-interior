"use server"

import { Resend } from "resend"

export type ContactPayload = {
  name: string
  phone: string
  city: string
  service: string
  message: string
}

export async function sendContact(payload: ContactPayload) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const to = process.env.CONTACT_TO_EMAIL || "hello@urbanluxe.example"
    const from = process.env.RESEND_FROM_EMAIL || "Studio <no-reply@your-domain.example>"
    const subject = `New enquiry from ${payload.name} (${payload.city})`

    const html = `
      <h2>New Enquiry</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>City:</strong> ${payload.city}</p>
      <p><strong>Service:</strong> ${payload.service}</p>
      <p><strong>Message:</strong> ${payload.message}</p>
    `
    await resend.emails.send({ to, from, subject, html })
    return { ok: true }
  } catch (e: any) {
    console.error("sendContact error", e)
    return { ok: false, error: e?.message || "Failed to send" }
  }
}
