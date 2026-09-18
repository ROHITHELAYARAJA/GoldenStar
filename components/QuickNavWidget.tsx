"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { ArrowUpRight, ChevronRight, Sparkles, MessageCircle } from "lucide-react";

export default function QuickNavWidget() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPageInfo = () => {
    switch (pathname) {
      case "/services":
        return { num: "02", label: "Services", next: "/products" };
      case "/products":
        return { num: "03", label: "Products", next: "/why-us" };
      case "/why-us":
        return { num: "04", label: "Why Us", next: "/about" };
      case "/about":
        return { num: "05", label: "About Us", next: "/contact" };
      case "/contact":
        return { num: "06", label: "Contact", next: "/" };
      default:
        return { num: "01", label: "Home", next: "/services" };
    }
  };

  const pageInfo = getPageInfo();

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
      {/* Floating WhatsApp Quick Desk Pill */}
      <a
        href="https://wa.me/919345243790"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white backdrop-blur-md border border-[#DEDEDE] shadow-xl text-xs font-semibold font-dmsans hover:border-[#FFD84D] hover:scale-105 transition-all"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#FFD84D]" />
        <span className="hidden md:inline">Founder Desk</span>
      </a>

      {/* Floating Status & Next Page Pill */}
      <Link
        href={pageInfo.next}
        className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111111] backdrop-blur-md border border-[#DEDEDE] shadow-xl text-xs font-semibold text-white hover:border-[#FFD84D] transition-all hover:scale-105 group font-dmsans"
      >
        <span className="text-[10px] font-space font-bold text-[#111111] bg-[#FFD84D] px-2 py-0.5 rounded-full">
          {scrollProgress}%
        </span>
        <span className="text-white font-medium font-space">
          {pageInfo.num} <span className="text-zinc-500">/</span> {pageInfo.label}
        </span>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:text-[#FF583E] transition-all" />
      </Link>
    </div>
  );
}
