"use client";

import React, { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatLocale?: boolean;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  prefix = "",
  suffix = "",
  className = "",
  formatLocale = true,
}) => {
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    damping: 28,
    stiffness: 160,
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  useEffect(() => {
    return springVal.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest);
        const formatted = formatLocale
          ? rounded.toLocaleString("en-IN")
          : rounded.toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springVal, prefix, suffix, formatLocale]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatLocale ? value.toLocaleString("en-IN") : value}
      {suffix}
    </span>
  );
};
