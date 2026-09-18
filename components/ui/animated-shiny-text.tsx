import { type CSSProperties, type FC, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedShinyTextProps {
  children: ReactNode
  className?: string
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "bg-gradient-to-r from-zinc-700 via-zinc-200 to-zinc-700 dark:from-zinc-400 dark:via-white dark:to-zinc-400",
        "bg-[length:var(--shiny-width)_100%] bg-no-repeat",
        "animate-shiny-text",
        className
      )}
    >
      {children}
    </span>
  )
}
