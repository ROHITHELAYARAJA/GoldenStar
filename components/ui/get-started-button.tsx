"use client";

import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";

function shortestAngle(from: number, to: number) {
  const diff = ((to - from + 540) % 360) - 180;
  return from + diff;
}

export interface GetStartedButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function GetStartedButton({
  label = "Get started",
  onClick,
  className,
}: GetStartedButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [angle, setAngle] = useState(-45);
  const lastAngleRef = useRef(-45);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rawAngle =
      Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    const nextAngle = shortestAngle(lastAngleRef.current, rawAngle);
    lastAngleRef.current = nextAngle;
    setAngle(nextAngle);
  };

  const resetAngle = () => {
    const nextAngle = shortestAngle(lastAngleRef.current, -45);
    lastAngleRef.current = nextAngle;
    setAngle(nextAngle);
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetAngle}
      aria-label={label}
      className={cn(
        "group relative inline-flex h-14 items-center justify-center gap-2",
        "overflow-hidden rounded-full border-2 border-transparent px-7",
        "bg-zinc-900 text-zinc-50 text-sm font-medium cursor-pointer",
        "transition-colors duration-300",
        "hover:border-zinc-900 hover:text-zinc-900",
        "focus-visible:border-zinc-900 focus-visible:text-zinc-900",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2",
        "dark:bg-zinc-50 dark:text-zinc-900",
        "dark:hover:border-zinc-50 dark:hover:text-zinc-50",
        "dark:focus-visible:border-zinc-50 dark:focus-visible:text-zinc-50",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute left-1/2 top-1/2 h-5 w-5",
          "-translate-x-1/2 -translate-y-1/2 scale-0 rounded-full",
          "bg-zinc-50 dark:bg-zinc-900",
          "transition-transform duration-500 ease-out",
          "group-hover:scale-[40] group-focus-visible:scale-[40]",
        ].join(" ")}
      />
      <span className="relative z-10">{label}</span>
      <svg
        aria-hidden="true"
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 transition-transform duration-150 ease-linear"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}
