"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function SurfaceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-secondary"
    >
      <div
        className={`relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="relative h-[500px] flex items-center justify-center order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent" />
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/celestron-astromaster-telescope-black-professional.jpg"
              alt="Celestron AstroMaster Telescope"
              className="w-auto h-[450px] object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="mb-4 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section II</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Beyond the
            <br />
            Surface
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Precision extends to the infinite. The Celestron AstroMaster 130EQ brings the cosmos into focus with
            engineering that mirrors our commitment to clarity.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-white" />
              <div>
                <div className="font-mono text-sm text-accent">APERTURE</div>
                <div className="text-2xl font-bold">130mm</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-white" />
              <div>
                <div className="font-mono text-sm text-accent">PRECISION</div>
                <div className="text-2xl font-bold">0.002°</div>
              </div>
            </div>
          </div>

          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="group border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Explore Optics
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
