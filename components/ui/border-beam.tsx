import React from "react"
import { motion, type MotionStyle, type Transition } from "framer-motion"
import { cn } from "@/lib/utils"

interface BorderBeamProps {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  transition?: Transition
  className?: string
  style?: React.CSSProperties
  reverse?: boolean
  initialOffset?: number
  borderWidth?: number
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 120,
  delay = 0,
  duration = 6,
  colorFrom = "#DC2626",
  colorTo = "#EF4444",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
}) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
      style={{
        padding: `${borderWidth}px`,
      }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square opacity-90 blur-[1px]",
          className
        )}
        style={
          {
            width: size,
            height: size,
            background: `radial-gradient(circle, ${colorFrom} 0%, ${colorTo} 40%, transparent 80%)`,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  )
}
