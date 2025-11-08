"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PrecisionSection } from "@/components/precision-section"
import { SurfaceSection } from "@/components/surface-section"
import { SilenceSection } from "@/components/silence-section"
import { EngineeringSection } from "@/components/engineering-section"
import { ProductGallery } from "@/components/product-gallery"
import { SpecsSection } from "@/components/specs-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { CustomCursor } from "@/components/custom-cursor"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-background custom-cursor">
      <CustomCursor />
      <Header />
      <HeroSection />
      <PrecisionSection />
      <SurfaceSection />
      <SilenceSection />
      <EngineeringSection />
      <ProductGallery />
      <SpecsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}
