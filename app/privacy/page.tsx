import Link from "next/link"

export default function PrivacyPage() {
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
        <h1 className="text-5xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
        <div className="space-y-6 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you use our website, including when you sign
              up for our newsletter or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to monitor and analyze trends and usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service, provide the service on our
              behalf, or assist us in analyzing how our service is used. As an Amazon Associate, we use Amazon's
              tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
              access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. Contact us if you
              wish to exercise these rights.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
