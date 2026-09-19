"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Ship,
  TrendingUp,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Globe2,
  Leaf,
  Package,
  Check,
  Award,
} from "lucide-react";
import WhyChooseUsInteractive from "@/components/WhyChooseUsInteractive";
import { Particles } from "@/components/ui/particles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import HeroSection from "@/components/HeroSection";
import GetStartedButton from "@/components/ui/get-started-button";

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeStepHover, setActiveStepHover] = useState<number | null>(null);

  const promiseSteps = [
    {
      num: "01",
      name: "Source",
      icon: Leaf,
      desc: "We buy fresh produce directly from trusted local farmers across South India with zero middlemen.",
      highlight: "Farm-Direct Sourcing",
      gradient: "from-[#E73F1E] to-[#FB6C00]",
    },
    {
      num: "02",
      name: "Inspect",
      icon: ShieldCheck,
      desc: "Every item is hand-checked for freshness, grade, size, and strict export quality standards.",
      highlight: "100% Quality Inspected",
      gradient: "from-[#FB6C00] to-[#F9B637]",
    },
    {
      num: "03",
      name: "Pack",
      icon: Package,
      desc: "Cleaned, sorted, and packed into heavy-duty export boxes with your custom branding and labels.",
      highlight: "Export-Grade Packaging",
      gradient: "from-[#F9B637] to-[#FB6C00]",
    },
    {
      num: "04",
      name: "Ship",
      icon: Ship,
      desc: "Refrigerated sea containers (-18°C to +4°C) with full customs documentation and cargo tracking.",
      highlight: "Refrigerated Sea Freight",
      gradient: "from-[#FB6C00] to-[#E73F1E]",
    },
    {
      num: "05",
      name: "Deliver",
      icon: Globe2,
      desc: "Safe and on-time arrival at your destination port, ready for quick and hassle-free clearance.",
      highlight: "On-Time Port Arrival",
      gradient: "from-[#E73F1E] via-[#FB6C00] to-[#F9B637]",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden">
      {/* 🌟 Split Hero Showcase (Matching User Reference Layout with GSAP Motion) */}
      <HeroSection />

      {/* 🌟 Product Categories Section (Enterprise Export Frames) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] bg-[#FFD84D] px-3.5 py-1 inline-block mb-3 font-dmsans border border-[#DEDEDE] shadow-sm">
            WHAT WE TRADE
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] font-space">
            What We Trade
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 mt-2 font-dmsans">
            Bringing nature&rsquo;s finest products to global markets.
          </p>
        </motion.div>

        {/* 3 Luxury Product Frames with Smooth Motion Physics & User-Approved Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🍎 Fruits Card Frame (2nd Image) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 45px -10px rgba(255, 216, 77, 0.45), 0 0 0 2px #FFD84D",
              transition: { type: "spring", stiffness: 300, damping: 22 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl border-2 border-[#FFD84D] shadow-[0_4px_25px_rgba(255,216,77,0.16)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Shimmer / Light Beam Sweep across card on hover */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 pointer-events-none group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

            <div className="p-6 sm:p-7">
              {/* Image Container with Smooth Zoom & Floating Badges */}
              <div className="w-full h-60 rounded-xl overflow-hidden mb-6 relative bg-zinc-100 border border-[#DEDEDE]">
                <Image
                  src="/assets/images/products/fruits-display.jpg"
                  alt="Fresh Quality Fruits Display"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Top Left Number/Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-space font-bold text-[#111111] shadow-sm flex items-center border border-[#DEDEDE]">
                  <span>01 / FRUITS</span>
                </div>

                {/* Floating Bottom Right Yellow Badge with Continuous Smooth Float */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute bottom-3 right-3 px-3 py-1 bg-[#FFD84D] text-[#111111] font-space font-bold text-[10px] shadow-md border border-[#E8C838] tracking-wider uppercase flex items-center group-hover:scale-105 transition-transform"
                >
                  <span>EXPORT GRADE A1</span>
                </motion.div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-3">
                <h3 className="font-space text-2xl font-bold text-[#111111] group-hover:text-[#FF583E] transition-colors leading-tight">
                  Fruits
                </h3>
                <p className="font-dmsans text-xs font-semibold text-zinc-600 tracking-wide mt-1 italic">
                  Freshness from farm to market.
                </p>
              </div>

              {/* Description (Exact from User Screenshot) */}
              <p className="font-dmsans text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                A selection of premium export fruits sourced directly from verified South Indian growers and prepared under stringent cold-chain protocols.
              </p>

              {/* Key Features Bullet Points with High-Visibility Yellow Circle Checks */}
              <div className="space-y-2.5 mb-6 text-xs text-zinc-700 font-dmsans">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D] border border-[#E8C838] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.8]" />
                  </div>
                  <span className="font-medium text-zinc-800">Cold-chain refrigerated export packaging</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D] border border-[#E8C838] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.8]" />
                  </div>
                  <span className="font-medium text-zinc-800">Phytosanitary inspection certified</span>
                </div>
              </div>

              {/* Interactive Variety Tags with Smooth Spring Hover */}
              <div className="text-xs text-zinc-500 mb-6 pb-4 border-t border-[#DEDEDE] pt-4 font-dmsans">
                <span className="block text-[11px] font-space font-bold uppercase tracking-wider text-zinc-800 mb-2.5">
                  Key Export Varieties:
                </span>
                <div className="flex flex-wrap gap-1.5 font-dmsans">
                  {["Mango", "Banana", "Pomegranate", "Grapes", "Papaya"].map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-2.5 py-1 rounded-full bg-zinc-50 hover:bg-[#FFD84D] border border-[#DEDEDE] hover:border-[#111111] text-zinc-800 hover:text-[#111111] text-[11px] font-medium transition-colors cursor-pointer shadow-xs"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer with View Full Catalog and Inquire Rates */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#DEDEDE] mt-auto flex items-center justify-between pt-4">
              <Link
                href="/products#fruits"
                className="group/link inline-flex items-center gap-1.5 text-xs font-space font-bold text-[#111111] hover:text-[#FF583E] transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF583E] group-hover/link:translate-x-1.5 transition-transform duration-200" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openQuoteModal("Fruits")}
                className="px-4 py-2 rounded-lg bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-xs shadow-sm hover:shadow-md transition-colors"
              >
                Inquire Rates
              </motion.button>
            </div>
          </motion.div>

          {/* 🥕 Vegetables Card Frame (3rd Image) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 45px -10px rgba(255, 216, 77, 0.45), 0 0 0 2px #FFD84D",
              transition: { type: "spring", stiffness: 300, damping: 22 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="bg-white rounded-2xl border-2 border-[#FFD84D] shadow-[0_4px_25px_rgba(255,216,77,0.16)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Shimmer Sweep on Hover */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 pointer-events-none group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

            <div className="p-6 sm:p-7">
              {/* Image Container with Smooth Zoom */}
              <div className="w-full h-60 rounded-xl overflow-hidden mb-6 relative bg-zinc-100 border border-[#DEDEDE]">
                <Image
                  src="/assets/images/products/vegetables-display.jpg"
                  alt="Fresh Quality Vegetables Display"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Top Left Number/Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-space font-bold text-[#111111] shadow-sm flex items-center border border-[#DEDEDE]">
                  <span>02 / VEGETABLES</span>
                </div>

                {/* Floating Bottom Right Yellow Badge with Continuous Float */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.2 }}
                  className="absolute bottom-3 right-3 px-3 py-1 bg-[#FFD84D] text-[#111111] font-space font-bold text-[10px] shadow-md border border-[#E8C838] tracking-wider uppercase flex items-center group-hover:scale-105 transition-transform"
                >
                  <span>FARM HARVESTED</span>
                </motion.div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-3">
                <h3 className="font-space text-2xl font-bold text-[#111111] group-hover:text-[#FF583E] transition-colors leading-tight">
                  Vegetables
                </h3>
                <p className="font-dmsans text-xs font-semibold text-zinc-600 tracking-wide mt-1 italic">
                  Fresh produce. Reliable supply.
                </p>
              </div>

              {/* Description (Exact from User Screenshot) */}
              <p className="font-dmsans text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                Quality vegetables carefully sourced and handled to meet the strict packaging and shelf-life requirements of international trade.
              </p>

              {/* Key Features Bullet Points with High-Visibility Yellow Circle Checks */}
              <div className="space-y-2.5 mb-6 text-xs text-zinc-700 font-dmsans">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D] border border-[#E8C838] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.8]" />
                  </div>
                  <span className="font-medium text-zinc-800">Carefully sorted, graded &amp; mesh packed</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D] border border-[#E8C838] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.8]" />
                  </div>
                  <span className="font-medium text-zinc-800">Bulk cargo &amp; containerized reefer supply</span>
                </div>
              </div>

              {/* Interactive Variety Tags with Smooth Spring Hover */}
              <div className="text-xs text-zinc-500 mb-6 pb-4 border-t border-[#DEDEDE] pt-4 font-dmsans">
                <span className="block text-[11px] font-space font-bold uppercase tracking-wider text-zinc-800 mb-2.5">
                  Key Export Varieties:
                </span>
                <div className="flex flex-wrap gap-1.5 font-dmsans">
                  {["Onion", "Potato", "Tomato", "Okra", "Green Chilli"].map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-2.5 py-1 rounded-full bg-zinc-50 hover:bg-[#FFD84D] border border-[#DEDEDE] hover:border-[#111111] text-zinc-800 hover:text-[#111111] text-[11px] font-medium transition-colors cursor-pointer shadow-xs"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#DEDEDE] mt-auto flex items-center justify-between pt-4">
              <Link
                href="/products#vegetables"
                className="group/link inline-flex items-center gap-1.5 text-xs font-space font-bold text-[#111111] hover:text-[#FF583E] transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF583E] group-hover/link:translate-x-1.5 transition-transform duration-200" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openQuoteModal("Vegetables")}
                className="px-4 py-2 rounded-lg bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-xs shadow-sm hover:shadow-md transition-colors"
              >
                Inquire Rates
              </motion.button>
            </div>
          </motion.div>

          {/* 🌶️ Spices Card Frame (4th Image - Rich Dynamic Animations & Pulse Aura) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{
              y: -10,
              boxShadow: "0 20px 45px -10px rgba(255, 216, 77, 0.45), 0 0 0 2px #FFD84D",
              transition: { type: "spring", stiffness: 300, damping: 22 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            className="bg-white rounded-2xl border-2 border-[#FFD84D] shadow-[0_4px_25px_rgba(255,216,77,0.16)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Shimmer Sweep on Hover */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 pointer-events-none group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

            {/* Ambient Warm Golden Aura Glow behind Spices Image (Pulsing Smoothly) */}
            <motion.div
              animate={{
                opacity: [0.25, 0.65, 0.25],
                scale: [0.96, 1.04, 0.96]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 inset-x-6 h-64 bg-gradient-to-tr from-[#FFD84D]/35 via-[#FF583E]/25 to-amber-500/30 blur-2xl pointer-events-none -z-0 opacity-40 group-hover:opacity-100 transition-opacity"
            />

            <div className="p-6 sm:p-7 relative z-10">
              {/* Image Container with Smooth Zoom & Floating Origin Badge */}
              <div className="w-full h-60 rounded-xl overflow-hidden mb-6 relative bg-zinc-100 border border-[#DEDEDE]">
                <Image
                  src="/assets/images/products/spices-display.jpg"
                  alt="Authentic Quality Indian Spices Display"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Top Left Number/Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-space font-bold text-[#111111] shadow-sm flex items-center border border-[#DEDEDE]">
                  <span>03 / SPICES</span>
                </div>

                {/* Floating Bottom Right Yellow Badge with Continuous Smooth Float */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.4 }}
                  className="absolute bottom-3 right-3 px-3 py-1 bg-[#FFD84D] text-[#111111] font-space font-bold text-[10px] shadow-md border border-[#E8C838] tracking-wider uppercase flex items-center group-hover:scale-105 transition-transform"
                >
                  <span>PURE INDIAN ORIGIN</span>
                </motion.div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-3">
                <h3 className="font-space text-2xl font-bold text-[#111111] group-hover:text-[#FF583E] transition-colors leading-tight">
                  Spices
                </h3>
                <p className="font-dmsans text-xs font-semibold text-zinc-600 tracking-wide mt-1 italic">
                  Authentic flavours from India.
                </p>
              </div>

              {/* Description (Exact from User Screenshot) */}
              <p className="font-dmsans text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                Premium spices sourced from reliable suppliers, bringing rich flavour, vibrant color, and high essential oil content to global markets.
              </p>

              {/* Key Features Bullet Points with High-Visibility Yellow Circle Checks */}
              <div className="space-y-2.5 mb-6 text-xs text-zinc-700 font-dmsans">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D] border border-[#E8C838] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.8]" />
                  </div>
                  <span className="font-medium text-zinc-800">Aroma sealed moisture barrier packing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D] border border-[#E8C838] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.8]" />
                  </div>
                  <span className="font-medium text-zinc-800">Lab tested for high essential oil content</span>
                </div>
              </div>

              {/* Interactive Variety Tags with Smooth Spring Hover */}
              <div className="text-xs text-zinc-500 mb-6 pb-4 border-t border-[#DEDEDE] pt-4 font-dmsans">
                <span className="block text-[11px] font-space font-bold uppercase tracking-wider text-zinc-800 mb-2.5">
                  Key Export Varieties:
                </span>
                <div className="flex flex-wrap gap-1.5 font-dmsans">
                  {["Black Pepper", "Cardamom", "Turmeric", "Cumin"].map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-2.5 py-1 rounded-full bg-zinc-50 hover:bg-[#FFD84D] border border-[#DEDEDE] hover:border-[#111111] text-zinc-800 hover:text-[#111111] text-[11px] font-medium transition-colors cursor-pointer shadow-xs"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#DEDEDE] mt-auto flex items-center justify-between pt-4 relative z-10">
              <Link
                href="/products#spices"
                className="group/link inline-flex items-center gap-1.5 text-xs font-space font-bold text-[#111111] hover:text-[#FF583E] transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF583E] group-hover/link:translate-x-1.5 transition-transform duration-200" />
              </Link>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openQuoteModal("Spices")}
                className="px-4 py-2 rounded-lg bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-xs shadow-sm hover:shadow-md transition-colors"
              >
                Inquire Rates
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🌟 Interactive "Why Choose Us" Metrics Section (Matching Reference Screenshot) */}
      <WhyChooseUsInteractive />

      {/* 🌟 Redesigned "Our Promise" Section (Clean, Modern, Non-Redundant 5-Step Workflow) */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-zinc-50/70 via-white to-amber-50/20 border-t border-b border-[#F9B637]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FB6C00_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E73F1E] bg-[#FFDD9C]/45 px-3.5 py-1.5 rounded-full inline-block mb-3 font-space border border-[#F9B637]/50">
              HOW WE EXPORT
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] font-space">
              Our Promise
            </h2>
            <p className="font-dmsans text-base sm:text-lg text-zinc-700 mt-2 italic">
              &ldquo;From South Indian farms to your destination port — handled with care and delivered on time.&rdquo;
            </p>
          </motion.div>

          {/* Clean 5-Step Process with Soft Curvy Finish (rounded-3xl capsules, rounded-full icons & pills) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative">
            {promiseSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#F9B637]/35 hover:border-[#FB6C00] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between group relative overflow-hidden"
                >
                  {/* Soft top curved glow line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E73F1E] via-[#FB6C00] to-[#F9B637] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />

                  <div className="flex flex-col items-center">
                    {/* Curvy Circular Icon Pod with Luminous Gradient */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E73F1E] via-[#FB6C00] to-[#F9B637] flex items-center justify-center text-white shadow-md mb-3.5 group-hover:scale-110 group-hover:shadow-[0_8px_20px_-4px_rgba(231,63,30,0.4)] transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white drop-shadow-xs" />
                    </div>

                    {/* Curvy Step Number Pill */}
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold font-space bg-[#FFDD9C]/60 text-[#E73F1E] border border-[#F9B637] mb-2.5 inline-block shadow-2xs">
                      {step.num}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#111111] font-space mb-2 group-hover:text-[#E73F1E] transition-colors">
                      {step.name}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-[13px] text-zinc-600 font-dmsans leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  {/* Curvy Bottom Pill Badge with Flow Arrow */}
                  <div className="w-full pt-3 border-t border-zinc-100/90 flex items-center justify-center">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold font-dmsans bg-zinc-50 group-hover:bg-[#FFDD9C]/40 text-zinc-700 group-hover:text-[#E73F1E] border border-zinc-200 group-hover:border-[#F9B637] transition-all flex items-center gap-1.5">
                      <span>{step.highlight}</span>
                      <span className="text-[#FB6C00] font-bold">
                        {idx < 4 ? "→" : "✓"}
                      </span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🌟 Founder & Managing Director Section */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#DEDEDE] shadow-sm hover:border-[#111111] transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden border-2 border-[#DEDEDE] shadow-xl bg-zinc-100"
              >
                <Image
                  src="/assets/images/branding/founder.png"
                  alt="Sahul Hameed - Founder & Managing Director"
                  fill
                  className="object-cover object-top"
                />
              </motion.div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] bg-[#FFD84D] px-3 py-1 rounded-full inline-block mb-2 font-dmsans border border-[#DEDEDE] shadow-sm">
                  EXECUTIVE GOVERNANCE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-space">
                  Sahul Hameed
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-1 font-dmsans">
                  Founder &amp; Managing Director / The Golden Star
                </p>
              </div>

              <blockquote className="border-l-4 border-[#FFD84D] pl-5 italic text-zinc-700 text-base sm:text-lg font-dmsans">
                &ldquo;At The Golden Star, every consignment represents our promise of integrity, premium agricultural quality, and dependable cross-border delivery.&rdquo;
              </blockquote>

              <p className="text-sm text-zinc-600 leading-relaxed font-normal font-dmsans">
                Directly overseeing farm sourcing relationships in Tamil Nadu and across India, quality inspection protocols, and export logistics to guarantee total customer satisfaction.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 font-dmsans">
                <a
                  href="mailto:hameedsahul9978@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111111] hover:bg-[#FF583E] text-white font-semibold text-xs border border-[#111111] shadow-sm transition-all hover:scale-105 font-space"
                >
                  <Mail className="w-4 h-4 text-[#FFD84D]" />
                  <span>hameedsahul9978@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🌟 Closing CTA Section with Ambient Particles & ScrollReveal */}
      <section className="py-10 sm:py-14 bg-[#111111] text-white text-center relative overflow-hidden border-t border-zinc-800">
        <Particles quantity={25} color="#FF583E" className="opacity-25" />
        <ScrollReveal animation="slide-up" duration={0.6} className="max-w-4xl mx-auto px-6 space-y-3.5 sm:space-y-4 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.24em] text-[#111111] bg-[#FFD84D] px-4 py-1.5 rounded-full border border-[#DEDEDE] font-dmsans shadow-sm">
            LET&apos;S CONNECT BEYOND BORDERS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space text-white tracking-tight drop-shadow-lg">
            Looking for a Trusted Trade Partner?
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-dmsans max-w-xl mx-auto leading-relaxed">
            &ldquo;Let&apos;s build a reliable supply connection.&rdquo;
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 font-dmsans">
            <GetStartedButton
              label="Get Started Now"
              onClick={() => openQuoteModal("Home Footer CTA")}
              className="bg-[#FF583E] text-white hover:border-[#FF583E] hover:text-[#111111] font-space font-bold text-sm tracking-wide shadow-xl hover:shadow-[0_12px_28px_rgba(255,88,62,0.45)]"
            />
            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 hover:border-white/40 transition-all duration-200 font-space backdrop-blur-md shadow-sm font-space"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
