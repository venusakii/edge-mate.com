"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Professional Hair Clippers Trimmer Kit",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/815olt4G15L._AC_SX679_.jpg",
    slug: "professional-hair-clippers-trimmer-kit",
  },
  {
    id: 2,
    name: "Visibility Skeleton Lithium-Ion Cordless Rechargeable Clipper",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/81+jYy9XlAL._SX679_.jpg",
    slug: "visibility-skeleton-lithium-ion-cordless-rechargeable-clipper",
  },
  {
    id: 3,
    name: "VGRPRO Professional Clippers Cordless Rechargable",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/81PQmH4uPxL._AC_SX679_.jpg",
    slug: "vgrpro-professional-clippers-cordless-rechargable",
  },
  {
    id: 4,
    name: "Remington HC4250 Shortcut Self-Haircut Clippers",
    category: "Grooming",
    image: "https://m.media-amazon.com/images/I/71+IoTEdQ2L._SX679_.jpg",
    slug: "remington-hc4250-shortcut-self-haircut-clippers",
  },
  {
    id: 5,
    name: "DWARFLAB Dwarf Smart Telescope Auto-Tracking",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/61dlaZvg2NL._AC_SX679_.jpg",
    slug: "dwarflab-dwarf-smart-telescope-auto-tracking",
  },
  {
    id: 6,
    name: "Celestron Travel Scope 70 Portable Refractor Telescope",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/61T2V+BMJuL._AC_SX679_.jpg",
    slug: "celestron-travel-scope-70-portable-refractor-telescope",
  },
  {
    id: 7,
    name: "Gskyer 130EQ Professional Astronomical Reflector Telescope",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/71YoEzpBs0L._AC_SY879_.jpg",
    slug: "gskyer-130eq-professional-astronomical-reflector-telescope",
  },
  {
    id: 8,
    name: "Gskyer Telescope AZ Astronomical Refracting",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/71cb2RCy+aL._AC_SX679_.jpg",
    slug: "gskyer-telescope-az-astronomical-refracting",
  },
  {
    id: 9,
    name: "Dianfan Telescope 90mm Aperture 800mm Professional Refractor",
    category: "Optics",
    image: "https://m.media-amazon.com/images/I/71uep1oHjFL._AC_SX679_.jpg",
    slug: "dianfan-telescope-90mm-aperture-800mm-professional-refractor",
  },
]

export function ProductGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="mb-4 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section V</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Product Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated instruments of precision. Each product represents our commitment to engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <Card
                className={`group relative bg-card border-border overflow-hidden transition-all duration-300 cursor-pointer ${
                  hoveredId === product.id ? "scale-105 border-white/30" : "scale-100"
                }`}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-secondary">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="text-xs font-mono text-accent mb-2 tracking-wider">
                        {product.category.toUpperCase()}
                      </div>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
