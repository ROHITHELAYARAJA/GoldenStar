"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/why-us", label: "Why Us" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#DEDEDE] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Lockup: Official Emblem + Executive Space Grotesk Typography */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 transition-transform group-hover:scale-105 duration-300">
            <Image
              src="/assets/images/branding/logo.png"
              alt="The Golden Star Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-space text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight text-[#111111] leading-tight group-hover:text-black transition-colors">
              The Golden Star
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD84D]" />
              <span className="font-dmsans text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-zinc-500 uppercase leading-none">
                AGRICULTURAL EXPORT
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links with Clean Indicators */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-sm font-dmsans transition-colors flex flex-col items-center group ${
                  isActive
                    ? "text-[#111111] font-bold"
                    : "text-zinc-600 hover:text-[#111111] font-medium"
                }`}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <span className="absolute bottom-0 w-6 h-[2.5px] bg-[#111111] rounded-full" />
                ) : (
                  <span className="absolute bottom-0 w-0 h-[2px] bg-[#FF583E] rounded-full group-hover:w-4 transition-all duration-200" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Modern Executive Actions (WhatsApp Desk + Get a Quote CTA) */}
        <div className="flex items-center gap-3">
          {/* Quick Direct WhatsApp Support */}
          <a
            href="https://wa.me/919345243790"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#DEDEDE] bg-zinc-50 hover:bg-[#FFD84D]/25 hover:border-[#111111] text-[#111111] text-xs font-semibold font-dmsans transition-all shadow-sm"
            title="Direct Export Desk: +91 9345243790"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF583E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF583E]"></span>
            </span>
            <MessageCircle className="w-3.5 h-3.5 text-[#111111]" />
            <span>+91 9345243790</span>
          </a>

          {/* Primary CTA: Get a Quote */}
          <button
            onClick={() => openQuoteModal("Navbar Header")}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-space font-bold bg-[#111111] hover:bg-[#FF583E] text-white transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] duration-200"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#DEDEDE] bg-white text-[#111111] hover:bg-zinc-100 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Clean Modern Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
          <div className="w-4/5 max-w-xs h-full bg-white p-6 flex flex-col justify-between shadow-2xl border-l border-[#DEDEDE] text-[#111111]">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#DEDEDE] mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0">
                    <Image
                      src="/assets/images/branding/logo.png"
                      alt="The Golden Star"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-space text-base font-bold text-[#111111] leading-tight">
                      The Golden Star
                    </span>
                    <span className="font-dmsans text-[8px] font-bold tracking-[0.2em] text-zinc-500 uppercase mt-0.5">
                      IMPORT &amp; EXPORT
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

              {/* Drawer Links */}
              <div className="flex flex-col gap-1.5 font-dmsans">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-zinc-100 text-[#111111] font-bold border-l-4 border-[#111111]"
                          : "text-zinc-600 hover:text-[#111111] hover:bg-zinc-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="space-y-3 pt-6 border-t border-[#DEDEDE] font-dmsans">
              <a
                href="mailto:hameedsahul9978@gmail.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-medium text-zinc-700 bg-zinc-50 border border-[#DEDEDE] hover:bg-zinc-100 transition-colors"
              >
                <span>hameedsahul9978@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919345243790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold text-[#111111] bg-[#FFD84D] hover:bg-[#ffd230] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +91 9345243790</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  openQuoteModal("Mobile Drawer");
                }}
                className="w-full py-3 rounded-full text-xs font-bold bg-[#111111] hover:bg-[#FF583E] text-white transition-all font-space shadow-md"
              >
                Request Export Quote →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
