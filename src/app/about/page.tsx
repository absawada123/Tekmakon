import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Team from "@/sections/Team"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About TekMakon</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            TekMakon was born from a desire to bridge the gap between industrial hardware and modern software intelligence.
          </p>
        </div>
        
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              [Placeholder for company history]. We started as a small team of engineers and developers...
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              To create a world where energy is optimized automatically, and systems communicate seamlessly to reduce waste and improve efficiency.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </>
  )
}