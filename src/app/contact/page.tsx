import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Contact Info */}
          <div>
            <h1 className="mb-6 text-4xl font-bold">Start a project with TekMakon</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Tell us about your system, and get a tailored plan for IoT, automation, or software in a few business days.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <span>tekmakon2025@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+63 968 493 6438</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Calamba City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input type="text" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Juan" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Dela Cruz" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="juan@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Inquiry Type</label>
                <select className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>General Inquiry</option>
                  <option>Project Quote</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="h-32 w-full rounded-md border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Tell us about your project..." />
              </div>

              <Button className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}