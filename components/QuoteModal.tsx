"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { X, ArrowUpRight, ShieldCheck, Ship, MessageCircle } from "lucide-react";

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, selectedCategory, showToast } = useQuoteModal();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: selectedCategory || "Fruits",
    volume: "FCL 20ft Reefer Container",
    destination: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeQuoteModal();
    showToast(
      `Thank you, ${formData.name || "Trade Partner"}! Your quotation request for ${formData.category} to ${formData.destination || "your designated port"} has been received. Founder Sahul Hameed and our export desk will reach out within 12 hours.`
    );
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      category: "Fruits",
      volume: "FCL 20ft Reefer Container",
      destination: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl border border-[#DEDEDE] bg-white p-7 sm:p-9 shadow-2xl text-[#111111]">
        <button
          onClick={closeQuoteModal}
          className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-[#111111] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD84D] border border-[#DEDEDE] text-xs font-space font-bold text-[#111111] mb-3 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
            <span className="uppercase tracking-wider text-[10px]">DIRECT EXPORT DESK</span>
          </div>
          <h3 className="font-space text-2xl sm:text-3xl font-bold text-[#111111]">
            Request an Export Quotation
          </h3>
          <p className="font-dmsans text-xs sm:text-sm text-zinc-600 mt-1 font-normal">
            Specify your commodity volume and destination port for competitive CIF / FOB export trade terms.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-dmsans">
          <div>
            <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-700 mb-2">
              Commodity Category
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["Fruits", "Vegetables", "Spices", "Mixed"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: cat })}
                  className={`py-2 px-3 rounded-xl text-xs font-space font-bold border transition-all ${
                    formData.category.toLowerCase().includes(cat.toLowerCase())
                      ? "bg-[#111111] text-white border-[#111111] shadow-sm"
                      : "bg-zinc-50 text-zinc-700 border-[#DEDEDE] hover:bg-[#FFD84D]/30 hover:text-[#111111]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DEDEDE] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FFD84D]/40 bg-white text-xs font-dmsans text-[#111111]"
              />
            </div>
            <div>
              <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                required
                placeholder="Buyer / Importer Co."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DEDEDE] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FFD84D]/40 bg-white text-xs font-dmsans text-[#111111]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="buyer@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DEDEDE] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FFD84D]/40 bg-white text-xs font-dmsans text-[#111111]"
              />
            </div>
            <div>
              <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="+ Country Code &amp; No."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DEDEDE] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FFD84D]/40 bg-white text-xs font-dmsans text-[#111111]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Estimated Volume
              </label>
              <select
                value={formData.volume}
                onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DEDEDE] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FFD84D]/40 bg-white text-xs font-dmsans text-[#111111]"
              >
                <option value="FCL 20ft Reefer Container">FCL 20ft Reefer Container</option>
                <option value="FCL 40ft Reefer Container">FCL 40ft Reefer Container</option>
                <option value="LCL Air Freight">LCL Fast Air Freight</option>
                <option value="Bulk Metric Tons">Bulk Volume (Metric Tons)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-space font-bold uppercase tracking-wider text-zinc-700 mb-1">
                Destination Port *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jebel Ali, Rotterdam"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DEDEDE] focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-[#FFD84D]/40 bg-white text-xs font-dmsans text-[#111111]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 rounded-full bg-[#FF583E] hover:bg-[#E8492C] text-white flex items-center justify-center gap-2 text-xs font-space font-bold shadow-lg hover:scale-[1.01] transition-all"
          >
            <span>Submit Quotation Request</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}
