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
  Globe2,
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

        tl.from(".hero-word", {
          opacity: 0,
          y: 20,
          duration: 0.55,
          stagger: 0.12,
          ease: "power2.out",
        })
          .from(
            ".hero-description-text",
            {
              opacity: 0,
              y: 20,
              duration: 0.7,
            },
            "-=0.3"
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
            ".hero-floating-stat",
            {
              opacity: 0,
              scale: 0.85,
              y: 20,
              duration: 0.7,
              stagger: 0.12,
              ease: "back.out(1.5)",
            },
            "-=0.5"
          );
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
      className="relative w-full bg-white text-[#111111] overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 border-b border-zinc-100"
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
            {/* Main Headline: Clean White Background with Urbanist Font & Smooth Sequential Word Animation */}
            <h1 className="hero-title-main font-urbanist text-3xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-extrabold text-[#111111] leading-[1.14] tracking-tight mb-5 sm:mb-6">
              <span className="flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
                <span className="hero-word inline-block">From</span>
                <span className="hero-word inline-block">the</span>
                <span className="hero-word inline-block text-zinc-900">Finest</span>
                <span className="hero-word inline-block">Farms</span>
              </span>
              <span className="flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5 mt-1 sm:mt-1.5">
                <span className="hero-word inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#E73F1E] to-[#FB6C00] font-black">
                  to
                </span>
                <span className="hero-word inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FB6C00] to-[#F9B637] font-black">
                  the
                </span>
                <span className="hero-word inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#F9B637] to-[#E73F1E] font-black">
                  World
                </span>
              </span>
            </h1>

            {/* Tagline & Corporate Mission Description: Open Sans for Maximum Legibility */}
            <p className="hero-description-text font-opensans text-sm sm:text-base lg:text-[17px] text-zinc-600 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              <strong className="text-zinc-900 font-semibold">
                Premium agricultural products, sourced with care and delivered across borders.
              </strong>{" "}
              Direct farm procurement of fresh fruits, quality vegetables, and authentic Indian
              spices from South India&apos;s Cauvery Delta, backed by refrigerated cold-chain
              shipping and guaranteed port clearance.
            </p>

            {/* Action Buttons: 3 Inline Harmonized Boxes with Exact Matching Sizes & No Text Wrap */}
            <div className="hero-buttons-group flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-stretch sm:items-center gap-2.5 sm:gap-3 mb-8 sm:mb-10">
              {/* Box 1: Primary Action Button with Dynamic Cursor Tracking in Hero Palette */}
              <div className="h-12 inline-flex items-center shrink-0">
                <GetStartedButton
                  label="REQUEST FAST QUOTE"
                  onClick={() => openQuoteModal("Hero Primary Quote")}
                  className="h-12 px-5 bg-gradient-to-r from-[#E73F1E] to-[#FB6C00] text-white hover:border-[#FB6C00] hover:text-[#111111] font-urbanist font-bold text-xs tracking-wider uppercase shadow-[0_10px_24px_-4px_rgba(231,63,30,0.42)] hover:shadow-[0_16px_32px_-4px_rgba(231,63,30,0.55)] hover:scale-[1.03] active:scale-95 transition-all duration-200 whitespace-nowrap justify-center"
                />
              </div>

              {/* Box 2: Secondary Action Button in Crisp White & Gold Border */}
              <Link
                href="/about"
                className="h-12 px-5 rounded-full bg-white hover:bg-[#FFDD9C]/20 text-[#111111] border-2 border-[#F9B637] hover:border-[#FB6C00] font-urbanist font-bold text-xs tracking-wider uppercase shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>LEARN ABOUT US</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FB6C00]" />
              </Link>

              {/* Box 3: Direct Trade Desk Inline Pill Container */}
              <a
                href="https://wa.me/919443389648?text=Hello%20The%20Golden%20Star,%20I%20would%20like%20to%20inquire%20about%20agricultural%20exports."
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-4 rounded-full bg-white/95 hover:bg-zinc-50 text-zinc-800 hover:text-[#E73F1E] border border-[#F9B637]/70 hover:border-[#FB6C00] font-urbanist font-semibold text-xs shadow-xs hover:shadow-sm transition-all duration-200 inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#FB6C00] shrink-0" />
                <span>
                  Trade Desk: <strong className="font-bold text-zinc-900">+91 94433 89648</strong>
                </span>
              </a>
            </div>

            {/* Enterprise Trust Stats Strip (Clean Baseline) */}
            <div className="hero-stats-strip pt-5 sm:pt-6 border-t border-zinc-200 grid grid-cols-3 gap-2 sm:gap-6">
              <div>
                <div
                  className="text-xl sm:text-2xl lg:text-3xl font-black font-urbanist bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #E73F1E, #FB6C00)",
                  }}
                >
                  100%
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-zinc-900 font-opensans leading-tight mt-0.5">
                  Direct Farm Sourcing
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-zinc-500 font-opensans mt-0.5">
                  APEDA &amp; Spices Board
                </div>
              </div>

              <div>
                <div
                  className="text-xl sm:text-2xl lg:text-3xl font-black font-urbanist bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #FB6C00, #F9B637)",
                  }}
                >
                  15+
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-zinc-900 font-opensans leading-tight mt-0.5">
                  Global Sea Ports
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-zinc-500 font-opensans mt-0.5">
                  Middle East &amp; SE Asia
                </div>
              </div>

              <div>
                <div
                  className="text-xl sm:text-2xl lg:text-3xl font-black font-urbanist bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #F9B637, #FB6C00)",
                  }}
                >
                  0
                </div>
                <div className="text-[11px] sm:text-xs lg:text-sm font-bold text-zinc-900 font-opensans leading-tight mt-0.5">
                  Intermediaries
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-zinc-500 font-opensans mt-0.5">
                  Farmer to Port Direct
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Authentic Ocean Cargo Vessel Showcase with Floating Badges Outside Frame
          ========================================================================= */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 px-2 sm:px-4 lg:px-2">
            {/* Outer Wrapper for Image + Floating Elements (Allows Elements to Float Outside) */}
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              {/* Clean Unobstructed Ship Image Frame */}
              <div className="hero-visual-frame relative w-full h-[480px] sm:h-[550px] lg:h-[600px] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-[0_22px_55px_-12px_rgba(0,0,0,0.2)] border-2 border-[#F9B637]/50 bg-zinc-50 group">
                <Image
                  src="/assets/images/hero/hero-maersk-port-cranes.jpg"
                  alt="The Golden Star - International Maritime Container Cargo Vessel under Port Cranes"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                />
                {/* Minimal subtle gradient at bottom edge only */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* =========================================================================
                  FLOATING CARDS OUTSIDE THE SHIP FRAME (Structured, Balanced, Non-Colliding)
              ========================================================================= */}
              {/* Card 1: Top-Left Floating Badge (50+ Countries Served) */}
              <div className="animate-float-1 absolute -top-4 -left-2 sm:-top-6 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border-2 border-[#F9B637] px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl shadow-[0_12px_28px_-4px_rgba(251,108,0,0.25)] flex items-center gap-2.5 sm:gap-3 transition-transform hover:scale-105 duration-300">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shadow-xs shrink-0">
                  <Image
                    src="/assets/images/branding/real-globe.jpg"
                    alt="Real 3D Earth Globe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black font-urbanist bg-clip-text text-transparent bg-gradient-to-r from-[#E73F1E] to-[#FB6C00] leading-none">
                    50+
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] font-bold font-opensans text-zinc-900 uppercase tracking-wide mt-0.5">
                    Countries Served
                  </div>
                  <div className="text-[8.5px] sm:text-[9.5px] text-zinc-500 font-opensans leading-none">
                    Global Maritime Trade
                  </div>
                </div>
              </div>

              {/* Card 2: Top-Right Floating Pill (Govt Recognized Export House) */}
              <div className="absolute -top-3 right-1 sm:-top-5 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border-2 border-[#F9B637] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-[0_10px_24px_-4px_rgba(0,0,0,0.12)] flex items-center gap-1.5 sm:gap-2 shrink-0 transition-transform hover:scale-105 duration-300">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FB6C00] shrink-0" />
                <span className="text-[9px] sm:text-[10.5px] font-urbanist font-bold uppercase tracking-wider text-[#111111] whitespace-nowrap">
                  Govt Recognized &bull; APEDA Certified
                </span>
              </div>


              {/* Card 4: Bottom-Left Floating Pill (Cold-Chain Reefer Logistics) */}
              <div className="absolute -bottom-5 -left-2 sm:-bottom-7 sm:-left-6 z-20 bg-white/95 backdrop-blur-md border-2 border-[#F9B637] p-3 sm:p-3.5 rounded-2xl shadow-[0_16px_36px_-6px_rgba(231,63,30,0.25)] max-w-[240px] sm:max-w-[270px] transition-transform hover:scale-105 duration-300">
                <div className="flex items-center gap-1.5 mb-1">
                  <Ship className="w-3.5 h-3.5 text-[#E73F1E] shrink-0" />
                  <span className="text-[9px] sm:text-[10px] font-urbanist font-bold uppercase tracking-wider text-[#FB6C00]">
                    Cold-Chain Reefer Logistics
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-opensans font-bold text-[#111111] leading-snug">
                  Direct from Thanjavur Cauvery Delta to Global Seaports
                </p>
                <div className="flex mt-1.5 items-center gap-1.5 text-[8.5px] sm:text-[9px] font-opensans font-semibold text-zinc-500">
                  <CheckCircle2 className="w-3 h-3 text-[#F9B637] shrink-0" />
                  <span>APEDA &bull; SPICES BOARD &bull; FSSAI</span>
                </div>
              </div>

              {/* Card 5: Bottom-Right Floating Badge (99.8% On-Time Clearance) */}
              <div className="animate-float-3 absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-6 z-20 bg-white/95 backdrop-blur-md border-2 border-[#F9B637] p-2.5 sm:p-3.5 rounded-2xl shadow-[0_16px_36px_-6px_rgba(231,63,30,0.25)] flex items-center gap-2.5 transition-transform hover:scale-105 duration-300">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#E73F1E] via-[#FB6C00] to-[#F9B637] flex items-center justify-center text-white shadow-xs shrink-0">
                  <Award className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black font-urbanist bg-clip-text text-transparent bg-gradient-to-r from-[#E73F1E] to-[#FB6C00] leading-none">
                    99.8%
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] font-bold font-opensans text-zinc-900 uppercase tracking-wide mt-0.5">
                    On-Time Clearance
                  </div>
                  <div className="text-[8.5px] sm:text-[9.5px] text-zinc-500 font-opensans leading-none">
                    Zero Demurrage Standard
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

