"use client"

import Image from "next/image"

export function SpecsSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-secondary">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section VI</div>

        <h2 className="text-5xl md:text-6xl font-bold mb-20 tracking-tight">Inside the Edge</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {[
            { label: "Battery Runtime", value: "240", unit: "min" },
            { label: "RPM", value: "7200", unit: "" },
            { label: "Weight", value: "0.8", unit: "kg" },
            { label: "Lens Precision", value: "0.002", unit: "°" },
          ].map((spec, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-xs font-mono text-accent tracking-wider">{spec.label.toUpperCase()}</div>
              <div className="text-5xl md:text-6xl font-bold font-mono mb-1">{spec.value}</div>
              <div className="text-xl text-muted-foreground font-mono">{spec.unit}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 border border-white/10" />
          <div className="absolute inset-4 border border-white/5" />
          <div className="absolute inset-8 border border-white/5 flex items-center justify-center overflow-hidden">
            <Image
              src="/specs-precision-device.jpg"
              alt="Precision engineering device"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
