"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Simple rotating cube animation
    let rotation = 0
    const cubeSize = 200

    const drawCube = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // 3D cube projection
      const cos = Math.cos(rotation)
      const sin = Math.sin(rotation)

      // Cube vertices
      const vertices = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ]

      // Project 3D to 2D
      const projected = vertices.map(([x, y, z]) => {
        // Rotate around Y axis
        const rotatedX = x * cos - z * sin
        const rotatedZ = x * sin + z * cos

        // Rotate around X axis
        const rotatedY = y * cos - rotatedZ * sin
        const finalZ = y * sin + rotatedZ * cos

        // Simple perspective
        const scale = cubeSize / (finalZ + 4)
        return [centerX + rotatedX * scale, centerY + rotatedY * scale]
      })

      // Draw cube edges
      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0], // Back face
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4], // Front face
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7], // Connecting edges
      ]

      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 2
      edges.forEach(([start, end]) => {
        ctx.beginPath()
        ctx.moveTo(projected[start][0], projected[start][1])
        ctx.lineTo(projected[end][0], projected[end][1])
        ctx.stroke()
      })

      // Draw vertices with glow
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      projected.forEach(([x, y]) => {
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      })

      rotation += 0.005
      requestAnimationFrame(drawCube)
    }

    drawCube()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 text-center px-4">
        <div className="mb-6 tracking-[0.3em] text-sm text-muted-foreground font-mono uppercase">
          Mastery Has an Edge
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-balance">
          Tools of Precision
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Crafted for Those Who Cut Differently. <br />
          Explore engineering-grade grooming and optical performance.
        </p>

        <Button
          size="lg"
          onClick={scrollToNext}
          className="group bg-white text-black hover:bg-white/90 px-8 py-6 text-base tracking-wider"
        >
          ENTER THE MONOLITH
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-muted-foreground font-mono">
        SCROLL TO REVEAL
      </div>
    </section>
  )
}
