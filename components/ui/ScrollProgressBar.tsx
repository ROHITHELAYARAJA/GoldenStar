"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, ChevronRight, ArrowUp } from "lucide-react";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  const [percent, setPercent] = useState<number>(0);
  const [showScrollHUD, setShowScrollHUD] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
      setShowScrollHUD(latest > 0.05);
    });
  }, [scrollYProgress]);

  const navItems = [
    { href: "/", label: "Home", num: "01" },
    { href: "/services", label: "Services", num: "02" },
    { href: "/products", label: "Products", num: "03" },
    { href: "/why-us", label: "Why Us", num: "04" },
    { href: "/about", label: "About", num: "05" },
    { href: "/contact", label: "Contact", num: "06" },
  ];

  const radius = 11;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Fixed Gradient Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD84D] via-[#FF583E] to-[#FFD84D] origin-left z-50 shadow-sm"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Interactive Scroll HUD Capsule (Bottom-Right) */}
      <AnimatePresence>
        {showScrollHUD && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end select-none font-dmsans"
          >
            {/* Quick Navigation Drawer */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="mb-2.5 p-2 rounded-2xl bg-[#111111]/95 backdrop-blur-md border border-zinc-800 shadow-2xl space-y-1 min-w-[180px]"
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-zinc-400 border-b border-zinc-800 flex items-center justify-between font-space">
                    <span>Explore Pages</span>
                    <Compass className="h-3.5 w-3.5 text-[#FFD84D]" />
                  </div>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsExpanded(false)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        pathname === item.href
                          ? "bg-[#FF583E] text-white font-bold shadow-sm"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-800/80"
                      }`}
                    >
                      <span className="font-space text-[10px] opacity-75">{item.num}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      scrollToTop();
                      setIsExpanded(false);
                    }}
                    className="w-full mt-1 pt-1 border-t border-zinc-800 flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-bold text-[#FFD84D] hover:text-white"
                  >
                    <ArrowUp className="w-3 h-3" />
                    <span>Back to Top</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Interactive Floating Capsule */}
            <div
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 px-3.5 py-2 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#DEDEDE]/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white hover:border-[#FFD84D]/60 hover:shadow-[0_0_24px_rgba(255,216,77,0.2)] transition-all duration-200 cursor-pointer group hover:scale-[1.03] active:scale-[0.98]"
            >
              {/* Circular SVG Micro Progress Meter */}
              <div className="relative flex items-center justify-center h-6 w-6">
                <svg className="h-6 w-6 -rotate-90" viewBox="0 0 26 26">
                  <circle
                    cx="13"
                    cy="13"
                    r={radius}
                    stroke="currentColor"
                    className="text-zinc-800"
                    strokeWidth="2.5"
                    fill="transparent"
                  />
                  <circle
                    cx="13"
                    cy="13"
                    r={radius}
                    stroke="#FFD84D"
                    className="transition-all duration-150"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <span className="absolute text-[8px] font-bold text-zinc-200 font-space">
                  {percent}%
                </span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 text-xs font-semibold pr-1 font-space">
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  The Golden Star
                </span>
              </div>

              {/* Toggle Arrow */}
              <div className="h-5 w-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-[#FFD84D] transition-colors">
                <ChevronRight className={`h-3 w-3 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
