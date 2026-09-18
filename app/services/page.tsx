"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  Compass,
  CheckCircle2,
  Package,
  Globe2,
  Truck,
  ArrowUpRight,
  Shield,
  Sparkles,
} from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  const services = [
    {
      num: "01",
      badge: "Sourcing",
      title: "The Right Source. The Right Product.",
      desc: "We connect with trusted growers and suppliers to source quality fruits, vegetables, and spices based on market and customer requirements.",
      points: [
        "Direct-from-farm grower partnerships across certified agrarian belts",
        "Rigorous origin verification & crop traceability",
        "Seasonal harvest planning & supply continuity guarantees",
      ],
      icon: Compass,
    },
    {
      num: "02",
      badge: "Quality Selection",
      title: "Quality Starts at the Source.",
      desc: "Every product is carefully selected with attention to freshness, quality, specifications, and customer expectations.",
      points: [
        "Comprehensive visual, size, color, and brix inspection",
        "Certified phytosanitary and food safety compliance",
        "Zero-tolerance sorting protocols for export grades",
      ],
      icon: CheckCircle2,
    },
    {
      num: "03",
      badge: "Packaging",
      title: "Prepared for the Journey.",
      desc: "We ensure products are appropriately prepared and packed to support quality, protection, and efficient handling throughout the supply chain.",
      points: [
        "Ventilated corrugated master cartons & moisture-resistant bags",
        "Custom private labelling, barcode tagging & palletization",
        "Shock-absorbing foam netting & food-grade liner materials",
      ],
      icon: Package,
    },
    {
      num: "04",
      badge: "Import & Export",
      title: "Moving Quality Across Borders.",
      desc: "We coordinate the key requirements involved in international trade, helping agricultural products move smoothly between markets.",
      points: [
        "Export documentation (Bill of Lading, Certificate of Origin, Phytosanitary)",
        "Global customs clearance coordination & tariff compliance",
        "Flexible trade terms: FOB, CIF, CFR, and CNF",
      ],
      icon: Globe2,
    },
    {
      num: "05",
      badge: "Logistics",
      title: "Every Shipment, Carefully Connected.",
      desc: "We coordinate transportation and shipment requirements to help products move efficiently from their origin to their destination.",
      points: [
        "Cold-chain temperature-controlled reefer container monitoring",
        "Rapid express air freight for perishable commodities",
        "End-to-end milestone tracking from port of loading to final discharge",
      ],
      icon: Truck,
    },
  ];

  const roadmap = [
    { step: "01", name: "SOURCE", desc: "Contracted vetted farms" },
    { step: "02", name: "SELECT", desc: "Rigorous grade inspection" },
    { step: "03", name: "PACK", desc: "Export-grade packing" },
    { step: "04", name: "SHIP", desc: "Maritime & air logistics" },
    { step: "05", name: "DELIVER", desc: "On-time port destination" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Subpage Hero Banner */}
      <section className="relative py-16 sm:py-20 border-b border-[#DEDEDE] bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
        <Particles
          className="absolute inset-0 pointer-events-none opacity-20"
          quantity={25}
          color="#FFD84D"
          ease={60}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <ScrollReveal animation="slide-down" delay={0.05}>
            <div className="badge-pill-gold mb-4 font-dmsans inline-block">OUR SERVICES</div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={0.15}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space tracking-tight text-[#111111] mb-3">
              What We Do — <span className="text-[#FF583E]">From Source to Destination</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade" delay={0.25}>
            <p className="font-dmsans text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
              From sourcing to delivery, The Golden Star brings together the right products, people, and processes to create a smooth and reliable agricultural trade experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Port Operations Showcase Visual */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="scale" delay={0.1}>
          <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#DEDEDE] shadow-xl">
            <Image
              src="/assets/images/hero/hero-container-vessel.jpg"
              alt="International Cargo Port Operations"
              fill
              className="object-cover brightness-95"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-12 text-white">
              <span className="badge-pill-gold mb-2 w-fit font-dmsans text-[10px] sm:text-xs">
                International Trade Logistics
              </span>
              <h2 className="text-lg sm:text-2xl font-bold font-space text-white max-w-xl">
                High-Precision Cold-Chain &amp; Global Port Coordination
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mt-2 font-dmsans font-normal">
                Every shipment is synchronized with world-class maritime carriers to ensure maximum shelf life and peak freshness upon global arrival.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5 Service Pillars + 1 Inquiry Card (6 Cards Total) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="badge-pill-gold mb-3 font-dmsans inline-block">CORE COMPETENCIES</div>
            <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#111111] mb-3">
              Five Pillars of Trade Excellence
            </h2>
            <p className="text-xs sm:text-sm font-dmsans text-zinc-600">
              Comprehensive export and supply solutions engineered to eliminate friction from international agricultural procurement.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={idx}
                animation="slide-up"
                delay={(idx % 3) * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="luxury-card p-5 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-[0_16px_36px_-12px_rgba(255,88,62,0.18)] hover:border-[#FF583E] transition-all duration-300 rounded-3xl h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFD84D]/30 border border-[#FFD84D] flex items-center justify-center text-[#111111] group-hover:bg-[#FF583E] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-space font-bold text-xl sm:text-2xl text-zinc-300 group-hover:text-[#FF583E] transition-colors duration-300">
                        {item.num}
                      </span>
                    </div>

                    <span className="badge-pill-gold text-[10px] mb-2 sm:mb-3 font-dmsans font-semibold uppercase">{item.badge}</span>
                    <h3 className="text-base sm:text-lg font-bold font-space text-[#111111] mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-dmsans text-zinc-600 leading-relaxed mb-4 sm:mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-3 sm:pt-4 border-t border-[#DEDEDE]">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs font-dmsans text-zinc-700">
                          <span className="text-[#111111] font-bold text-xs shrink-0">&bull;</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#DEDEDE] flex items-center justify-between font-dmsans">
                    <span className="text-xs font-semibold text-zinc-400 group-hover:text-[#FF583E] transition-colors">
                      Specification Ready
                    </span>
                    <button
                      onClick={() => openQuoteModal(`Service - ${item.title}`)}
                      className="p-2 rounded-xl bg-zinc-100 group-hover:bg-[#FF583E] group-hover:text-white text-zinc-700 transition-all flex items-center justify-center"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}

          {/* Quick Inquiry Card */}
          <ScrollReveal animation="slide-up" delay={0.3} className="h-full">
            <div className="luxury-card p-5 sm:p-8 bg-[#111111] text-white border border-[#DEDEDE] flex flex-col justify-between shadow-xl rounded-3xl h-full">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFD84D] text-[#111111] flex items-center justify-center mb-4 sm:mb-6">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-white/10 text-white mb-2 sm:mb-3 font-dmsans uppercase">
                  Custom Inquiries
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-space text-white mb-2 sm:mb-3">
                  Tailored Export Solutions
                </h3>
                <p className="text-xs sm:text-sm font-dmsans text-zinc-300 leading-relaxed mb-3 sm:mb-4 font-normal">
                  Require customized container mix, specific mesh packaging sizes, or specialized phytosanitary parameters?
                </p>
                <p className="text-xs font-dmsans text-zinc-400">
                  Our export desk creates bespoke contracts aligned with your destination country port regulations.
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 font-dmsans">
                <button
                  onClick={() => openQuoteModal("Custom Trade Requirements")}
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-[#FF583E] hover:bg-[#FFD84D] hover:text-[#111111] text-white font-space font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Request Custom Plan</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategic Workflow Roadmap */}
      <section className="py-24 bg-zinc-50 border-y border-[#DEDEDE]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="badge-pill-gold mb-3 font-dmsans inline-block">SEAMLESS PIPELINE</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#111111] mb-3">
                One Journey. Every Step Connected.
              </h2>
              <p className="font-dmsans font-semibold text-lg text-[#FF583E]">
                SOURCE &rarr; SELECT &rarr; PACK &rarr; SHIP &rarr; DELIVER
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roadmap.map((step, idx) => (
              <ScrollReveal
                key={idx}
                animation="slide-up"
                delay={idx * 0.1}
                className="h-full"
              >
                <div
                  className="luxury-card p-6 text-center flex flex-col justify-center items-center shadow-sm h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFD84D] border border-[#FFD84D] flex items-center justify-center font-bold text-sm text-[#111111] font-space mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold text-[#111111] font-space tracking-wider mb-1">
                    {step.name}
                  </h4>
                  <p className="text-xs text-zinc-600 font-dmsans">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal animation="scale">
          <div className="relative rounded-3xl border border-[#DEDEDE] bg-white p-12 sm:p-16 shadow-sm overflow-hidden">
            <Particles
              className="absolute inset-0 pointer-events-none opacity-20"
              quantity={20}
              color="#FF583E"
              ease={50}
            />
            <div className="relative z-10">
              <div className="badge-pill-gold mb-4 font-dmsans inline-block">TRADE ACTION</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-space tracking-tight text-[#111111] mb-3">
                Let’s Move Quality Forward.
              </h2>
              <p className="font-dmsans text-base sm:text-lg text-zinc-600 mb-8 max-w-xl mx-auto">
                Ready to streamline your global agricultural supply chain?
              </p>

              <button
                onClick={() => openQuoteModal("Services Inquiry")}
                className="btn-pill-primary text-sm py-3.5 px-8 font-space"
              >
                <span>DISCUSS YOUR REQUIREMENTS</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD84D]" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
