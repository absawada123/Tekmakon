// components/layout/Navbar.tsx (Updated for Dynamic Logo and Hydration Fix)

"use client"
import Link from "next/link"
import { useState, useEffect } from "react" // <-- IMPORTED useEffect
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { useTheme } from "next-themes" 
import { ThemeToggle } from "@/components/ThemeToggle" 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" }, 
  { name: "Projects", href: "/projects" },
]

const tekmakonLogoLight = '/media/logo/Tekmakon-lightmode.svg';
const tekmakonLogoDark = '/media/logo/Tekmakon-darkmode.svg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false); // <-- NEW: State to track client mount
  
  const { resolvedTheme } = useTheme();

  // Wait until component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which logo to use
  const currentLogo = resolvedTheme === 'dark' ? tekmakonLogoDark : tekmakonLogoLight;

  // Logo Component with Hydration Guard
  const LogoComponent = (
    <Link href="/" className="relative h-16 w-20">
      {mounted ? (
        <Image 
          src={currentLogo} 
          alt="tekmakon logo" 
          layout="fill" 
          objectFit="contain"
          // Add sizes property if using Next/Image optimization
          sizes="(max-width: 768px) 80px, 100px" 
        />
      ) : (
        // Render a placeholder div during hydration to prevent layout shift
        <div className="h-full w-full" /> 
      )}
    </Link>
  );


  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo */}
        {LogoComponent}

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-900 transition-colors hover:text-primary dark:text-foreground dark:hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle in Desktop View */}
          <ThemeToggle/> 

          <Link href="/contact">
            <Button variant="default" size="sm">Start a Project</Button>
          </Link>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
            {/* Theme Toggle in Mobile View */}
            <ThemeToggle /> 

            <button
                className=""
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-b bg-background md:hidden">
          <div className="container flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary dark:hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Request Demo</Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}