import { RoomIdeasCarousel } from "@/components/room-ideas-carousel"

const rooms = ["Kitchen", "Bath", "Bedroom", "Living", "Dining", "Outdoor"]

export async function HomeRoomIdeas() {
  const items = rooms.map((room) => ({
    title: room,
    image: `/images/rooms/${room.toLowerCase()}.png`,
    href: `/portfolio?room=${encodeURIComponent(room)}`,
    alt: `${room} design ideas`,
  }))

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
