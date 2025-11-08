"use client"

const testimonials = [
  { name: "Noah F.", quote: "Feels like holding a piece of art." },
  { name: "Hiroshi Tanaka", quote: "Cut. Focus. Power. Repeat." },
  { name: "Clara V.", quote: "The telescope redefines what portable means." },
]

export function TestimonialsSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="mb-4 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section VII</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Voices in the Void</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="absolute top-8 left-8 text-6xl text-white/10 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-lg mb-6 leading-relaxed min-h-[80px] flex items-center">{testimonial.quote}</p>
                <div className="text-sm font-mono text-accent tracking-wider">— {testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
