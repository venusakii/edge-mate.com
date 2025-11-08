import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">EDGE-MATE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Precision instruments for those who demand excellence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-mono tracking-wider mb-4 text-accent">NAVIGATION</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/reviews" className="text-sm hover:text-accent transition-colors">
                Reviews
              </Link>
              <Link href="/about" className="text-sm hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-mono tracking-wider mb-4 text-accent">LEGAL</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/terms" className="text-sm hover:text-accent transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm hover:text-accent transition-colors">
                Privacy
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2025 Edge-Mate.com — All Rights Reserved</p>
            <p className="text-center">
              Amazon Affiliate Partner — As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
