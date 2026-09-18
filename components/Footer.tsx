"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Globe2,
  Anchor,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="w-full bg-[#FAF8F2] text-[#111111] border-t border-[#DEDEDE] relative overflow-hidden">
      {/* Top Ambient Light Glows matching Logo Warm Gold and Coral */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD84D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FF583E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* =========================================================================
          DESKTOP TOP BANNER (md and above - 100% Unchanged)
      ========================================================================= */}
      <div className="hidden md:block w-full border-b border-[#DEDEDE] bg-[#F4EFE6]/90 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="relative flex items-center justify-center shrink-0">
              <span className="w-8 h-8 rounded-full bg-[#111111] text-[#FFD84D] flex items-center justify-center shadow-xs border border-[#FFD84D]/40">
                <Globe2 className="w-4 h-4 text-[#FFD84D] animate-[spin_12s_linear_infinite]" />
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-space font-bold uppercase tracking-wider bg-[#FFD84D] text-[#111111] border border-[#E8C838] shadow-2xs">
                Active Desk
              </span>
              <p className="font-dmsans text-xs sm:text-sm text-zinc-700 font-medium">
                <strong className="text-[#111111] font-space font-bold">24/7 International Trade Desk:</strong> Direct Farm Procurement across South India / Cold-Chain Reefer Shipping Worldwide
              </p>
            </div>
          </div>
          <button
            onClick={() => openQuoteModal("Footer Top Strip")}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF583E] hover:bg-[#E8492C] text-white font-space font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Request Fast Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFD84D]" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          MOBILE TOP STRIP (< md: Sleek, High-Converting & Compact)
      ========================================================================= */}
      <div className="md:hidden w-full border-b border-[#DEDEDE] bg-[#F4EFE6]/95 px-4 py-3.5 relative z-10">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1B5E20] animate-pulse" />
            <span className="text-[11px] font-space font-bold uppercase tracking-wider text-[#111111]">
              24/7 Global Trade Desk
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-space font-bold uppercase bg-[#FFD84D] text-[#111111] border border-[#E8C838]">
            Active
          </span>
        </div>
        <button
          onClick={() => openQuoteModal("Mobile Footer Quick Quote")}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#FF583E] text-white font-space font-bold text-xs shadow-xs active:scale-98 transition-all"
        >
          <span>Request Fast Quote</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FFD84D]" />
        </button>
      </div>

      {/* =========================================================================
          DESKTOP MAIN SECTION (md and above - 100% Unchanged)
      ========================================================================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#DEDEDE]">
          {/* Column 1: Brand & Executive Founder Desk (5 cols) */}
          <div className="lg:col-span-5 space-y-5 pr-0 lg:pr-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/assets/images/branding/logo.png"
                  alt="The Golden Star Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-space text-xl sm:text-2xl font-bold tracking-tight text-[#111111] leading-tight">
                  The Golden Star Company
                </span>
                <div className="mt-1.5 flex items-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-[10px] font-space font-bold uppercase tracking-[0.16em] text-[#111111] bg-[#FFD84D]/30 border border-[#FFD84D]">
                    Import &amp; Export
                  </span>
                </div>
              </div>
            </Link>

            <p className="font-dmsans text-sm text-zinc-700 font-medium italic border-l-2 border-[#FF583E] pl-3 py-0.5">
              &ldquo;Quality that travels. Trust that stays.&rdquo;
            </p>

            <p className="font-dmsans text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Connecting South India&apos;s finest agricultural harvest to global seaports. Sourcing with care, delivering with purpose.
            </p>

            {/* Direct Contact Card in Pure Crisp White with Gold Accents */}
            <div className="p-5 rounded-2xl bg-white border border-[#DEDEDE] shadow-sm space-y-3 font-dmsans text-xs sm:text-sm text-zinc-700">
              <div className="text-xs font-space font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                <span>Executive Export Desk</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-[#FF583E] mt-0.5" />
                <span className="text-zinc-600 leading-relaxed">
                  Building No./Flat No. 876, Pudukkottai ullur main road, Naduvikkadu, Adiramapattinam, Thanjavur District, Tamil Nadu 614701, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-[#111111]" />
                <a
                  href="tel:+919345243790"
                  className="hover:text-[#FF583E] transition-colors font-medium text-[#111111]"
                >
                  +91 9345243790 <span className="text-xs text-zinc-500">(Founder Sahul Hameed)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-[#FF583E]" />
                <a
                  href="mailto:hameedsahul9978@gmail.com"
                  className="hover:text-[#111111] transition-colors font-medium text-zinc-700"
                >
                  hameedsahul9978@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-space text-xs font-bold tracking-[0.2em] text-[#111111] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 font-dmsans">
              <li>
                <Link href="/" className="hover:text-[#FF583E] transition-colors flex items-center font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF583E] transition-colors flex items-center font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#FF583E] transition-colors flex items-center font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-[#FF583E] transition-colors flex items-center font-medium">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF583E] transition-colors flex items-center font-medium">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Corridors & Seaports (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-space text-xs font-bold tracking-[0.2em] text-[#111111] uppercase">
              Trade Corridors
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 font-dmsans">
              <li className="flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span className="font-medium">UAE / Jebel Ali</span>
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span className="font-medium">Port of Singapore</span>
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span className="font-medium">Malaysia / Port Klang</span>
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span className="font-medium">Saudi / Dammam</span>
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span className="font-medium">UK &amp; European Ports</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-space text-xs font-bold tracking-[0.2em] text-[#111111] uppercase">
              Trust &amp; Compliance
            </h4>
            <div className="space-y-2 font-dmsans text-xs text-zinc-700">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#DEDEDE] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#FF583E] shrink-0" />
                <span className="font-medium text-zinc-800">100% Phytosanitary Inspected</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#DEDEDE] shadow-xs">
                <Globe2 className="w-4 h-4 text-[#111111] shrink-0" />
                <span className="font-medium text-zinc-800">APEDA &amp; Spices Board Adherent</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#DEDEDE] shadow-xs">
                <Clock className="w-4 h-4 text-[#FF583E] shrink-0" />
                <span className="font-medium text-zinc-800">Continuous Reefer Cold-Chain</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/919345243790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#FFD84D] hover:bg-[#ffe066] text-[#111111] font-space font-bold text-xs transition-all shadow-sm hover:shadow-md border border-[#E8C838] hover:scale-[1.02] active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Bar: Copyright & Navigation */}
        <div className="pt-8 flex flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-dmsans">
          <div>
            &copy; 2026 The Golden Star. All rights reserved. / Registered Agricultural Export Enterprise, India.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#FF583E] transition-colors">
              Terms of Trade
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/privacy" className="hover:text-[#FF583E] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/contact" className="hover:text-[#FF583E] transition-colors">
              Port Clearance Desk
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE DEDICATED FOOTER (< md: Balanced, Compact, Beautiful)
      ========================================================================= */}
      <div className="md:hidden px-4 py-8 relative z-10">
        {/* Mobile Brand Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="relative h-11 w-11 shrink-0">
            <Image
              src="/assets/images/branding/logo.png"
              alt="The Golden Star"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-space text-base font-bold tracking-tight text-[#111111] block leading-tight">
              THE GOLDEN STAR
            </span>
            <span className="font-space text-[8.5px] uppercase font-bold tracking-[0.16em] text-[#FB6C00] block mt-0.5">
              IMPORT &amp; EXPORT COMPANY
            </span>
          </div>
        </div>

        <p className="font-dmsans text-xs text-zinc-600 leading-relaxed mb-4 italic border-l-2 border-[#FF583E] pl-2.5 py-0.5">
          &ldquo;Quality that travels. Trust that stays.&rdquo;
        </p>

        {/* Mobile Quick Tap Action Buttons: Call & WhatsApp */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <a
            href="tel:+919345243790"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-[#DEDEDE] text-xs font-space font-bold text-[#111111] shadow-xs active:bg-zinc-50"
          >
            <Phone className="w-3.5 h-3.5 text-[#FB6C00]" />
            <span>Call Desk</span>
          </a>
          <a
            href="https://wa.me/919345243790"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-space font-bold text-[#128C7E] shadow-xs active:bg-[#25D366]/20"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile 2-Column Links Grid */}
        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white border border-[#DEDEDE] shadow-xs mb-5">
          <div>
            <h5 className="font-space text-[10.5px] font-bold tracking-[0.14em] text-[#111111] uppercase mb-2.5">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs text-zinc-600 font-dmsans font-medium">
              <li><Link href="/" className="hover:text-[#FF583E]">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#FF583E]">Services</Link></li>
              <li><Link href="/products" className="hover:text-[#FF583E]">Products</Link></li>
              <li><Link href="/why-us" className="hover:text-[#FF583E]">Why Us</Link></li>
              <li><Link href="/about" className="hover:text-[#FF583E]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF583E]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-space text-[10.5px] font-bold tracking-[0.14em] text-[#111111] uppercase mb-2.5">
              Trade Ports
            </h5>
            <ul className="space-y-2 text-xs text-zinc-600 font-dmsans font-medium">
              <li>UAE / Jebel Ali</li>
              <li>Port of Singapore</li>
              <li>Port Klang</li>
              <li>Saudi / Dammam</li>
              <li>European Ports</li>
            </ul>
          </div>
        </div>

        {/* Mobile Compliance Badges Strip */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="p-2 rounded-xl bg-white border border-[#DEDEDE] text-center shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#FB6C00] mx-auto mb-1" />
            <span className="text-[9px] font-space font-bold text-zinc-800 block leading-tight">Phytosanitary</span>
          </div>
          <div className="p-2 rounded-xl bg-white border border-[#DEDEDE] text-center shadow-xs">
            <Globe2 className="w-4 h-4 text-[#111111] mx-auto mb-1" />
            <span className="text-[9px] font-space font-bold text-zinc-800 block leading-tight">APEDA Board</span>
          </div>
          <div className="p-2 rounded-xl bg-white border border-[#DEDEDE] text-center shadow-xs">
            <Clock className="w-4 h-4 text-[#E73F1E] mx-auto mb-1" />
            <span className="text-[9px] font-space font-bold text-zinc-800 block leading-tight">Cold-Chain</span>
          </div>
        </div>

        {/* Mobile Office Address */}
        <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#DEDEDE] text-xs font-dmsans text-zinc-600 mb-5 flex items-start gap-2">
          <MapPin className="w-4 h-4 text-[#FF583E] shrink-0 mt-0.5" />
          <span className="text-[11px] leading-relaxed">
            Naduvikkadu, Adiramapattinam, Thanjavur District, Tamil Nadu 614701, India
          </span>
        </div>

        {/* Mobile Bottom Bar: Copyright & Links */}
        <div className="pt-4 border-t border-[#DEDEDE] text-center text-[11px] text-zinc-500 font-dmsans space-y-2">
          <div>&copy; 2026 The Golden Star. All rights reserved.</div>
          <div className="flex justify-center items-center gap-3 text-zinc-600">
            <Link href="/privacy" className="hover:text-[#FF583E]">Terms of Trade</Link>
            <span>&middot;</span>
            <Link href="/privacy" className="hover:text-[#FF583E]">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-[#FF583E]">Port Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
