"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/why-us", label: "Why Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 bg-transparent pointer-events-none">
      {/* 🌟 Compact Floating Rounded Pill Navbar (Decreased Slender Height + Curvy Finish) */}
      <div className="max-w-[1520px] 2xl:max-w-[1600px] w-full mx-auto bg-white/95 backdrop-blur-md rounded-full border-2 border-[#F9B637]/70 ring-1 ring-[#FFD84D]/40 shadow-[0_6px_25px_rgba(249,182,55,0.14),0_2px_6px_rgba(0,0,0,0.03)] px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between gap-3 pointer-events-auto transition-all">
        {/* Left: Brand Emblem + Cinzel Typography (Compact & Proportional) */}
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
          <div className="relative h-9 w-9 sm:h-11 sm:w-11 shrink-0 transition-transform group-hover:scale-105 duration-300">
            <Image
              src="/assets/images/branding/logo.png"
              alt="The Golden Star Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-cinzel text-base sm:text-lg lg:text-xl font-bold tracking-[0.03em] text-[#111111] leading-none group-hover:text-[#FB6C00] transition-colors">
              The Golden Star
            </span>
            <span className="font-space text-[7.5px] sm:text-[8.5px] uppercase font-bold tracking-[0.16em] text-[#FB6C00] mt-0.5 leading-none">
              IMPORT &amp; EXPORT COMPANY
            </span>
          </div>
        </Link>

        {/* Right: Clean Navigation Links with Compact Golden Pill Active State */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-dmsans transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#FFDD9C] via-[#FFD84D] to-[#F9B637] text-[#111111] font-bold shadow-xs border border-[#F9B637]"
                    : "text-zinc-600 hover:text-[#111111] hover:bg-[#FFDD9C]/25 font-medium"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Toggle Button (Rounded Box matching Shipyon style) */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 flex items-center justify-center md:hidden transition-colors shadow-2xs"
          aria-label={isMobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        >
          {isMobileOpen ? <X className="w-5 h-5 text-[#111111]" /> : <Menu className="w-5 h-5 text-[#111111]" />}
        </button>
      </div>

      {/* 🌟 Floating Rounded Mobile Menu Card (Matching Shipyon reference design) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col pointer-events-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Floating Menu Container */}
          <div className="relative z-10 w-full px-3 sm:px-6 pt-2 pb-4">
            {/* Top Bar inside mobile menu */}
            <div className="bg-white rounded-full border-2 border-[#F9B637]/70 shadow-lg px-4 sm:px-6 py-1.5 flex items-center justify-between gap-3 mb-2">
              <Link
                href="/"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="relative h-9 w-9 shrink-0">
                  <Image
                    src="/assets/images/branding/logo.png"
                    alt="The Golden Star"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-cinzel text-base font-bold tracking-[0.03em] text-[#111111] leading-none">
                    The Golden Star
                  </span>
                  <span className="font-space text-[7.5px] uppercase font-bold tracking-[0.16em] text-[#FB6C00] mt-0.5 leading-none">
                    IMPORT &amp; EXPORT COMPANY
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-9 h-9 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Curvy Floating Card matching Shipyon */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-zinc-100 overflow-hidden space-y-1.5 animate-in fade-in slide-in-from-top-3 duration-200">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-base font-dmsans transition-all ${
                      isActive
                        ? "bg-amber-50/90 text-amber-900 font-bold border border-amber-200/80 shadow-2xs"
                        : "text-zinc-700 hover:text-[#111111] hover:bg-zinc-50 font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-zinc-100 mt-2">
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#FFD84D] via-[#FB6C00] to-[#E73F1E] text-white font-space font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Fast Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
