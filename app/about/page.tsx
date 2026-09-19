"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  ArrowUpRight,
  ShieldCheck,
  Target,
  Eye,
  Globe,
  MapPin,
  MessageCircle,
  Mail,
  Award,
} from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Subpage Hero Banner */}
      <section className="relative py-12 sm:py-16 border-b border-[#DEDEDE] bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
        <Particles
          className="absolute inset-0 pointer-events-none opacity-20"
          quantity={25}
          color="#FFD84D"
          ease={60}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal animation="slide-down" delay={0.05}>
            <span className="badge-pill-gold inline-block mb-3">
              CORPORATE OVERVIEW
            </span>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={0.15}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-space tracking-tight text-[#111111] mb-3">
              Built to Connect. <span className="font-dmsans italic text-[#FF583E] font-normal">Driven to Deliver.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade" delay={0.25}>
            <p className="font-dmsans text-base sm:text-xl text-zinc-600 italic">
              &ldquo;Creating trusted connections between quality producers and global markets.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-10 sm:py-14 max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollReveal animation="slide-left">
            <div>
              <span className="badge-pill-gold inline-block mb-3">
                OUR IDENTITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-space tracking-tight text-[#111111] mb-2">
                Who Are We?
              </h2>
              <p className="font-dmsans font-semibold text-lg text-[#111111] mb-5">
                Rooted in Quality. Reaching the World.
              </p>
              <p className="text-base text-zinc-800 font-medium leading-relaxed mb-5 font-dmsans">
                <strong>The Golden Star</strong> connects the best of agriculture with the markets that need it. From fresh fruits and vegetables to authentic spices, we source with care and deliver with purpose — creating trusted connections across borders.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed font-dmsans">
                With deep-rooted relationships across India’s premier agricultural belts and extensive international maritime shipping corridors, we guarantee standard-compliant packing, rigorous phytosanitary certification, and uninterrupted supply chains.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={0.15}>
            <div className="luxury-card rounded-3xl p-0 overflow-hidden shadow-sm border border-[#DEDEDE]">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="/assets/images/hero/hero-container-vessel.jpg"
                  alt="Global Trade Connection Vessel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-6 text-white text-sm font-bold font-space">
                  Maritime Cargo Logistics / The Golden Star
                </span>
              </div>
              <div className="p-7 space-y-5 font-dmsans">
                <div className="border-b border-[#DEDEDE] pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF583E] block">
                    Direct Farm Sourcing
                  </span>
                  <h4 className="text-base font-bold font-space text-[#111111] mt-1">
                    Trusted Grower Network
                  </h4>
                  <p className="text-xs text-zinc-600 mt-1">
                    Procuring directly from vetted farmers practicing international Good Agricultural Practices (GAP).
                  </p>
                </div>
                <div className="border-b border-[#DEDEDE] pb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF583E] block">
                    Quality Assurance
                  </span>
                  <h4 className="text-base font-bold font-space text-[#111111] mt-1">
                    100% Sorting, Grading &amp; Inspection
                  </h4>
                  <p className="text-xs text-zinc-600 mt-1">
                    Certified phytosanitary protocols and customized export packaging.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF583E] block">
                    Maritime Logistics
                  </span>
                  <h4 className="text-base font-bold font-space text-[#111111] mt-1">
                    Cross-Border Cold-Chain Delivery
                  </h4>
                  <p className="text-xs text-zinc-600 mt-1">
                    Punctual maritime reefer transit and rapid air cargo connections.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-10 sm:py-14 bg-zinc-50 border-y border-[#DEDEDE]">
        <div className="max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="badge-pill-gold inline-block mb-3">
                EXECUTIVE LEADERSHIP
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-space tracking-tight text-[#111111]">
                Meet the Founder
              </h2>
              <p className="font-dmsans text-sm sm:text-base text-zinc-600 mt-2">
                &ldquo;Dedicated trade governance from origin to port of discharge.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scale" delay={0.1}>
            <div className="luxury-card p-8 sm:p-12 bg-white rounded-3xl max-w-5xl 2xl:max-w-6xl mx-auto shadow-sm border border-[#DEDEDE] flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-3xl overflow-hidden border-2 border-[#DEDEDE] shadow-lg shrink-0 bg-zinc-100">
                <Image
                  src="/assets/images/branding/founder.png"
                  alt="Sahul Hameed - Founder The Golden Star"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-4 text-left font-dmsans flex-1">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF583E] block font-space mb-1">
                    Managing Director &amp; Trade Lead
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold font-space text-[#111111]">
                    SAHUL HAMEED
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  Leading The Golden Star Company with direct oversight on agricultural farm partnerships, quality grading calibrations, custom export packing, and cross-border commercial trade relations.
                </p>

                {/* Key Governance Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <span className="text-[11px] font-bold text-[#FF583E] block font-space uppercase">Farm Origin</span>
                    <span className="text-xs font-semibold text-zinc-800">50+ Farm Clusters</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <span className="text-[11px] font-bold text-[#FF583E] block font-space uppercase">Port Shipping</span>
                    <span className="text-xs font-semibold text-zinc-800">Chennai &amp; Tuticorin</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <span className="text-[11px] font-bold text-[#FF583E] block font-space uppercase">Inspection</span>
                    <span className="text-xs font-semibold text-zinc-800">100% Certified Grades</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <a
                    href="mailto:hameedsahul9978@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#FF583E] text-white transition-all shadow-sm font-space font-bold hover:scale-105"
                  >
                    <Mail className="w-4 h-4 text-[#FFD84D]" />
                    <span>hameedsahul9978@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-1.5 text-zinc-700 bg-zinc-100 rounded-full px-4 py-2.5 text-xs border border-zinc-200">
                    <MapPin className="w-3.5 h-3.5 text-[#FF583E]" />
                    <span>Adiramapattinam, Thanjavur, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 sm:py-14 max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission */}
          <ScrollReveal animation="slide-left" delay={0.1} className="h-full">
            <div className="luxury-card rounded-3xl p-8 sm:p-10 border border-[#DEDEDE] h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#FFD84D]/30 text-[#111111] border border-[#FFD84D]">
                  <Target className="w-6 h-6" />
                </div>
                <span className="badge-pill-gold">STRATEGIC PURPOSE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-space text-[#111111] mb-2">
                Our Mission
              </h2>
              <p className="font-dmsans text-sm font-semibold text-[#FF583E] mb-4">
                Rooted in Origin. Driven by Purpose.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed font-dmsans">
                To take quality beyond its source — connecting trusted agricultural products with markets, businesses, and people around the world.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal animation="slide-right" delay={0.2} className="h-full">
            <div className="luxury-card rounded-3xl p-8 sm:p-10 border border-[#DEDEDE] h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#FFD84D]/30 text-[#111111] border border-[#FFD84D]">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="badge-pill-gold">GLOBAL OUTLOOK</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-space text-[#111111] mb-2">
                Our Vision
              </h2>
              <p className="font-dmsans text-sm font-semibold text-[#FF583E] mb-4">
                A World Connected by Quality.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed font-dmsans">
                To build a trusted global presence in agricultural trade, connecting exceptional products and reliable partners across borders while creating opportunities for sustainable growth.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-10 sm:py-14 max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <ScrollReveal animation="scale">
          <div className="relative rounded-3xl border border-[#DEDEDE] bg-white p-10 sm:p-14 text-center shadow-sm overflow-hidden">
            <Particles
              className="absolute inset-0 pointer-events-none opacity-20"
              quantity={20}
              color="#FF583E"
              ease={50}
            />
            <div className="relative z-10">
              <span className="badge-pill-gold mb-4 font-dmsans inline-block">TRADE CONNECT</span>
              <h2 className="text-2xl sm:text-4xl font-bold font-space tracking-tight text-[#111111] mb-3">
                Looking for a Trusted Trade Partner?
              </h2>
              <p className="font-dmsans text-base sm:text-lg text-zinc-600 mb-8 max-w-xl mx-auto">
                &ldquo;Let’s build a reliable supply connection.&rdquo;
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => openQuoteModal()}
                  className="btn-pill-primary text-sm py-3 px-8 font-space"
                >
                  <span>Get a Quote</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFD84D]" />
                </button>
                <Link href="/contact" className="btn-pill-secondary text-sm py-3 px-8 font-space">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

