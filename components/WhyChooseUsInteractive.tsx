"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Package, Truck, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { AnimatedNumber } from "@/components/ui/animated-number";

interface MetricCard {
  id: number;
  stat: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export default function WhyChooseUsInteractive() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const { openQuoteModal } = useQuoteModal();

  const metrics: MetricCard[] = [
    {
      id: 0,
      stat: "50+",
      title: "Sourcing Locations",
      shortDesc: "Direct farm partnerships across South India",
      fullDesc:
        "Direct partnerships across 50+ sourcing points in South India — from Guntur chillies and Salem mangoes to Erode turmeric and Kerala black pepper.",
      icon: Globe,
      tag: "PAN-SOUTH INDIA",
    },
    {
      id: 1,
      stat: "100+",
      title: "Pan-India Supplier Network",
      shortDesc: "Vetted agricultural farm clusters & growers",
      fullDesc:
        "Vetted agricultural farm clusters, certified growers, and cold-storage facilities ensuring round-the-year harvest continuity and uncompromising freshness.",
      icon: MapPin,
      tag: "CERTIFIED GROWERS",
    },
    {
      id: 2,
      stat: "6+",
      title: "Multi-Category Trade",
      shortDesc: "Fruits, Vegetables, Spices & Commodities",
      fullDesc:
        "Integrated procurement across Fresh Fruits, Farm Vegetables, Authentic Spices, and Essential Food Commodities tailored to destination market standards.",
      icon: Package,
      tag: "DIVERSE PORTFOLIO",
    },
    {
      id: 3,
      stat: "50+",
      title: "Global Distribution",
      shortDesc: "Worldwide port-to-port maritime shipping",
      fullDesc:
        "Dedicated maritime reefer container booking, multi-modal cold-chain transport, phytosanitary clearance, and punctual delivery to global trade hubs.",
      icon: Truck,
      tag: "WORLDWIDE PORTS",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden border-t border-[#DEDEDE]">
      <div className="max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFD84D] border border-[#DEDEDE] shadow-sm text-xs font-space font-bold text-[#111111] mb-4"
          >
            <span className="tracking-wider uppercase text-[10px] font-space font-bold">
              TRUSTED TRADE CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight leading-tight"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dmsans text-sm sm:text-base text-zinc-600 mt-3 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            We are your trusted partner for agricultural trade with comprehensive solutions — connecting direct South Indian farms with discerning global importers.
          </motion.p>
        </div>

        {/* 🌟 Refined Clean Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setActiveCard(item.id)}
                className={`rounded-3xl p-6 sm:p-7 border shadow-sm transition-all duration-300 flex flex-col justify-between relative overflow-hidden group select-none cursor-pointer ${
                  isSelected
                    ? "bg-[#FFD84D]/15 border-[#111111] shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)]"
                    : "bg-white border-[#DEDEDE] hover:border-[#111111] hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.06)]"
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-[#DEDEDE] flex items-center justify-center text-[#111111] group-hover:bg-[#FF583E] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-space font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-[#DEDEDE] text-[#111111] group-hover:border-[#111111] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  {/* Refined Animated Stat Counter */}
                  <div className="mb-2">
                    <span className="font-space text-3xl sm:text-4xl font-bold tracking-tight leading-none text-[#111111] group-hover:text-[#FF583E] transition-colors duration-300">
                      <AnimatedNumber value={parseInt(item.stat)} suffix={item.stat.includes("+") ? "+" : ""} />
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-space text-base sm:text-lg font-bold tracking-tight mb-2 text-[#111111]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-dmsans text-xs sm:text-sm leading-relaxed text-zinc-600 font-normal">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 mt-5 border-t border-[#DEDEDE] flex items-center justify-between">
                  <span className="text-[11px] font-dmsans font-semibold text-zinc-500 group-hover:text-[#111111] transition-colors">
                    Standard Compliant
                  </span>
                  <div className="w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center text-zinc-700 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Fast Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-white border border-[#DEDEDE] p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FFD84D]/40 border border-[#FFD84D] flex items-center justify-center text-[#111111] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#111111] font-space">
                Need customized contract farming or designated CIF port terms?
              </p>
              <p className="text-[11px] sm:text-xs text-zinc-600 font-dmsans">
                Founder Sahul Hameed coordinates directly with sourcing hubs across Tamil Nadu &amp; South India.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto font-dmsans">
            <button
              onClick={() => openQuoteModal("Why Choose Us Section")}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#FF583E] text-white font-bold text-xs sm:text-sm transition-all shadow hover:scale-105 font-space"
            >
              Request Sourcing Quote
            </button>
            <a
              href="https://wa.me/919345243790"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white hover:bg-[#FFD84D]/30 border border-[#DEDEDE] text-[#111111] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 font-space"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
