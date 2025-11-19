import { Cpu, Activity, Code2, Network } from "lucide-react"

const features = [
  {
    title: "Smart IoT Solutions",
    description: "Seamlessly connect devices and sensors for real-time data acquisition and control.",
    icon: Cpu,
  },
  {
    title: "Energy & Automation",
    description: "Intelligent systems designed to optimize energy consumption and automate industrial workflows.",
    icon: Activity,
  },
  {
    title: "Software & AI Development",
    description: "Custom software tailored to your needs, enhanced with modern AI capabilities.",
    icon: Code2,
  },
  {
    title: "Industrial Integrations",
    description: "Robust communication via RS485, Modbus, and LoRaWAN for industrial environments.",
    icon: Network,
  },
]

export default function Features() {
  return (
    <section className="bg-accent/30 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Core Capabilities</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to build a smarter infrastructure.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}