"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background pt-16 md:pt-20">
      {/* 3D Grid Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: "linear-gradient(#50C2A4 1px, transparent 1px), linear-gradient(90deg, #50C2A4 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          transform: "perspective(500px) rotateX(60deg) translateY(-100px) scale(2)",
        }}
      />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-primary">
            Innovating Energy & Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          Engineering Smart Systems for a <span className="text-primary">Connected Future</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          TekMakon builds intelligent solutions in IoT, automation, software engineering, and real-time energy optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Particles decoration */}
      <motion.div 
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] h-4 w-4 rounded-full bg-destructive opacity-60 blur-sm"
      />
      <motion.div 
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] bottom-[30%] h-6 w-6 rounded-full bg-primary opacity-40 blur-md"
      />
    </section>
  )
}