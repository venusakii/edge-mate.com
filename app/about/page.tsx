import Link from "next/link"

export default function AboutPage() {
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
      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 tracking-tight">About Edge-Mate</h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p>
              Edge-Mate is dedicated to connecting precision-minded individuals with the finest instruments for grooming
              and observation. We believe that excellence lies in the details, and that the right tools can transform
              everyday routines into moments of precision and clarity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <p>
              We curate and review premium grooming tools and telescopes, focusing on craftsmanship, precision
              engineering, and user experience. Our reviews are thorough, honest, and designed to help you make informed
              decisions about the tools that matter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Standards</h2>
            <p>
              Every product we feature meets our strict criteria for quality, precision, and design excellence. We test
              thoroughly, evaluate critically, and recommend only what we would use ourselves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Amazon Partnership</h2>
            <p>
              As an Amazon Associate, Edge-Mate earns from qualifying purchases. This partnership allows us to continue
              providing detailed reviews and recommendations while maintaining our editorial independence.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
