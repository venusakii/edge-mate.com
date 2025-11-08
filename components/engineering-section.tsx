"use client"

export function EngineeringSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-secondary">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section IV</div>

        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
          EdgeLab
          <br />
          Engineering
        </h2>

        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          We design at the intersection of power and silence. Every component is engineered to deliver precision that
          professionals demand.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Motor Module", value: "01" },
            { label: "Blade System", value: "02" },
            { label: "Optical Lens", value: "03" },
            { label: "Power Core", value: "04" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
              <div className="relative">
                <div className="text-5xl font-bold mb-4 font-mono text-accent">{item.value}</div>
                <div className="text-sm tracking-wider uppercase">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
