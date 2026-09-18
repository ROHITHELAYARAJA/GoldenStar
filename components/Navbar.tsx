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
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3 bg-transparent pointer-events-none">
      {/* 🌟 Floating Rounded Pill Navbar (Matching Shipyon Reference Layout) */}
      <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-full border border-zinc-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.06)] px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4 pointer-events-auto transition-all">
        {/* Left: Brand Emblem + Typography (Professional Corporate Export Firm) */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
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
            <span className="font-space text-sm sm:text-base lg:text-lg font-bold tracking-tight text-[#111111] leading-tight group-hover:text-[#FB6C00] transition-colors">
              THE GOLDEN STAR
            </span>
            <span className="font-space text-[8px] sm:text-[9px] uppercase font-bold tracking-[0.16em] text-[#FB6C00] mt-0.5">
              IMPORT &amp; EXPORT COMPANY
            </span>
          </div>
        </Link>

        {/* Right: Clean Navigation Links with Pill Active State (Shipyon Style) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-dmsans transition-all duration-200 ${
                  isActive
                    ? "bg-[#E8F5E9] text-[#1B5E20] font-bold shadow-2xs"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 font-medium"
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
          className="p-2 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 hover:text-[#111111] hover:bg-zinc-100 md:hidden transition-colors"
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
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#DEDEDE]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#DEDEDE] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-10 w-10 shrink-0">
                    <Image
                      src="/assets/images/branding/logo.png"
                      alt="The Golden Star"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-space text-base font-bold tracking-tight text-[#111111] leading-tight">
                      THE GOLDEN STAR
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
                          ? "bg-[#E8F5E9] text-[#1B5E20] font-bold"
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
