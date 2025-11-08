"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-white/50 flex items-center justify-center group-hover:border-white transition-colors">
                <div className="w-4 h-4 bg-white" />
              </div>
              <span className="font-mono text-xl tracking-wider text-white">EDGE-MATE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
            >
              PRODUCTS
            </Link>
            <Link
              href="/surface"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
            >
              SURFACE
            </Link>
            <Link
              href="/engineering"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
            >
              ENGINEERING
            </Link>
            <Link
              href="/precision"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
            >
              PRECISION
            </Link>
            <Link
              href="/specs"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
            >
              SPECS
            </Link>
          </nav>

          {/* CTA Button */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1px] bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`w-6 h-[1px] bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[1px] bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              href="/products"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              href="/surface"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              SURFACE
            </Link>
            <Link
              href="/engineering"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              ENGINEERING
            </Link>
            <Link
              href="/precision"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              PRECISION
            </Link>
            <Link
              href="/specs"
              className="font-mono text-sm text-white/70 hover:text-white transition-colors tracking-wider"
              onClick={() => setMenuOpen(false)}
            >
              SPECS
            </Link>
            <button className="border border-white/50 px-6 py-2 font-mono text-sm text-white hover:bg-white hover:text-black transition-all duration-300 mt-2">
              EXPLORE
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
