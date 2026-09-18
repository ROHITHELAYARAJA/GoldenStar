"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const { showToast } = useQuoteModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Fruits",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Thank you! Your trade inquiry has been received. Founder Sahul Hameed & our export desk will reach out within 12 hours.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        product: "Fruits",
        quantity: "",
        message: "",
      });
    }, 700);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Subpage Hero Banner */}
      <section className="relative py-16 sm:py-20 border-b border-[#DEDEDE] bg-gradient-to-b from-zinc-50 via-white to-zinc-50 overflow-hidden">
        <Particles
          className="absolute inset-0 pointer-events-none opacity-20"
          quantity={25}
          color="#FFD84D"
          ease={60}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal animation="slide-down" delay={0.05}>
            <div className="badge-pill-gold mb-4 inline-block">
              <span className="uppercase tracking-wider text-[10px]">CONTACT EXPORT DESK</span>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={0.15}>
            <h1 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] mb-4">
              Let&apos;s Take Quality <span className="text-[#FF583E]">Beyond Borders</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade" delay={0.25}>
            <p className="font-dmsans text-base sm:text-lg text-zinc-700 italic max-w-2xl mx-auto">
              &ldquo;Whether you&apos;re looking for fresh fruits, quality vegetables, or authentic spices, we&apos;re ready to connect.&rdquo;
            </p>
            <p className="font-dmsans text-sm sm:text-base text-zinc-600 max-w-xl mx-auto mt-3 leading-relaxed font-normal">
              Tell us what you&apos;re looking for, and let&apos;s explore the possibilities together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Desk & Founder Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="slide-left" delay={0.1}>
              <div>
                <div className="badge-pill-gold mb-3 inline-block">
                  <span className="uppercase tracking-wider text-[10px]">DIRECT TRADE DESK</span>
                </div>
                <h2 className="font-space text-2xl sm:text-3xl font-bold text-[#111111] mb-2">
                  Direct Export Trade Desk
                </h2>
                <p className="font-dmsans text-sm text-zinc-600 leading-relaxed font-normal">
                  Connect directly with founder Sahul Hameed and our international agricultural trade coordinators.
                </p>
              </div>
            </ScrollReveal>

            {/* Founder Profile Card - Professional Brand Theme */}
            <ScrollReveal animation="slide-up" delay={0.15}>
              <div className="rounded-3xl p-6 bg-white text-[#111111] border-2 border-[#F9B637]/40 shadow-sm hover:shadow-md transition-all flex items-center gap-5">
                <div className="relative h-20 w-20 rounded-2xl overflow-hidden border-2 border-[#F9B637]/50 shrink-0 bg-zinc-50 shadow-xs">
                  <Image
                    src="/assets/images/branding/founder.png"
                    alt="Sahul Hameed"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-space font-bold uppercase tracking-[0.2em] text-[#FB6C00] block">
                    Proprietor &amp; Managing Director
                  </span>
                  <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-[#111111] mt-0.5 tracking-tight">
                    Sahul Hameed
                  </h3>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone & WhatsApp Card */}
            <ScrollReveal animation="slide-up" delay={0.2}>
              <div className="rounded-3xl p-6 bg-white border border-[#DEDEDE] hover:border-[#FF583E] flex items-start gap-4 shadow-sm transition-colors">
                <div className="p-3 rounded-2xl bg-[#FFD84D]/30 text-[#111111] border border-[#FFD84D] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-space font-bold uppercase tracking-wider text-zinc-500 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="https://wa.me/919345243790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-space text-base font-bold text-[#111111] mt-1 hover:text-[#FF583E] transition-colors block"
                  >
                    +91 9345243790
                  </a>
                  <p className="font-dmsans text-xs text-zinc-500 mt-0.5">
                    Direct WhatsApp &amp; Export Inquiry Line
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal animation="slide-up" delay={0.25}>
              <div className="rounded-3xl p-6 bg-white border border-[#DEDEDE] hover:border-[#FF583E] flex items-start gap-4 shadow-sm transition-colors">
                <div className="p-3 rounded-2xl bg-[#FFD84D]/30 text-[#111111] border border-[#FFD84D] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-space font-bold uppercase tracking-wider text-zinc-500 block">
                    Official Email Address
                  </span>
                  <a
                    href="mailto:hameedsahul9978@gmail.com"
                    className="font-space text-sm font-bold text-[#111111] mt-1 hover:text-[#FF583E] transition-colors block"
                  >
                    hameedsahul9978@gmail.com
                  </a>
                  <p className="font-dmsans text-xs text-zinc-500 mt-0.5">
                    Direct Executive Desk Inbox
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Official Registered Address Card */}
            <ScrollReveal animation="slide-up" delay={0.3}>
              <div className="rounded-3xl p-6 bg-white border border-[#DEDEDE] hover:border-[#FF583E] flex items-start gap-4 shadow-sm transition-colors">
                <div className="p-3 rounded-2xl bg-[#FFD84D]/30 text-[#111111] border border-[#FFD84D] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-space font-bold uppercase tracking-wider text-zinc-500 block">
                    Registered Office Address
                  </span>
                  <p className="font-space text-sm font-bold text-[#111111] mt-1 leading-snug">
                    The Golden Star Company
                  </p>
                  <p className="font-dmsans text-xs text-zinc-600 mt-1 leading-relaxed">
                    Building No./Flat No. 876,<br />
                    Pudukkottai ullur main road, Naduvikkadu,<br />
                    Adiramapattinam, Thanjavur District,<br />
                    Tamil Nadu, PIN Code: 614701, India
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* SLA Badge */}
            <ScrollReveal animation="slide-up" delay={0.35}>
              <div className="p-6 bg-zinc-50 border border-[#DEDEDE]">
                <div className="flex items-center gap-3 mb-1.5">
                  <Clock className="w-5 h-5 text-[#FF583E]" />
                  <span className="font-space text-sm font-bold text-[#111111]">12-Hour Export Quotation Guarantee</span>
                </div>
                <p className="font-dmsans text-xs text-zinc-700 leading-relaxed">
                  All inquiries regarding container quantities, phytosanitary certifications, and FOB/CIF rates are answered within 12 hours.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Send Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="slide-right" delay={0.15}>
              <div className="p-8 sm:p-12 shadow-sm border border-[#DEDEDE] bg-white">
                <div className="mb-8 pb-6 border-b border-[#DEDEDE]">
                  <div className="badge-pill-gold mb-3 inline-block">
                    <span className="uppercase tracking-wider text-[10px]">SEND AN ENQUIRY</span>
                  </div>
                  <h2 className="font-space text-2xl sm:text-3xl font-bold text-[#111111] mb-2">
                    Request Quotation &amp; Supply Specs
                  </h2>
                  <p className="font-dmsans text-xs sm:text-sm text-zinc-600">
                    Fill in your commodity and volume requirements below to receive a customized export trade proposal.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-800 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#DEDEDE] focus:border-[#FF583E] focus:outline-none focus:ring-2 focus:ring-[#FF583E]/20 bg-white text-sm font-dmsans text-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-800 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Global Foods Trading LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-[#DEDEDE] focus:border-[#FF583E] focus:outline-none focus:ring-2 focus:ring-[#FF583E]/20 bg-white text-sm font-dmsans text-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. buyer@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#DEDEDE] focus:border-[#FF583E] focus:outline-none focus:ring-2 focus:ring-[#FF583E]/20 bg-white text-sm font-dmsans text-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-800 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-[#DEDEDE] focus:border-[#FF583E] focus:outline-none focus:ring-2 focus:ring-[#FF583E]/20 bg-white text-sm font-dmsans text-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-800 mb-2">
                        Product Interested In
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3 border border-[#DEDEDE] focus:border-[#FF583E] focus:outline-none focus:ring-2 focus:ring-[#FF583E]/20 bg-white text-sm font-dmsans text-[#111111]"
                      >
                        <option value="Fruits">Fruits (Mango, Banana, Pomegranate, Grapes, etc.)</option>
                        <option value="Vegetables">Vegetables (Onion, Potato, Tomato, Okra, Chilli, Carrot)</option>
                        <option value="Spices">Spices (Pepper, Cardamom, Turmeric, Cumin, Cloves)</option>
                        <option value="Mixed Commodity Container">Mixed Commodity Container</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-800 mb-2">
                        Quantity / Requirement
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1x40ft Reefer FCL or 10 Metric Tons"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 border border-[#DEDEDE] focus:border-[#FF583E] focus:outline-none focus:ring-2 focus:ring-[#FF583E]/20 bg-white text-sm font-dmsans text-[#111111]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-800 mb-2">
                      Message &amp; Destination Port
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us your destination seaport/airport, preferred packaging specs, or delivery schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DEDEDE] focus:border-[#FF583E] focus:outline-none focus:ring-2 focus:ring-[#FF583E]/20 bg-white text-sm font-dmsans text-[#111111]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 font-space font-bold text-sm bg-[#111111] hover:bg-[#FF583E] text-white shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#FFD84D]" />
                    <span>{isSubmitting ? "TRANSMITTING INQUIRY..." : "SEND ENQUIRY →"}</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom Highlight Quote */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-[#DEDEDE]">
        <ScrollReveal animation="scale">
          <div className="relative border border-[#DEDEDE] bg-gradient-to-b from-zinc-50 to-white p-10 sm:p-14 text-center shadow-sm overflow-hidden">
            <Particles
              className="absolute inset-0 pointer-events-none opacity-20"
              quantity={20}
              color="#FF583E"
              ease={50}
            />
            <div className="relative z-10">
              <div className="badge-pill-gold mb-4 inline-block">
                <span className="uppercase tracking-wider text-[10px]">THE GOLDEN STAR COMMITMENT</span>
              </div>
              <h2 className="font-space text-2xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-3">
                Your Requirement. Our Connection. <span className="text-[#FF583E]">Global Possibilities.</span>
              </h2>
              <p className="font-dmsans text-base sm:text-lg text-zinc-600 max-w-xl mx-auto italic font-normal">
                &ldquo;Quality that travels. Trust that stays.&rdquo;
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
