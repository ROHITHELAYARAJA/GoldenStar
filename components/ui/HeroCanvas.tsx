import React, { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  alpha: number
  isAccent: boolean
  pulseSpeed: number
  pulseVal: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let ripples: Ripple[] = []

    const updateSize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.parentElement.clientWidth
      height = canvas.parentElement.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
      initParticles()
    }

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170,
      isHovered: false,
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.isHovered = true
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
      mouse.isHovered = false
    }

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.8,
      })
    }

    window.addEventListener("resize", updateSize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("click", handleClick)

    let particles: Particle[] = []

    const initParticles = () => {
      particles = []
      // Density tuned for silky performance
      const count = Math.min(Math.floor((width * height) / 10000), 85)

      for (let i = 0; i < count; i++) {
        const isAccent = Math.random() < 0.38 // 38% vibrant crimson nodes
        const x = Math.random() * width
        const y = Math.random() * height
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: isAccent ? Math.random() * 2.2 + 3.0 : Math.random() * 1.6 + 2.0,
          baseAlpha: isAccent ? 0.88 : 0.45,
          alpha: isAccent ? 0.88 : 0.45,
          isAccent,
          pulseSpeed: Math.random() * 0.035 + 0.015,
          pulseVal: Math.random() * Math.PI * 2,
        })
      }
    }

    updateSize()

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw and update click ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r]
        rip.radius += 4
        rip.alpha *= 0.94

        if (rip.alpha < 0.01 || rip.radius > rip.maxRadius) {
          ripples.splice(r, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(220, 38, 38, ${rip.alpha * 0.6})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // 2. Draw connecting lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 145) {
            const lineAlpha = (1 - dist / 145) * 0.25
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle =
              particles[i].isAccent || particles[j].isAccent
                ? `rgba(220, 38, 38, ${lineAlpha * 1.5})`
                : `rgba(71, 85, 105, ${lineAlpha * 0.8})`
            ctx.lineWidth = particles[i].isAccent || particles[j].isAccent ? 1.1 : 0.75
            ctx.stroke()
          }
        }
      }

      // 3. Draw dynamic interactive laser connection to cursor
      if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          const mdx = p.x - mouse.x
          const mdy = p.y - mouse.y
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

          if (mDist < mouse.radius) {
            const lineAlpha = (1 - mDist / mouse.radius) * 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = p.isAccent
              ? `rgba(220, 38, 38, ${lineAlpha})`
              : `rgba(15, 23, 42, ${lineAlpha * 0.75})`
            ctx.lineWidth = 1.3
            ctx.stroke()
          }
        }

        // Mouse focal pulsing ring
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(220, 38, 38, 0.8)"
        ctx.fill()
      }

      // 4. Draw and update each particle node
      particles.forEach((p) => {
        p.pulseVal += p.pulseSpeed
        const pulse = Math.sin(p.pulseVal) * 0.75

        p.x += p.vx
        p.y += p.vy

        // Viewport boundaries
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // Mouse interactive magnetic push
        if (mouse.isHovered) {
          const mdx = p.x - mouse.x
          const mdy = p.y - mouse.y
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

          if (mDist < mouse.radius && mDist > 0) {
            const force = (1 - mDist / mouse.radius) * 3.2
            p.x += (mdx / mDist) * force
            p.y += (mdy / mDist) * force
            p.alpha = Math.min(p.baseAlpha + 0.3, 1.0)
          } else {
            p.alpha = p.baseAlpha
          }
        }

        // Draw outer glowing halo for accent nodes
        if (p.isAccent) {
          const glowRadius = p.radius + 5 + pulse
          const gradient = ctx.createRadialGradient(p.x, p.y, p.radius * 0.4, p.x, p.y, glowRadius)
          gradient.addColorStop(0, "rgba(220, 38, 38, 0.4)")
          gradient.addColorStop(1, "rgba(220, 38, 38, 0)")
          ctx.beginPath()
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }

        // Draw core node
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(p.radius + pulse * 0.35, 1.5), 0, Math.PI * 2)
        if (p.isAccent) {
          ctx.fillStyle = `rgba(220, 38, 38, ${p.alpha})`
        } else {
          ctx.fillStyle = `rgba(24, 24, 27, ${p.alpha})`
        }
        ctx.fill()

        // Specular highlight on accent nodes
        if (p.isAccent) {
          ctx.beginPath()
          ctx.arc(p.x - p.radius * 0.25, p.y - p.radius * 0.25, p.radius * 0.35, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-90"
      aria-hidden="true"
    />
  )
}
