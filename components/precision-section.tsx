"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function PrecisionSection() {
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
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div>
          <div className="mb-4 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section I</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Precision in
            <br />
            Every Motion
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The TitanEdge Pro represents the convergence of surgical precision and intuitive design. Engineered for
            professionals who demand excellence in every cut.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-white" />
              <div>
                <div className="font-mono text-sm text-accent">RUNTIME</div>
                <div className="text-2xl font-bold">240 min</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-white" />
              <div>
                <div className="font-mono text-sm text-accent">POWER</div>
                <div className="text-2xl font-bold">7200 RPM</div>
              </div>
            </div>
          </div>

          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="group border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              View Product
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent" />
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/professional-cordless-hair-clipper-titanium-edge-b.jpg"
              alt="TitanEdge Pro Clipper"
              className="w-auto h-[400px] object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
