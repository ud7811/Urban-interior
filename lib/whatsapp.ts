export function buildWhatsAppLink({
  number,
  text,
}: {
  number: string
  text: string
}) {
  const encoded = encodeURIComponent(text)
  // Expect number like 91XXXXXXXXXX without +
  return `https://wa.me/${number}?text=${encoded}`
}
