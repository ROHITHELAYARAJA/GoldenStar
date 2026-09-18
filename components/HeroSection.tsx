"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  ArrowRight,
  ShieldCheck,
  Ship,
  Award,
  PhoneCall,
  CheckCircle2,
  Layers,
} from "lucide-react";
import gsap from "gsap";
import GetStartedButton from "@/components/ui/get-started-button";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx: gsap.Context | null = null;
    try {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-kicker-pill", {
          opacity: 0,
          y: -20,
          duration: 0.7,
        })
          .from(
            ".hero-title-main",
            {
              opacity: 0,
              y: 35,
              duration: 0.9,
            },
            "-=0.4"
          )
          .from(
            ".hero-description-text",
            {
              opacity: 0,
              y: 20,
              duration: 0.7,
            },
            "-=0.5"
          )
          .from(
            ".hero-buttons-group",
            {
              opacity: 0,
              y: 20,
              duration: 0.6,
            },
            "-=0.4"
          )
          .from(
            ".hero-stats-strip",
            {
              opacity: 0,
              y: 15,
              duration: 0.6,
            },
            "-=0.3"
          )
          .from(
            ".hero-visual-frame",
            {
              opacity: 0,
              scale: 0.95,
              x: 30,
              duration: 1,
              ease: "expo.out",
            },
            "-=0.8"
          )
          .from(
            ".hero-float-badge-top",
            {
              opacity: 0,
              y: -15,
              scale: 0.9,
              duration: 0.6,
            },
            "-=0.4"
          )
          .from(
            ".hero-float-badge-bottom",
            {
              opacity: 0,
              y: 20,
              scale: 0.9,
              duration: 0.6,
            },
            "-=0.4"
          );

        // Continuous smooth gentle float animation
        gsap.to(".hero-float-badge-top", {
          y: -6,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".hero-float-badge-bottom", {
          y: -8,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.3,
        });
      }, containerRef.current);
    } catch (err) {
      console.warn("GSAP hero initialization notice:", err);
    }

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white text-[#111111] overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-zinc-100"
    >
      {/* 🌟 Professional Ambient Warm Illumination on Pure White Canvas */}
      {/* Soft creamy gold glow at top-right (#FFDD9C) */}
      <div
        className="absolute top-0 right-10 w-[550px] h-[550px] rounded-full pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 221, 156, 0.28) 0%, rgba(249, 182, 55, 0.08) 45%, transparent 70%)",
        }}
      />
      {/* Delicate saffron glow at bottom-left (#FB6C00) */}
      <div
        className="absolute -bottom-20 -left-10 w-[480px] h-[480px] rounded-full pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 108, 0, 0.08) 0%, rgba(255, 221, 156, 0.12) 50%, transparent 70%)",
        }}
      />
      {/* Gentle flame accent hint (#E73F1E) */}
      <div
        className="absolute top-1/3 right-1/3 w-[360px] h-[360px] rounded-full pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(231, 63, 30, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT COLUMN: Editorial Typography & High-Conversion CTAs
          ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker Pill: Soft Creamy Gold (#FFDD9C) with Golden Border (#F9B637) & Coral Text (#E73F1E) */}
            <div className="hero-kicker-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFDD9C]/40 border border-[#F9B637]/50 shadow-xs mb-6 sm:mb-8 self-start">
              <span className="text-xs sm:text-sm font-space font-bold uppercase tracking-[0.16em] text-[#E73F1E]">
                GLOBAL AGRICULTURAL EXPORT
              </span>
              <span className="text-[#F9B637] font-bold">/</span>
              <span className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-zinc-700">
                THE GOLDEN STAR
              </span>
            </div>

            {/* Main Headline: Clean White Background with Specified Gradient Palette */}
            <h1 className="hero-title-main font-outfit text-3xl sm:text-5xl lg:text-[64px] xl:text-[72px] font-black text-[#111111] leading-[1.08] tracking-tight mb-5 sm:mb-6">
              From the Finest Farms <br />
              <span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #E73F1E 0%, #FB6C00 50%, #F9B637 100%)",
                }}
              >
                to the World
              </span>
            </h1>

            {/* Tagline & Corporate Mission Description */}
            <p className="hero-description-text font-dmsans text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              <strong className="text-zinc-900 font-semibold">
                Premium agricultural products, sourced with care and delivered across borders.
              </strong>{" "}
              Direct farm procurement of fresh fruits, quality vegetables, and authentic Indian
              spices from South India&apos;s Cauvery Delta, backed by refrigerated cold-chain
              shipping and guaranteed port clearance.
            </p>

            {/* Action Buttons: Primary Flame Gradient (#E73F1E -> #FB6C00) & Secondary White/Gold Pill */}
            <div className="hero-buttons-group flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              {/* Primary Action Button: GetStartedButton with Dynamic Cursor Tracking in Hero Palette */}
              <GetStartedButton
                label="REQUEST FAST QUOTE"
                onClick={() => openQuoteModal("Hero Primary Quote")}
                className="bg-gradient-to-r from-[#E73F1E] to-[#FB6C00] text-white hover:border-[#FB6C00] hover:text-[#111111] font-space font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_28px_-6px_rgba(231,63,30,0.42)] hover:shadow-[0_18px_36px_-6px_rgba(231,63,30,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 justify-center"
              />

              {/* Secondary Action Button (Exact text from Golden Star Company .md) */}
              <Link
                href="/about"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white hover:bg-[#FFDD9C]/20 text-[#111111] border-2 border-[#F9B637] hover:border-[#FB6C00] font-space font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>LEARN ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FB6C00]" />
              </Link>

              {/* Quick WhatsApp / Direct Trade Desk Indicator */}
              <a
                href="https://wa.me/919443389648?text=Hello%20The%20Golden%20Star,%20I%20would%20like%20to%20inquire%20about%20agricultural%20exports."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-space font-semibold text-zinc-600 hover:text-[#E73F1E] transition-colors py-2 px-3 rounded-lg hover:bg-zinc-50"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FB6C00]" />
                <span>Trade Desk: +91 94433 89648</span>
              </a>
            </div>

            {/* Enterprise Trust Stats Strip (Zero Dots) */}
            <div className="hero-stats-strip pt-5 sm:pt-6 border-t border-zinc-200 grid grid-cols-3 gap-2 sm:gap-6">
              <div>
                <div
                  className="text-xl sm:text-2xl lg:text-3xl font-black font-space bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #E73F1E, #FB6C00)",
                  }}
                >
                  100%
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-zinc-900 font-dmsans leading-tight mt-0.5">
                  Direct Farm Sourcing
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-zinc-500 font-dmsans mt-0.5">
                  APEDA &amp; Spices Board
                </div>
              </div>

              <div>
                <div
                  className="text-xl sm:text-2xl lg:text-3xl font-black font-space bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #FB6C00, #F9B637)",
                  }}
                >
                  15+
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-zinc-900 font-dmsans leading-tight mt-0.5">
                  Global Sea Ports
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-zinc-500 font-dmsans mt-0.5">
                  Middle East &amp; SE Asia
                </div>
              </div>

              <div>
                <div
                  className="text-xl sm:text-2xl lg:text-3xl font-black font-space bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #F9B637, #FB6C00)",
                  }}
                >
                  0
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-zinc-900 font-dmsans leading-tight mt-0.5">
                  Intermediaries
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-zinc-500 font-dmsans mt-0.5">
                  Farmer to Port Direct
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Authentic Ocean Cargo Vessel Showcase (Single Hero Image)
          ========================================================================= */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Main Fluid Visual Showcase */}
            <div className="hero-visual-frame relative w-full rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(251,108,0,0.18),0_10px_25px_-5px_rgba(0,0,0,0.06)] border-2 border-[#F9B637]/40 bg-zinc-50 group">
              <div className="relative h-[250px] sm:h-[360px] md:h-[440px] lg:h-[500px] w-full">
                <Image
                  src="/assets/images/hero/hero-ocean-cargo-ship.png"
                  alt="The Golden Star - International Maritime Container Cargo Vessel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                />

                {/* Subtle bottom vignette gradient for badge legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Top Floating Badge: APEDA & Spices Board 100% Inspected */}
                <div className="hero-float-badge-top absolute top-3 right-3 sm:top-4 sm:right-4 z-20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#F9B637] shadow-md flex items-center gap-1.5 sm:gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FB6C00]" />
                  <span className="text-[10px] sm:text-xs font-space font-bold uppercase tracking-wider text-[#111111]">
                    100% Port Clearance &amp; APEDA
                  </span>
                </div>

                {/* Bottom Floating Pill: Thanjavur Cauvery Delta Hub */}
                <div className="hero-float-badge-bottom absolute bottom-3 left-3 right-3 sm:right-auto z-20 bg-white/95 backdrop-blur-md border border-[#F9B637]/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:max-w-xs">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Ship className="w-3.5 h-3.5 text-[#E73F1E] shrink-0" />
                    <span className="text-[9.5px] sm:text-[11px] font-space font-bold uppercase tracking-wider text-[#FB6C00]">
                      Cold-Chain Reefer Logistics
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-dmsans font-bold text-[#111111] leading-snug">
                    Direct from Thanjavur, Tamil Nadu to Global Seaports
                  </p>
                  <div className="hidden sm:flex mt-1.5 items-center gap-1.5 text-[10px] font-space font-medium text-zinc-500">
                    <CheckCircle2 className="w-3 h-3 text-[#F9B637]" />
                    <span>APEDA / SPICES BOARD / FSSAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
