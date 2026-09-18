"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import WhyChooseUsInteractive from "@/components/WhyChooseUsInteractive";
import {
  Globe,
  MapPin,
  CheckCircle2,
  PackageCheck,
  TrendingUp,
  ShieldCheck,
  Truck,
  ArrowUpRight,
} from "lucide-react";

export default function WhyUsPage() {
  const { openQuoteModal } = useQuoteModal();

  const approachItems = [
    {
      icon: MapPin,
      title: "Direct Sourcing Network",
      desc: "Partnerships across key agricultural belts in India",
      details: "Sourcing directly from farms ensures optimal harvest quality, cost efficiency, and standard compliance.",
    },
    {
      icon: PackageCheck,
      title: "Quality Calibration",
      desc: "Selection, sorting, and grading based on export criteria",
      details: "Every batch is inspected for size, colour, moisture, and international food safety requirements.",
    },
    {
      icon: Truck,
      title: "Cold-Chain Logistics",
      desc: "Coordinating multi-modal and maritime reefer shipping",
      details: "End-to-end temperature management preserves fresh farm condition from harvest to foreign seaport.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Trade Support",
      desc: "Phytosanitary clearance, documentation, and compliance",
      details: "We ensure accurate documentation, container inspection reports, and seamless port customs clearance.",
    },
  ];

  const advantages = [
    {
      num: "01",
      title: "Direct Sourcing at the Root",
      desc: "We work directly with growers and farm clusters, giving us visibility into harvest schedules, product availability, and consistent quality.",
      point: "No intermediary brokers; direct farm transparency",
    },
    {
      num: "02",
      title: "Reliable Quality Across Batches",
      desc: "Quality is not accidental. We implement multi-level inspection protocols covering grading, sorting, packaging, and phytosanitary health.",
      point: "Consistent sizing, appearance, and shelf life",
    },
    {
      num: "03",
      title: "Global Supply Corridors",
      desc: "Whether full container loads (FCL) by maritime sea freight or rapid air cargo for delicate produce, we manage international logistics seamlessly.",
      point: "Punctual container coordination and port handover",
    },
    {
      num: "04",
      title: "Transparent & Responsive Partnership",
      desc: "We prioritize honest communication, transparent contract execution, and long-term business relationships built on dependability.",
      point: "Direct communication with managing director Sahul Hameed",
    },
  ];

  const tradeJourney = [
    { step: "01", name: "SOURCE", detail: "Direct farm harvest" },
    { step: "02", name: "SELECT", detail: "Rigorous quality sorting" },
    { step: "03", name: "PREPARE", detail: "Custom export packaging" },
    { step: "04", name: "SHIP", detail: "Cold-chain reefer transit" },
    { step: "05", name: "DELIVER", detail: "Prompt international arrival" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Subpage Hero Banner */}
      <section className="py-20 border-b border-[#DEDEDE] bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <span className="badge-pill-gold inline-block mb-3">
            GLOBAL REACH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold tracking-tight text-[#111111] mb-3">
            Connecting Producers With <span className="font-dmsans italic text-[#FF583E] font-normal">Markets Worldwide</span>
          </h1>
          <p className="font-dmsans text-base sm:text-xl text-zinc-600 italic">
            &ldquo;From Local Origins to Global Opportunities.&rdquo;
          </p>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto mt-4 leading-relaxed font-dmsans">
            The Golden Star connects trusted agricultural sources with businesses across domestic and international markets, creating reliable pathways for quality fruits, vegetables, and spices to reach new destinations.
          </p>
        </div>
      </section>

      {/* Ocean Freight Showcase Banner */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#DEDEDE] shadow-lg">
          <Image
            src="/assets/images/hero/hero-container-vessel.jpg"
            alt="International Ocean Freight Shipping"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
            <span className="badge-pill-gold mb-2 w-fit">
              Trade Reach &amp; Integrity
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-space text-white max-w-xl">
              Reliable Corridors Across Global Seaports
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mt-2 font-dmsans">
              Bridging the gap between India’s agricultural harvest and international trade hubs across the Middle East, Europe, Southeast Asia, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 Interactive Metric Sourcing Showcase */}
      <WhyChooseUsInteractive />

      {/* Section 1: Our Global Approach */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-pill-gold inline-block mb-3">
            OUR GLOBAL APPROACH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#111111] mb-3">
            One Source. Many Possibilities.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-dmsans">
            We work across the agricultural supply chain to connect quality products with the right markets. Our approach combines trusted sourcing, careful product selection, efficient coordination, and dependable trade support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="luxury-card p-6 sm:p-8 flex flex-col justify-between group shadow-sm border border-[#DEDEDE]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD84D]/30 border border-[#FFD84D] flex items-center justify-center text-[#111111] mb-6 group-hover:bg-[#FF583E] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-space text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-dmsans">
                    {item.desc}
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-relaxed border-t border-[#DEDEDE] pt-3 font-dmsans">
                    {item.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Why The Golden Star */}
      <section className="py-20 bg-zinc-50 border-y border-[#DEDEDE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-pill-gold inline-block mb-3">
              WHY THE GOLDEN STAR?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#111111] mb-3">
              More Than a Supplier. A Trusted Connection.
            </h2>
            <p className="font-dmsans text-sm sm:text-base text-zinc-600">
              Built on transparency, consistency, and dedication to international export standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {advantages.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="luxury-card p-6 sm:p-8 bg-white shadow-sm border border-[#DEDEDE]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="badge-pill-gold text-[10px] font-space">Advantage {item.num}</div>
                  <span className="font-space font-bold text-xl text-[#FF583E]">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-space text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 font-dmsans">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-xs text-zinc-700 pt-3 border-t border-[#DEDEDE] font-dmsans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF583E] shrink-0" />
                  <span>{item.point}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Trade Journey */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-pill-gold inline-block mb-3">
            OUR TRADE JOURNEY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#111111] mb-3">
            End-to-End Trade Integrity
          </h2>
          <p className="font-dmsans font-semibold text-lg text-[#FF583E]">
            SOURCE &rarr; SELECT &rarr; PREPARE &rarr; SHIP &rarr; DELIVER
          </p>
          <p className="text-xs text-zinc-600 mt-2 font-dmsans">
            Every stage is connected to create a simple and dependable journey from origin to destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tradeJourney.map((step, idx) => (
            <div
              key={idx}
              className="luxury-card p-6 text-center flex flex-col justify-center items-center shadow-sm border border-[#DEDEDE]"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFD84D] border border-[#FFD84D] flex items-center justify-center font-space font-bold text-sm text-[#111111] mb-4">
                {step.step}
              </div>
              <h4 className="text-base font-bold font-space text-[#111111] tracking-wider mb-1">
                {step.name}
              </h4>
              <p className="text-xs text-zinc-600 font-dmsans">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Closing CTA */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center">
        <div className="rounded-3xl border border-[#DEDEDE] bg-white p-10 sm:p-14 shadow-sm">
          <span className="badge-pill-gold mb-4 font-dmsans">LET’S CONNECT BEYOND BORDERS</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#111111] mb-3">
            Your Market. Our Connections. New Possibilities.
          </h2>
          <p className="font-dmsans text-base sm:text-lg text-zinc-600 mb-8 max-w-xl mx-auto">
            &ldquo;Looking for a reliable source of fruits, vegetables, or spices?&rdquo;
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal("Global Trade Inquiry")}
              className="btn-pill-primary text-sm py-3 px-7 font-space"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFD84D]" />
            </button>
            <Link href="/contact" className="btn-pill-secondary text-sm py-3 px-7 font-space">
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
