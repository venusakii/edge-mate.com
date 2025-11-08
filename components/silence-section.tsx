"use client"

export function SilenceSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary to-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section III</div>

        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight text-balance">
          Design in
          <br />
          Silence
        </h2>

        <div className="relative w-full aspect-video mb-12 rounded-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
          <img
            src="/professional-barber-cutting-hair-slow-motion-black.jpg"
            alt="Professional grooming in action"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-2xl md:text-3xl font-light tracking-wide text-balance">
          Sound of control. Feel of perfection.
        </p>
      </div>
    </section>
  )
}
