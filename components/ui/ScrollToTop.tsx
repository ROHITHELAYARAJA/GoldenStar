"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111]/90 backdrop-blur-md text-white shadow-lg border border-[#DEDEDE]/30 hover:bg-[#FF583E] hover:border-[#FF583E] hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="h-4 w-4 text-[#FFD84D]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
