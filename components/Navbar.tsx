"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/why-us", label: "Why Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 py-3.5 sm:py-4 bg-transparent pointer-events-none">
      {/* 🌟 Floating Rounded Pill Navbar (Wide Screen Coverage + Golden Star Border Combo) */}
      <div className="max-w-[1520px] 2xl:max-w-[1600px] w-full mx-auto bg-white/95 backdrop-blur-md rounded-full border-2 border-[#F9B637]/75 ring-1 ring-[#FFD84D]/50 shadow-[0_8px_30px_rgba(249,182,55,0.16),0_2px_8px_rgba(0,0,0,0.04)] px-5 sm:px-8 lg:px-10 py-3 sm:py-4 flex items-center justify-between gap-4 pointer-events-auto transition-all">
        {/* Left: Brand Emblem + Distinctive Cinzel Corporate Typography */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
          <div className="relative h-13 w-13 sm:h-16 sm:w-16 shrink-0 transition-transform group-hover:scale-105 duration-300">
            <Image
              src="/assets/images/branding/logo.png"
              alt="The Golden Star Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-cinzel text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.04em] text-[#111111] leading-tight group-hover:text-[#FB6C00] transition-colors">
              The Golden Star
            </span>
            <span className="font-space text-[8.5px] sm:text-[10px] uppercase font-bold tracking-[0.18em] text-[#FB6C00] mt-0.5">
              IMPORT &amp; EXPORT COMPANY
            </span>
          </div>
        </Link>

        {/* Right: Clean Navigation Links with Golden Combo Active State */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-dmsans transition-all duration-200 ${
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

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2.5 rounded-full border border-[#F9B637]/60 bg-[#FFDD9C]/20 text-zinc-800 hover:text-[#111111] hover:bg-[#FFDD9C]/40 md:hidden transition-colors"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Slide-Over Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end pointer-events-auto">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l-2 border-[#F9B637]/60">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DEDEDE] mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-13 w-13 shrink-0">
                    <Image
                      src="/assets/images/branding/logo.png"
                      alt="The Golden Star"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-cinzel text-lg font-bold tracking-[0.04em] text-[#111111] leading-tight">
                      The Golden Star
                    </span>
                    <span className="font-space text-[8.5px] uppercase font-bold tracking-[0.16em] text-[#FB6C00] mt-0.5">
                      IMPORT &amp; EXPORT COMPANY
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-zinc-400 hover:text-[#111111] rounded-full hover:bg-zinc-100 transition-colors"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-dmsans transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-[#FFDD9C] via-[#FFD84D] to-[#F9B637] text-[#111111] font-bold border border-[#F9B637]"
                          : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 font-medium"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DEDEDE] text-center text-xs text-zinc-500 font-dmsans">
              &copy; 2026 The Golden Star
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
