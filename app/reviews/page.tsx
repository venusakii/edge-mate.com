import Link from "next/link"
import Image from "next/image"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 border border-white/20 font-mono text-sm tracking-wider transition-all duration-300"
        >
          ← BACK TO HOME
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Product Reviews</h1>
        <p className="text-xl text-white/70 mb-16 max-w-2xl">
          In-depth reviews and comparisons of precision grooming tools and telescopes
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review Card 1 */}
          <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
            <div className="aspect-video bg-white/5 mb-4 relative overflow-hidden">
              <Image src="/luxury-premium-safety-razor-close-up.jpg" alt="Premium Razor" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Razor Review</h3>
            <p className="text-sm text-white/70 mb-4">
              An in-depth look at the craftsmanship and precision of premium shaving razors.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-accent font-mono text-sm">5/5 STARS</span>
              <span className="text-xs text-white/50">Jan 15, 2025</span>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
            <div className="aspect-video bg-white/5 mb-4 relative overflow-hidden">
              <Image src="/professional-telescope-stargazing-night-sky.jpg" alt="Telescope" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telescope Comparison</h3>
            <p className="text-sm text-white/70 mb-4">
              Comparing top-tier telescopes for both amateur and professional astronomers.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-accent font-mono text-sm">4.5/5 STARS</span>
              <span className="text-xs text-white/50">Jan 12, 2025</span>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="border border-white/10 p-6 hover:border-white/30 transition-colors">
            <div className="aspect-video bg-white/5 mb-4 relative overflow-hidden">
              <Image src="/premium-grooming-kit-tools-razor-brush.jpg" alt="Grooming Kit" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2">Grooming Kit Essentials</h3>
            <p className="text-sm text-white/70 mb-4">
              Everything you need for precision grooming, tested and reviewed.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-accent font-mono text-sm">5/5 STARS</span>
              <span className="text-xs text-white/50">Jan 10, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
