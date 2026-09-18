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
    <footer className="w-full bg-[#111111] text-white border-t border-[#DEDEDE]/20 relative overflow-hidden">
      {/* Top Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD84D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FF583E]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner: Global Corridors & Quick Quote */}
      <div className="w-full border-b border-zinc-800 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF583E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF583E]"></span>
            </span>
            <p className="font-dmsans text-xs sm:text-sm text-zinc-300">
              <strong className="text-white font-space font-bold">24/7 International Desk:</strong> Direct Farm Procurement across South India &bull; Cold-Chain Reefer Shipping Worldwide
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Footer Top Strip")}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF583E] hover:bg-[#E8492C] text-white font-space font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-105"
          >
            <span>Request Fast Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Multi-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800">
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
                <span className="font-space text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                  The Golden Star
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD84D]" />
                  <span className="font-dmsans text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFD84D] leading-none">
                    AGRICULTURAL IMPORT &amp; EXPORT
                  </span>
                </div>
              </div>
            </Link>

            <p className="font-dmsans text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Connecting South India&apos;s finest agricultural harvest to global seaports. High-volume merchant export of fresh fruits, farm vegetables, and authentic spices with certified cold-chain reliability.
            </p>

            {/* Direct Contact Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-zinc-800 space-y-3 font-dmsans text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-[#FFD84D] mt-0.5" />
                <span className="text-zinc-300 leading-relaxed">
                  Building No./Flat No. 876, Pudukkottai ullur main road, Naduvikkadu, Adiramapattinam, Thanjavur District, Tamil Nadu 614701, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-[#FFD84D]" />
                <a
                  href="tel:+919345243790"
                  className="hover:text-white transition-colors font-medium"
                >
                  +91 9345243790 <span className="text-xs text-zinc-500">(Founder Sahul Hameed)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-[#FFD84D]" />
                <a
                  href="mailto:hameedsahul9978@gmail.com"
                  className="hover:text-white transition-colors font-medium"
                >
                  hameedsahul9978@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Export Commodities (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-space text-xs font-bold tracking-[0.2em] text-[#FFD84D] uppercase">
              Commodities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-dmsans">
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&bull;</span>
                  <span>Fresh Fruits (Mango, Banana)</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&bull;</span>
                  <span>Vegetables (Onion, Potato)</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&bull;</span>
                  <span>Authentic Spices (Pepper, Cardamom)</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&bull;</span>
                  <span>Turmeric &amp; Cumin</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">&bull;</span>
                  <span>Custom Grading &amp; Packing</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Corridors & Seaports (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-space text-xs font-bold tracking-[0.2em] text-[#FFD84D] uppercase">
              Trade Corridors
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-dmsans">
              <li className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span>UAE / Jebel Ali Port</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span>Port of Singapore</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span>Malaysia / Port Klang</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span>Saudi Arabia / Dammam</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-[#FF583E] shrink-0" />
                <span>UK &amp; European Ports</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-space text-xs font-bold tracking-[0.2em] text-[#FFD84D] uppercase">
              Trust &amp; Compliance
            </h4>
            <div className="space-y-2.5 font-dmsans text-xs text-zinc-400">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-[#FFD84D] shrink-0" />
                <span>100% Phytosanitary Inspected</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-zinc-800">
                <Globe2 className="w-4 h-4 text-[#FF583E] shrink-0" />
                <span>APEDA &amp; Spices Board Adherent</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-zinc-800">
                <Clock className="w-4 h-4 text-[#FFD84D] shrink-0" />
                <span>Continuous Reefer Cold-Chain</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/919345243790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#FFD84D] hover:bg-[#ffd230] text-[#111111] font-space font-bold text-xs transition-all shadow-md hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-dmsans">
          <div>
            &copy; 2026 The Golden Star. All rights reserved. &bull; Registered Agricultural Export Enterprise, India.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Terms of Trade
            </Link>
            <span>&bull;</span>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Port Clearance Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

