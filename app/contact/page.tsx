"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
      <div className="max-w-2xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
        <p className="text-xl text-white/70 mb-12">Have a question or feedback? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mono tracking-wider mb-2">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-mono tracking-wider mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-mono tracking-wider mb-2">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-mono tracking-wider mb-2">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
          </div>

          <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 font-mono tracking-wider py-6">
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </main>
  )
}
