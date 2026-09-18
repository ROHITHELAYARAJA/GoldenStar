"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { MapPin, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ProductsPage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeTab, setActiveTab] = useState<"all" | "fruits" | "vegetables" | "spices">("all");

  const fruits = [
    {
      title: "Fresh Mangoes",
      sub: "Alphonso, Banganapalli & Totapuri",
      img: "/assets/images/products/fruits/mango.jpg",
      desc: "Naturally sweet, farm-ripened premium mangoes with rich aroma and golden pulp. Ideal for international wholesale and retail distribution.",
      location: "Salem, Krishnagiri (TN) & Ratnagiri (MH)",
    },
    {
      title: "Cavendish Bananas",
      sub: "G9 Cavendish & Robusta",
      img: "/assets/images/products/fruits/banana.jpg",
      desc: "Premium G9 Cavendish bananas with uniform grade, excellent green shelf life, and international reefer shipping compliance.",
      location: "Theni, Pollachi (TN) & Andhra Pradesh",
    },
    {
      title: "Bhagwa Pomegranate",
      sub: "Deep Crimson & Soft Seeds",
      img: "/assets/images/products/fruits/pomegranate.jpg",
      desc: "Deep crimson Bhagwa pomegranates with soft, juicy arils and high antioxidant value. Export graded for sweetness and size.",
      location: "Solapur, Sangli (MH)",
    },
    {
      title: "Table Grapes",
      sub: "Thompson Seedless & Sonaka",
      img: "/assets/images/products/fruits/grapes.jpg",
      desc: "Crisp, sweet seedless table grapes with high Brix rating and firm berry structure for global cold-chain transit.",
      location: "Nashik, Sangli (MH)",
    },
    {
      title: "Tropical Papaya",
      sub: "Red Lady 786",
      img: "/assets/images/products/fruits/papaya.jpg",
      desc: "Naturally sweet Red Lady papayas with thick orange-red flesh, rich flavour, and exceptional keeping quality.",
      location: "Dindigul, Erode (TN) & Karnataka",
    },
    {
      title: "Pineapple & Apple",
      sub: "Queen Pineapple & Crisp Apples",
      img: "/assets/images/products/fruits/pineapple.jpg",
      desc: "Juicy Queen pineapples and crisp mountain apples carefully graded for optimal freshness, sweetness, and firm texture.",
      location: "Vazhakulam (KL) & Himachal Hills",
    },
  ];

  const vegetables = [
    {
      title: "Red & Pink Onions",
      sub: "Nashik & Bellary Graded",
      img: "/assets/images/products/vegetables/onion.jpg",
      desc: "Hand-picked red and pink onions with tight papery skin and long shelf life. Graded for global container shipping.",
      location: "Nashik (MH) & Dindigul (TN)",
    },
    {
      title: "Fresh Potatoes",
      sub: "Table & Processing Grade",
      img: "/assets/images/products/vegetables/potato.jpg",
      desc: "Superior table and processing potatoes with smooth skin, low sugar content, uniform size, and zero sprouting.",
      location: "Agra (UP) & Hassan (KA)",
    },
    {
      title: "Farm Tomatoes",
      sub: "Hybrid Firm Red",
      img: "/assets/images/products/vegetables/tomato.jpg",
      desc: "Firm, vine-ripened red hybrid tomatoes selected at breaker stage for optimal shelf life during maritime transit.",
      location: "Madanapalle (AP) & Dindigul (TN)",
    },
    {
      title: "Tender Okra (Lady Finger)",
      sub: "Spineless & Extra Crisp",
      img: "/assets/images/products/vegetables/okra.jpg",
      desc: "Tender, spineless green okra harvested fresh for optimal crunch, vibrant green color, and high market value.",
      location: "Erode, Salem (TN) & Gujarat",
    },
    {
      title: "Green Chilli",
      sub: "G4 & Teja Spicy Green",
      img: "/assets/images/products/vegetables/green-chilli.jpg",
      desc: "Fresh green chillies with crisp texture and moderate heat. Perfect for everyday cooking and international supply.",
      location: "Guntur (AP) & Salem (TN)",
    },
    {
      title: "Red Chilly",
      sub: "Guntur Sanam & Teja",
      img: "/assets/images/products/spices/red-chilli.jpg",
      desc: "Premium quality red chillies with perfect heat level and vibrant red color. Essential for culinary applications worldwide.",
      location: "Guntur, Warangal (TG)",
    },
    {
      title: "Fresh Carrots",
      sub: "Ooty Sweet Crisp",
      img: "/assets/images/products/vegetables/carrot.jpg",
      desc: "Crisp, sweet red and orange carrots hydro-cooled and packed for maximum freshness, sweetness, and crisp bite.",
      location: "Nilgiris / Ooty (TN)",
    },
  ];

  const spices = [
    {
      title: "Black Pepper",
      sub: "Tellicherry & Malabar Bold",
      img: "/assets/images/products/spices/black-pepper.jpg",
      desc: "Aromatic black pepper with bold flavor profile and high essential oil content. The king of spices for global cuisines.",
      location: "Kerala, Coorg (KA) & Wayanad (KL)",
    },
    {
      title: "Green Cardamom",
      sub: "Alleppey Extra Bold (8mm+)",
      img: "/assets/images/products/spices/cardamom.jpg",
      desc: "Extra bold green cardamom pods with intense aroma and high essential oil concentration. Hand-picked in the Western Ghats.",
      location: "Bodinayakanur (TN) & Idukki (KL)",
    },
    {
      title: "Turmeric",
      sub: "Salem High-Curcumin Finger",
      img: "/assets/images/products/spices/turmeric.jpg",
      desc: "High-curcumin golden turmeric fingers and powder with deep aroma and tested purity for food and wellness markets.",
      location: "Erode, Salem (TN) & Nizamabad",
    },
    {
      title: "Cumin Seeds (Jeera)",
      sub: "Sortex Cleaned 99.5%",
      img: "/assets/images/products/spices/cumin.jpg",
      desc: "Machine-cleaned Sortex cumin seeds with warm earthy aroma and high purity for worldwide culinary blends.",
      location: "Unjha (GJ) & Rajasthan",
    },
    {
      title: "Coriander",
      sub: "Green Bold Whole Seeds",
      img: "/assets/images/products/spices/coriander.jpg",
      desc: "Fragrant green and golden coriander seeds with sweet citrus notes, thoroughly cleaned for export packaging.",
      location: "Ramganj (RJ) & Guntur (AP)",
    },
    {
      title: "Cloves & Cinnamon",
      sub: "Whole Cloves & Ceylon Quills",
      img: "/assets/images/products/spices/cloves.jpg",
      desc: "High-oil whole cloves and authentic Ceylon cinnamon quills with rich warm aroma and premium grading.",
      location: "Kanyakumari (TN) & Kerala",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111] pb-20">
      {/* 🌟 Subpage Hero Banner */}
      <section className="relative py-20 border-b border-[#DEDEDE] bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
        <Particles
          className="absolute inset-0 pointer-events-none opacity-20"
          quantity={25}
          color="#FFD84D"
          ease={60}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <ScrollReveal animation="slide-down" delay={0.05}>
            <span className="badge-pill-gold inline-block mb-3">
              OUR PRODUCTS
            </span>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={0.15}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold tracking-tight text-[#111111] mb-3">
              A World of <span className="font-dmsans italic text-[#FF583E] font-normal">Freshness &amp; Flavour</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade" delay={0.25}>
            <p className="font-dmsans text-base sm:text-xl text-zinc-600 italic">
              &ldquo;Premium fruits, vegetables, and spices sourced with care for markets around the world.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 🌟 Interactive Category Filter Tabs (Sleek Horizontal Segmented Bar - No Awkward Wrapping) */}
      <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade" delay={0.1}>
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 p-1.5 bg-zinc-100 border border-[#DEDEDE] max-w-2xl mx-auto shadow-sm">
            {[
              { id: "all", label: "All Commodities" },
              { id: "fruits", label: "Fruits" },
              { id: "vegetables", label: "Vegetables" },
              { id: "spices", label: "Chillies & Spices" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap py-2.5 px-4 sm:px-6 text-xs font-space font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                  activeTab === tab.id
                    ? "bg-[#111111] text-[#FFD84D] border border-[#111111] shadow-md scale-[1.02]"
                    : "text-zinc-600 hover:text-[#111111] hover:bg-white font-semibold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 🌟 Section 1: Fruits (Responsive 2-Column on Mobile, 3-Column on Desktop) */}
      {(activeTab === "all" || activeTab === "fruits") && (
        <section className="py-8 sm:py-12 max-w-7xl mx-auto px-3 sm:px-6" id="fruits">
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl font-space font-bold text-[#111111]">
                Fresh Fruits
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-dmsans font-normal">
                Naturally grown and carefully selected fruits sourced for quality, freshness, and reliable global supply.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {fruits.map((item, idx) => (
              <ScrollReveal
                key={idx}
                animation="slide-up"
                delay={(idx % 3) * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#DEDEDE] p-3 sm:p-5 shadow-sm hover:shadow-[0_16px_36px_-12px_rgba(255,88,62,0.18)] hover:border-[#FF583E] transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Clean Image Frame */}
                    <div className="relative h-32 sm:h-52 w-full overflow-hidden bg-zinc-100 border border-[#DEDEDE] mb-3 sm:mb-4">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Product Title */}
                    <h3 className="text-sm sm:text-lg font-bold font-space text-[#111111] mb-1 group-hover:text-[#FF583E] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Short & Punchy Description */}
                    <p className="text-[11px] sm:text-xs font-dmsans text-zinc-600 leading-snug sm:leading-relaxed font-normal mb-2 sm:mb-4 min-h-[28px] sm:min-h-[38px] line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Location Origin */}
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-zinc-700 font-medium mb-3 sm:mb-5 pb-2 sm:pb-3 border-b border-[#DEDEDE] font-dmsans">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF583E] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>

                  {/* Enquiry Button */}
                  <button
                    onClick={() => openQuoteModal(`Fruits - ${item.title}`)}
                    className="w-full py-2 sm:py-2.5 bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-[11px] sm:text-xs transition-all duration-200 shadow flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD84D]" />
                  </button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* 🌟 Section 2: Vegetables (Responsive 2-Column on Mobile, 3-Column on Desktop) */}
      {(activeTab === "all" || activeTab === "vegetables") && (
        <section className="py-8 sm:py-12 max-w-7xl mx-auto px-3 sm:px-6 border-t border-[#DEDEDE]" id="vegetables">
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl font-space font-bold text-[#111111]">
                Fresh Vegetables
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-dmsans font-normal">
                Quality vegetables carefully sourced and handled to meet the strict requirements of international markets.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {vegetables.map((item, idx) => (
              <ScrollReveal
                key={idx}
                animation="slide-up"
                delay={(idx % 3) * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#DEDEDE] p-3 sm:p-5 shadow-sm hover:shadow-[0_16px_36px_-12px_rgba(255,88,62,0.18)] hover:border-[#FF583E] transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Clean Image Frame */}
                    <div className="relative h-32 sm:h-52 w-full overflow-hidden bg-zinc-100 border border-[#DEDEDE] mb-3 sm:mb-4">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Product Title */}
                    <h3 className="text-sm sm:text-lg font-bold font-space text-[#111111] mb-1 group-hover:text-[#FF583E] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Short & Punchy Description */}
                    <p className="text-[11px] sm:text-xs font-dmsans text-zinc-600 leading-snug sm:leading-relaxed font-normal mb-2 sm:mb-4 min-h-[28px] sm:min-h-[38px] line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Location Origin */}
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-zinc-700 font-medium mb-3 sm:mb-5 pb-2 sm:pb-3 border-b border-[#DEDEDE] font-dmsans">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF583E] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>

                  {/* Enquiry Button */}
                  <button
                    onClick={() => openQuoteModal(`Vegetables - ${item.title}`)}
                    className="w-full py-2 sm:py-2.5 bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-[11px] sm:text-xs transition-all duration-200 shadow flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD84D]" />
                  </button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* 🌟 Section 3: Chillies & Spices (Responsive 2-Column on Mobile, 3-Column on Desktop) */}
      {(activeTab === "all" || activeTab === "spices") && (
        <section className="py-8 sm:py-12 max-w-7xl mx-auto px-3 sm:px-6 border-t border-[#DEDEDE]" id="spices">
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl font-space font-bold text-[#111111]">
                Chillies &amp; Spices
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 font-dmsans font-normal">
                Premium quality spices and chillies sourced from the finest growing regions across India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {spices.map((item, idx) => (
              <ScrollReveal
                key={idx}
                animation="slide-up"
                delay={(idx % 3) * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#DEDEDE] p-3 sm:p-5 shadow-sm hover:shadow-[0_16px_36px_-12px_rgba(255,88,62,0.18)] hover:border-[#FF583E] transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Clean Image Frame */}
                    <div className="relative h-32 sm:h-52 w-full overflow-hidden bg-zinc-100 border border-[#DEDEDE] mb-3 sm:mb-4">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Product Title */}
                    <h3 className="text-sm sm:text-lg font-bold font-space text-[#111111] mb-1 group-hover:text-[#FF583E] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Short & Punchy Description */}
                    <p className="text-[11px] sm:text-xs font-dmsans text-zinc-600 leading-snug sm:leading-relaxed font-normal mb-2 sm:mb-4 min-h-[28px] sm:min-h-[38px] line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Location Origin */}
                    <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-zinc-700 font-medium mb-3 sm:mb-5 pb-2 sm:pb-3 border-b border-[#DEDEDE] font-dmsans">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF583E] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>

                  {/* Enquiry Button */}
                  <button
                    onClick={() => openQuoteModal(`Spices - ${item.title}`)}
                    className="w-full py-2 sm:py-2.5 bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-[11px] sm:text-xs transition-all duration-200 shadow flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD84D]" />
                  </button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* 🌟 Bottom Call-to-Action */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="scale">
          <div className="relative border border-[#DEDEDE] bg-white p-8 sm:p-14 text-center shadow-sm overflow-hidden">
            <Particles
              className="absolute inset-0 pointer-events-none opacity-20"
              quantity={20}
              color="#FF583E"
              ease={50}
            />
            <div className="relative z-10">
              <span className="badge-pill-gold inline-block mb-3">
                CUSTOM EXPORT SPECIFICATIONS
              </span>
              <h2 className="text-xl sm:text-3xl font-space font-bold tracking-tight text-[#111111] mb-3">
                Sourced With Care. <span className="text-[#FF583E]">Delivered With Purpose.</span>
              </h2>
              <p className="text-xs sm:text-base font-dmsans text-zinc-600 mb-8 max-w-xl mx-auto leading-relaxed">
                Every product begins with the right source. We focus on quality, careful selection, and dependable supply to create a seamless journey from origin to destination.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => openQuoteModal("All Agricultural Commodities")}
                  className="px-6 sm:px-8 py-3 bg-[#111111] hover:bg-[#FF583E] text-white font-space font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
                >
                  Enquire About Products &rarr;
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
