import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.08em",
      shimmerDuration = "2.5s",
      borderRadius = "12px",
      background = "#DC2626",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] px-6 py-3 whitespace-nowrap text-white font-bold [background:var(--bg)] shadow-crimson-md hover:shadow-crimson-lg",
          "transform-gpu transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[1px]",
            "absolute inset-0 overflow-visible"
          )}
        >
          {/* spark */}
          <div className="animate-shimmer-slide absolute inset-0 aspect-square h-full rounded-none">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>

        {/* Backdrop overlay */}
        <div
          className={cn(
            "absolute inset-[1px] -z-20 [border-radius:calc(var(--radius)-1px)] [background:var(--bg)]"
          )}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>
      </button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"
