import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import Projects from "@/sections/Projects"
import Testimonials from "@/sections/Testimonials" // <-- Import this
import ContactSection from "@/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Testimonials /> {/* <-- Add this line */}
      <ContactSection />
      <Footer />
    </>
  )
}