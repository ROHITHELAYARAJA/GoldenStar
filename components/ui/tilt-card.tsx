import React, { useRef, useState } from "react"

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  scale?: number
  glareEnable?: boolean
}

/**
 * Interactive Touch & Hover Card
 * - While touching / pressing: Shows an active crimson highlight color and subtle glow
 * - On release / lift: Highlight color immediately disappears
 * - 100% Crisp typography with zero blurriness
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  glareEnable = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xPct = Math.round(((e.clientX - rect.left) / rect.width) * 100)
    const yPct = Math.round(((e.clientY - rect.top) / rect.height) * 100)
    setMousePos({ x: xPct, y: yPct })
  }

  // Touch and Press Handlers for instant Color on Touch and immediate removal on Release
  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setIsTouched(false)
  }

  const handleTouchCancel = () => {
    setIsTouched(false)
  }

  const handleMouseDown = () => {
    setIsTouched(true)
  }

  const handleMouseUp = () => {
    setIsTouched(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsTouched(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`relative rounded-3xl transition-all duration-150 ease-out select-none cursor-pointer ${
        isTouched
          ? "ring-2 ring-accent-crimson border-accent-crimson shadow-crimson-md scale-[0.985]"
          : isHovered
          ? "-translate-y-1"
          : "translate-y-0"
      } ${className}`}
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
      }}
      {...props}
    >
      <div
        className={`h-full w-full relative rounded-[inherit] transition-colors duration-150 ${
          isTouched ? "bg-red-50/60" : ""
        }`}
      >
        {children}

        {/* Dynamic Cursor Spotlight Glare Overlay */}
        {glareEnable && (
          <div
            className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200 z-30 ${
              isHovered && !isTouched ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(220, 38, 38, 0.07), transparent 80%)`,
            }}
          />
        )}

        {/* Touch Flash Overlay (Appears when touched, disappears immediately on release) */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-150 z-20 ${
            isTouched ? "opacity-100 bg-red-500/10" : "opacity-0"
          }`}
        />
      </div>
    </div>
  )
}
