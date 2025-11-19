import { User } from "lucide-react"

const team = [
  { name: "Ivan", role: "Marketing & Strategy", desc: "Founder, Ideation & Funding" },
  { name: "AB", role: "Full-Stack Developer", desc: "Engineering Lead" },
  { name: "Austin", role: "Frontend & AI", desc: "Prompt Engineering & Web Dev" },
  { name: "Gio", role: "Project Manager", desc: "Solutions Consultant" },
]

export default function Team() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet the Team</h2>
          <p className="mt-4 text-muted-foreground">The minds behind TekMakon.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-accent text-muted-foreground">
                <User className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}