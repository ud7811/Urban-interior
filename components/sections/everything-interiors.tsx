import type React from "react"
import {
  Bed,
  BrickWall,
  Calculator,
  ClipboardCheck,
  Hammer,
  Lamp,
  Layers,
  Lightbulb,
  PaintRoller,
  Palette,
  ShieldCheck,
  Sparkles,
  Sprout,
  Truck,
  Wallet,
  Wrench,
  UserRound,
  RulerIcon as RulerSquare,
  Boxes,
} from "lucide-react"

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  desc?: string
}

const features: Feature[] = [
  { icon: Wallet, title: "Free quote" },
  { icon: Layers, title: "False ceiling design" },
  { icon: Boxes, title: "Modular solutions" },
  { icon: UserRound, title: "Personal designer" },
  { icon: PaintRoller, title: "Wall designs & painting" },
  { icon: Sprout, title: "Terrace gardening" },
  { icon: RulerSquare, title: "Site measurement" },
  { icon: Wrench, title: "Electrical & plumbing work" },
  { icon: Wallet, title: "Easy payments" },
  { icon: Calculator, title: "Budget planning" },
  { icon: Hammer, title: "On-site carpentry" },
  { icon: ShieldCheck, title: "Rigorous quality checks" },
  { icon: Palette, title: "Design concepts & moodboards" },
  { icon: Bed, title: "Furniture for all rooms" },
  { icon: Truck, title: "Trackable deliveries" },
  { icon: ClipboardCheck, title: "Project management" },
  { icon: Sparkles, title: "Deep cleaning before handover" },
  { icon: BrickWall, title: "Demolition" },
  { icon: Lamp, title: "Decor & lighting" },
  { icon: Lightbulb, title: "And many more!" },
]

export default function EverythingInteriors() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <h2 className="text-center tracking-[0.08em] uppercase text-sm text-muted-foreground mb-2">
          Everything Interiors, in one place
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="group relative flex items-center gap-4 rounded-xl border bg-white p-4 shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border bg-[color:var(--accent-1)]/10">
                  <Icon className="h-6 w-6 text-[color:var(--accent-2)]" strokeWidth={1.75} />
                  <span
                    className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[color:var(--accent-2)]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-medium">{f.title}</div>
                  {f.desc ? <p className="text-sm text-muted-foreground">{f.desc}</p> : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
