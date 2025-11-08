"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 bg-secondary">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="mb-8 tracking-[0.3em] text-xs text-accent font-mono uppercase">Section VIII</div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Join the Edge
          <br />
          Community
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          Stay informed about new releases, engineering insights, and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-black border-white/20 text-white placeholder:text-white/40 focus:border-white"
          />
          <Button type="submit" size="lg" className="bg-white text-black hover:bg-white/90 whitespace-nowrap">
            Stay Sharp →
          </Button>
        </form>
      </div>
    </section>
  )
}
