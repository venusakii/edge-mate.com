import Link from "next/link"

export default function TermsPage() {
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
        <h1 className="text-5xl font-bold mb-8 tracking-tight">Terms of Service</h1>
        <div className="space-y-6 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Edge-Mate.com, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Edge-Mate's website for
              personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Amazon Affiliate Disclosure</h2>
            <p>
              Edge-Mate is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
              designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Product Information</h2>
            <p>
              We strive to provide accurate product information, but we do not warrant that product descriptions or
              other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Edge-Mate or its suppliers be liable for any damages arising out of the use or inability
              to use the materials on Edge-Mate's website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
