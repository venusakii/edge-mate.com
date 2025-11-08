import { Header } from "@/components/header"
import { ProductGallery } from "@/components/product-gallery"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 border border-white/20 font-mono text-sm tracking-wider transition-all duration-300"
        >
          ← BACK TO HOME
        </Link>
      </div>
      <div className="pt-24">
        <ProductGallery />
      </div>
    </main>
  )
}
