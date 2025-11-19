import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Placeholder data
const projects = [
  {
    title: "OpSuite",
    category: "Energy Management Platform",
    description: "OpSuites is a modular energy management and operational intelligence platform for commercial and industrial facilities, delivered as a standalone Electron desktop app with a Node.js backend and a modern React/TypeScript frontend.",
    tech: ["React,js.js", "TypeScript", "Vite","Node,js", "Gemini AI"],
    color: "bg-blue-500" // Placeholder for image
  },
  {
    title: "Tenant Management System",
    category: "Property Management",
    description: "The Tenant Management System (TMS) is an offline-first desktop app that centralizes property, tenant, payment, and visitor management while improving workflow and communication through messaging and automated notifications.",
    tech: ["React", "Google Maps API", "Node.js","Vite","Express.js"],
    color: "bg-orange-500"
  },
  {
    title: "ERPhy",
    category: ["Enterprise Resource & Education"],
    description: "Integrated accounting and operations system designed for manufacturing businesses.",
    tech: ["React,js.js", "TypeScript", "Vite","Node,js", "Gemini AI"],
    color: "bg-purple-500"
  },
]

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Work</h2>
            <p className="mt-4 text-muted-foreground">Innovative systems deployed for real-world impact.</p>
          </div>
          <Link href="/projects">
            <Button variant="ghost" className="gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-xl border bg-background shadow-sm">
              {/* Placeholder Image Area */}
              <div className={`h-48 w-full ${project.color} opacity-80 transition-opacity group-hover:opacity-100`} />
              
              <div className="p-6">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  {project.category}
                </div>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded bg-accent px-2 py-1 text-xs font-medium text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}