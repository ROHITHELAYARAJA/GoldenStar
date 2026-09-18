"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeStepHover, setActiveStepHover] = useState<number | null>(null);

  const promiseSteps = [
    {
      num: "01",
      name: "Source",
      icon: Leaf,
      desc: "We source quality fruits, vegetables, and spices through trusted farmers and suppliers.",
      highlight: "Direct Farm Procurement",
    },
    {
      num: "02",
      name: "Select",
      icon: ShieldCheck,
      desc: "Products are carefully selected based on quality, freshness, and customer requirements.",
      highlight: "100% Quality Inspection",
    },
    {
      num: "03",
      name: "Prepare",
      icon: Package,
      desc: "Products are sorted, graded, packed, and prepared according to shipment requirements.",
      highlight: "Export-Grade Sorting",
    },
    {
      num: "04",
      name: "Ship",
      icon: Ship,
      desc: "We coordinate documentation, logistics, and transportation for smooth international movement.",
      highlight: "Cold-Chain Maritime",
    },
    {
      num: "05",
      name: "Deliver",
      icon: Globe2,
      desc: "Products reach their destination efficiently, helping our customers maintain a reliable supply.",
      highlight: "On-Time Destination Delivery",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden">
      {/* 🌟 Animated Global Live Ticker Marquee */}
      <div className="w-full bg-[#111111] text-white py-2.5 overflow-hidden border-b border-zinc-800">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="flex items-center gap-10 whitespace-nowrap text-xs font-semibold tracking-wider text-zinc-300 uppercase font-dmsans"
        >
          <span>🌾 SOURCING BELT: Tamil Nadu &bull; Maharashtra &bull; Kerala &bull; Karnataka &bull; Andhra Pradesh</span>
          <span className="text-[#FFD84D]">&bull;</span>
          <span>🚢 MARITIME CORRIDORS: UAE &bull; Singapore &bull; Malaysia &bull; Saudi Arabia &bull; UK &bull; Europe</span>
          <span className="text-[#FF583E]">&bull;</span>
          <span>⭐ THE GOLDEN STAR: 100% Phytosanitary Certified &bull; Temperature Monitored Reefer Supply</span>
          <span className="text-[#FFD84D]">&bull;</span>
          <span>📞 Direct Export Desk: +91 9345243790 (Founder Sahul Hameed)</span>
          <span className="text-[#FF583E]">&bull;</span>
          <span>🌾 SOURCING BELT: Tamil Nadu &bull; Maharashtra &bull; Kerala &bull; Karnataka &bull; Andhra Pradesh</span>
        </motion.div>
      </div>

      {/* 🌟 Pristine Maritime Vessel Hero Showcase (Single Dedicated Hero Image) */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full min-h-[600px] sm:min-h-[680px] lg:min-h-[740px] flex items-center">
          {/* Background High-Definition Maritime Vessel Photograph (The One and Only Hero Image) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/hero/hero-container-vessel.jpg"
              alt="The Golden Star - Global Maritime Agricultural Export Vessel"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Cinematic Gradient: Clean dark text backdrop on the left while keeping ship, cranes, plane and sunset sky visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent sm:w-[75%] lg:w-[60%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* Hero Content (Left Aligned, Executive Space Grotesk & DM Sans Typography) */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <div className="max-w-2xl">
              {/* Eyebrow Subtitle Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-dmsans font-bold tracking-[0.2em] text-[#FFD84D] uppercase mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF583E]" />
                <span>GLOBAL MARITIME AGRICULTURAL EXPORT</span>
              </div>

              {/* Bold Space Grotesk Headline */}
              <h1 className="font-space text-3xl sm:text-5xl lg:text-[54px] text-white font-bold leading-[1.12] tracking-tight mb-5 drop-shadow-xl">
                From South India&apos;s Finest Farms
                <span className="text-[#FFD84D] block mt-1.5">
                  to Worldwide Seaports
                </span>
              </h1>

              {/* Clean Tagline */}
              <p className="text-sm sm:text-base lg:text-lg text-zinc-200 leading-relaxed max-w-xl mb-8 font-dmsans font-normal drop-shadow-md">
                Direct procurement from verified farm belts in Tamil Nadu and South India. Exporting premium fresh fruits, farm vegetables, and authentic spices with certified phytosanitary standards and cold-chain integrity.
              </p>

              {/* Action Buttons: Accent Coral and Obsidian Clean */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF583E] hover:bg-[#E8492C] text-white font-space font-bold text-sm shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <span>Explore Commodities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => openQuoteModal("Hero Section")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/50 hover:bg-black text-white font-space font-bold text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105 shadow-xl"
                >
                  <span>Request Export Quote</span>
                </button>
              </div>

              {/* Key Trust Stats Strip */}
              <div className="grid grid-cols-3 gap-4 pt-10 mt-8 border-t border-white/15 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-space">50+</div>
                  <div className="text-xs text-zinc-300 font-dmsans mt-0.5">Sourcing Clusters</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#FFD84D] font-space">100%</div>
                  <div className="text-xs text-zinc-300 font-dmsans mt-0.5">Phytosanitary Inspected</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-space">Reefer</div>
                  <div className="text-xs text-zinc-300 font-dmsans mt-0.5">Cold-Chain Maritime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 Product Categories Section (Enterprise Export Frames) */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] bg-[#FFD84D] px-3.5 py-1 rounded-full inline-block mb-3 font-dmsans border border-[#DEDEDE] shadow-sm">
            WHAT WE TRADE
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] font-space">
            Bringing Nature&apos;s Finest Products
          </h2>
          <p className="text-base text-zinc-600 mt-2 font-dmsans">
            &ldquo;From trusted Indian orchards and farms to international wholesale markets.&rdquo;
          </p>
        </motion.div>

        {/* 3 Luxury Product Frames with Fluid Dynamic Framer Motion Animations & Exact Palette */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🍎 Fruits Card Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-3xl bg-white border border-[#DEDEDE] hover:border-[#111111] shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Glowing Accent Stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FFD84D] via-[#FF583E] to-[#111111] opacity-90 group-hover:opacity-100 transition-opacity" />

            <div className="p-6 sm:p-7">
              {/* Image Container with Smooth Scale & Sleek Pill Overlays */}
              <div className="w-full h-60 rounded-2xl overflow-hidden mb-6 relative bg-zinc-100 border border-[#DEDEDE]">
                <Image
                  src="/assets/images/products/fruits/mango.jpg"
                  alt="Fresh Quality Fruits"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-space font-bold text-[#111111] shadow-sm flex items-center gap-1.5 border border-[#DEDEDE]">
                  <span className="w-2 h-2 rounded-full bg-[#FF583E]" />
                  <span>01 &bull; FRUITS</span>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#FFD84D] text-[10px] font-space font-bold text-[#111111] shadow-md border border-[#DEDEDE] flex items-center gap-1">
                  <span>EXPORT GRADE A1</span>
                </div>
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

              {/* Description */}
              <p className="font-dmsans text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                A selection of premium export fruits sourced directly from verified South Indian growers and prepared under stringent cold-chain protocols.
              </p>

              {/* Key Features Bullet Points */}
              <div className="space-y-2.5 mb-6 text-xs text-zinc-700 font-dmsans">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D]/40 border border-[#FFD84D] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.5]" />
                  </div>
                  <span>Cold-chain refrigerated export packaging</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D]/40 border border-[#FFD84D] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.5]" />
                  </div>
                  <span>Phytosanitary inspection certified</span>
                </div>
              </div>

              {/* Interactive Variety Tags */}
              <div className="text-xs text-zinc-500 mb-6 pb-4 border-t border-[#DEDEDE] pt-4 font-dmsans">
                <span className="block text-[11px] font-space font-bold uppercase tracking-wider text-zinc-800 mb-2.5">
                  Key Export Varieties:
                </span>
                <div className="flex flex-wrap gap-1.5 font-dmsans">
                  {["Mango", "Banana", "Pomegranate", "Grapes", "Papaya"].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-zinc-50 hover:bg-[#FFD84D] border border-[#DEDEDE] text-zinc-800 hover:text-[#111111] text-[11px] font-medium transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#DEDEDE] mt-auto flex items-center justify-between pt-4">
              <Link
                href="/products"
                className="text-xs font-space font-bold text-[#111111] group-hover:text-[#FF583E] transition-colors flex items-center gap-1.5"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#FF583E]" />
              </Link>
              <button
                onClick={() => openQuoteModal("Fruits")}
                className="px-4 py-2 rounded-xl bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-xs shadow hover:shadow-md transition-all hover:scale-105"
              >
                Inquire Rates
              </button>
            </div>
          </motion.div>

          {/* 🥕 Vegetables Card Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="rounded-3xl bg-white border border-[#DEDEDE] hover:border-[#111111] shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Glowing Accent Stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FFD84D] via-[#FF583E] to-[#111111] opacity-90 group-hover:opacity-100 transition-opacity" />

            <div className="p-6 sm:p-7">
              {/* Image Container with Smooth Scale & Sleek Pill Overlays */}
              <div className="w-full h-60 rounded-2xl overflow-hidden mb-6 relative bg-zinc-100 border border-[#DEDEDE]">
                <Image
                  src="/assets/images/products/vegetables/onion.jpg"
                  alt="Quality Vegetables Supply"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-space font-bold text-[#111111] shadow-sm flex items-center gap-1.5 border border-[#DEDEDE]">
                  <span className="w-2 h-2 rounded-full bg-[#FF583E]" />
                  <span>02 &bull; VEGETABLES</span>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#FFD84D] text-[10px] font-space font-bold text-[#111111] shadow-md border border-[#DEDEDE] flex items-center gap-1">
                  <span>FARM HARVESTED</span>
                </div>
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

              {/* Description */}
              <p className="font-dmsans text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                Quality vegetables carefully sourced and handled to meet the strict packaging and shelf-life requirements of international trade.
              </p>

              {/* Key Features Bullet Points */}
              <div className="space-y-2.5 mb-6 text-xs text-zinc-700 font-dmsans">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D]/40 border border-[#FFD84D] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.5]" />
                  </div>
                  <span>Carefully sorted, graded &amp; mesh packed</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D]/40 border border-[#FFD84D] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.5]" />
                  </div>
                  <span>Bulk cargo &amp; containerized reefer supply</span>
                </div>
              </div>

              {/* Interactive Variety Tags */}
              <div className="text-xs text-zinc-500 mb-6 pb-4 border-t border-[#DEDEDE] pt-4 font-dmsans">
                <span className="block text-[11px] font-space font-bold uppercase tracking-wider text-zinc-800 mb-2.5">
                  Key Export Varieties:
                </span>
                <div className="flex flex-wrap gap-1.5 font-dmsans">
                  {["Onion", "Potato", "Tomato", "Okra", "Green Chilli"].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-zinc-50 hover:bg-[#FFD84D] border border-[#DEDEDE] text-zinc-800 hover:text-[#111111] text-[11px] font-medium transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#DEDEDE] mt-auto flex items-center justify-between pt-4">
              <Link
                href="/products"
                className="text-xs font-space font-bold text-[#111111] group-hover:text-[#FF583E] transition-colors flex items-center gap-1.5"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#FF583E]" />
              </Link>
              <button
                onClick={() => openQuoteModal("Vegetables")}
                className="px-4 py-2 rounded-xl bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-xs shadow hover:shadow-md transition-all hover:scale-105"
              >
                Inquire Rates
              </button>
            </div>
          </motion.div>

          {/* 🌶️ Spices Card Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="rounded-3xl bg-white border border-[#DEDEDE] hover:border-[#111111] shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Glowing Accent Stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FFD84D] via-[#FF583E] to-[#111111] opacity-90 group-hover:opacity-100 transition-opacity" />

            <div className="p-6 sm:p-7">
              {/* Image Container with Smooth Scale & Sleek Pill Overlays */}
              <div className="w-full h-60 rounded-2xl overflow-hidden mb-6 relative bg-zinc-100 border border-[#DEDEDE]">
                <Image
                  src="/assets/images/products/spices/black-pepper.jpg"
                  alt="Authentic Indian Spices"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-space font-bold text-[#111111] shadow-sm flex items-center gap-1.5 border border-[#DEDEDE]">
                  <span className="w-2 h-2 rounded-full bg-[#FF583E]" />
                  <span>03 &bull; SPICES</span>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#FFD84D] text-[10px] font-space font-bold text-[#111111] shadow-md border border-[#DEDEDE] flex items-center gap-1">
                  <span>PURE INDIAN ORIGIN</span>
                </div>
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

              {/* Description */}
              <p className="font-dmsans text-sm text-zinc-600 leading-relaxed mb-5 font-normal">
                Premium spices sourced from reliable suppliers, bringing rich flavour, vibrant color, and high essential oil content to global markets.
              </p>

              {/* Key Features Bullet Points */}
              <div className="space-y-2.5 mb-6 text-xs text-zinc-700 font-dmsans">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D]/40 border border-[#FFD84D] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.5]" />
                  </div>
                  <span>Aroma sealed moisture barrier packing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FFD84D]/40 border border-[#FFD84D] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#111111] stroke-[2.5]" />
                  </div>
                  <span>Lab tested for high essential oil content</span>
                </div>
              </div>

              {/* Interactive Variety Tags */}
              <div className="text-xs text-zinc-500 mb-6 pb-4 border-t border-[#DEDEDE] pt-4 font-dmsans">
                <span className="block text-[11px] font-space font-bold uppercase tracking-wider text-zinc-800 mb-2.5">
                  Key Export Varieties:
                </span>
                <div className="flex flex-wrap gap-1.5 font-dmsans">
                  {["Black Pepper", "Cardamom", "Turmeric", "Cumin"].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-zinc-50 hover:bg-[#FFD84D] border border-[#DEDEDE] text-zinc-800 hover:text-[#111111] text-[11px] font-medium transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#DEDEDE] mt-auto flex items-center justify-between pt-4">
              <Link
                href="/products"
                className="text-xs font-space font-bold text-[#111111] group-hover:text-[#FF583E] transition-colors flex items-center gap-1.5"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#FF583E]" />
              </Link>
              <button
                onClick={() => openQuoteModal("Spices")}
                className="px-4 py-2 rounded-xl bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-xs shadow hover:shadow-md transition-all hover:scale-105"
              >
                Inquire Rates
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🌟 Interactive "Why Choose Us" Metrics Section (Matching Reference Screenshot) */}
      <WhyChooseUsInteractive />

      {/* 🌟 Upgraded "Our Promise" Section (Clean Light Background + Connected Animated Roadmap) */}
      <section className="py-24 bg-gradient-to-b from-zinc-50 via-white to-amber-50/20 border-t border-b border-[#DEDEDE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] bg-[#FFD84D] px-3.5 py-1 rounded-full inline-block mb-3 font-dmsans border border-[#DEDEDE] shadow-sm">
              OUR PROMISE
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] font-space">
              Our Promise
            </h2>
            <p className="font-dmsans text-base sm:text-xl text-zinc-600 mt-2 italic">
              &ldquo;Every product. Every shipment. Every partnership — handled with care.&rdquo;
            </p>
          </motion.div>

          {/* Connected Roadmap Timeline */}
          <div className="relative mt-8">
            <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-[#DEDEDE] z-0">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-48 h-full bg-gradient-to-r from-transparent via-[#FFD84D] to-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {promiseSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isHovered = activeStepHover === idx;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onMouseEnter={() => setActiveStepHover(idx)}
                    onMouseLeave={() => setActiveStepHover(null)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`w-24 h-24 rounded-full bg-white border-2 flex items-center justify-center mb-5 relative shadow-sm transition-all duration-300 ${
                        isHovered
                          ? "border-[#111111] shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                          : "border-[#DEDEDE] group-hover:border-[#111111]"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-[#FFD84D] group-hover:bg-[#FF583E] group-hover:text-white transition-colors duration-300 shadow-inner">
                        <IconComponent className="w-7 h-7 transition-transform group-hover:scale-110 duration-300" />
                      </div>

                      <span className="absolute -top-2 px-2.5 py-0.5 rounded-full text-[10px] font-space font-bold bg-[#FFD84D] text-[#111111] shadow-sm border border-[#DEDEDE]">
                        {step.num}
                      </span>
                    </motion.div>

                    <h3 className="text-base sm:text-lg font-bold text-[#111111] font-space mb-1 group-hover:text-[#FF583E] transition-colors">
                      {step.num} — {step.name}
                    </h3>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] bg-[#FFD84D]/40 px-2.5 py-0.5 rounded-full mb-3 border border-[#DEDEDE] font-dmsans">
                      {step.highlight}
                    </span>

                    <p className="text-xs text-zinc-600 leading-relaxed font-normal font-dmsans max-w-[220px]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 Founder & Managing Director Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8">
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
                className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#DEDEDE] shadow-xl bg-zinc-100"
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
                  Founder &amp; Managing Director &bull; The Golden Star
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
                  href="https://wa.me/919345243790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#FF583E] text-white font-semibold text-xs shadow-sm transition-all hover:scale-105 font-space"
                >
                  <MessageCircle className="w-4 h-4 text-[#FFD84D]" />
                  <span>Direct WhatsApp: +91 9345243790</span>
                </a>

                <a
                  href="mailto:hameedsahul9978@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-zinc-50 text-[#111111] font-semibold text-xs border border-[#DEDEDE] shadow-sm transition-all hover:scale-105 font-space"
                >
                  <Mail className="w-4 h-4 text-[#111111]" />
                  <span>hameedsahul9978@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🌟 Closing CTA Section */}
      <section className="py-24 bg-[#111111] text-white text-center relative overflow-hidden border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 space-y-6 relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.24em] text-[#111111] bg-[#FFD84D] px-4 py-1.5 rounded-full border border-[#DEDEDE] font-dmsans shadow-sm">
            LET&apos;S CONNECT BEYOND BORDERS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight drop-shadow-lg">
            Looking for a Trusted Trade Partner?
          </h2>
          <p className="text-base sm:text-xl text-zinc-300 font-dmsans max-w-xl mx-auto leading-relaxed">
            &ldquo;Let&apos;s build a reliable supply connection.&rdquo;
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-dmsans">
            <button
              onClick={() => openQuoteModal("Home Footer CTA")}
              className="px-8 py-3.5 rounded-full bg-[#FF583E] hover:bg-[#E8492C] text-white font-bold text-sm shadow-xl hover:scale-105 transition-all font-space"
            >
              Get a Quote
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 transition-all hover:scale-105 backdrop-blur-md shadow-sm font-space"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
