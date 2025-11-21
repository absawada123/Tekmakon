"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" }, 
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
            <Zap className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-secondary">TekMaKon</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="default" size="sm">Get in Touch</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b bg-background md:hidden">
          <div className="container flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Get in Touch</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}