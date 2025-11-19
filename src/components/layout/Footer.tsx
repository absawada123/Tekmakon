import Link from "next/link"
import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">TekMakon</span>
            </div>
            <p className="text-sm text-gray-400">
              Engineering Smart Systems for a Connected Future.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>IoT Solutions</li>
              <li>Energy Automation</li>
              <li>Software Development</li>
              <li>Industrial Integration</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TekMakon. All rights reserved.
        </div>
      </div>
    </footer>
  )
}