import { sanity } from "@/lib/sanity/client"
import { roomCoverByNameQuery } from "@/lib/sanity/queries"
import { RoomIdeasCarousel } from "@/components/room-ideas-carousel"

const rooms = ["Kitchen", "Bath", "Bedroom", "Living", "Dining", "Outdoor"]

export async function HomeRoomIdeas() {
  // get one cover per room if available
  const items = await Promise.all(
    rooms.map(async (room) => {
      const res = await sanity.fetch(roomCoverByNameQuery, { room })
      const image = res?.coverImage
      // Sanity images require builder; fallback to public image
      const fallback = `/images/rooms/${room.toLowerCase()}.png`
      return {
        title: room,
        image: fallback,
        href: `/portfolio?room=${encodeURIComponent(room)}`,
        alt: `${room} design ideas`,
      }
    })
  )

  return (
    <section className="section">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">Browse Ideas by Room</h2>
        </div>
        <RoomIdeasCarousel items={items} />
      </div>
    </section>
  )
}
