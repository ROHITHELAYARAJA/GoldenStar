"use client";

import React, { useState, useEffect, useRef } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { X, ShieldCheck, MessageCircle, Mail, CheckCircle2 } from "lucide-react";

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, selectedCategory, prefillProduct, showToast } = useQuoteModal();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: selectedCategory || "Fruits",
    product: prefillProduct || "",
    volume: "FCL 20ft Reefer Container",
    destination: "",
  });

  // Sync state whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        category: selectedCategory || "Fruits",
        product: prefillProduct || "",
      }));
    }
  }, [isOpen, selectedCategory, prefillProduct]);

  if (!isOpen) return null;

  const handleSend = (channel: "whatsapp" | "email") => {
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }

    const commodityLabel = formData.product
      ? `${formData.product} (${formData.category})`
      : formData.category;

    if (channel === "whatsapp") {
      const messageLines = [
        `*EXPORT QUOTATION REQUEST - THE GOLDEN STAR*`,
        `----------------------------------------`,
        `*Commodity:* ${commodityLabel}`,
        `*Full Name:* ${formData.name.trim()}`,
        `*Company:* ${formData.company.trim()}`,
        `*Work Email:* ${formData.email.trim()}`,
        `*Phone / WhatsApp:* ${formData.phone.trim()}`,
        `*Estimated Volume:* ${formData.volume}`,
        `*Destination Port:* ${formData.destination.trim()}`,
        `----------------------------------------`,
        `Hello The Golden Star Export Desk, I would like to receive an export quotation with CIF / FOB rates and shipping schedule for this requirement.`,
      ];

      const messageText = messageLines.join("\n");
      const encoded = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/919345243790?text=${encoded}`;

      // Open WhatsApp in a new tab or window
      try {
        const win = window.open(whatsappUrl, "_blank");
        if (!win || win.closed || typeof win.closed === "undefined") {
          window.location.href = whatsappUrl;
        }
      } catch {
        window.location.href = whatsappUrl;
      }

      closeQuoteModal();
      showToast(
        `Opening WhatsApp to submit quotation for ${commodityLabel}...`
      );
    } else {
      // Email submission via mailto
      const subject = `Export Quotation Request: ${commodityLabel} - ${formData.company.trim()}`;
      const emailBodyLines = [
        `EXPORT QUOTATION REQUEST - THE GOLDEN STAR`,
        `----------------------------------------`,
        `Commodity: ${commodityLabel}`,
        `Full Name: ${formData.name.trim()}`,
        `Company: ${formData.company.trim()}`,
        `Work Email: ${formData.email.trim()}`,
        `Phone / WhatsApp: ${formData.phone.trim()}`,
        `Estimated Volume: ${formData.volume}`,
        `Destination Port: ${formData.destination.trim()}`,
        `----------------------------------------`,
        `Hello The Golden Star Export Desk,`,
        ``,
        `I would like to receive an export quotation with CIF / FOB trade terms, pricing, and shipping schedule for the requirement specified above.`,
        ``,
        `Best regards,`,
        `${formData.name.trim()}`,
        `${formData.company.trim()}`,
        `${formData.phone.trim()}`,
      ];

      const mailtoUrl = `mailto:hameedsahul9978@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(emailBodyLines.join("\n"))}`;

      window.location.href = mailtoUrl;
      closeQuoteModal();
      showToast(
        `Opening email client to send quotation request to hameedsahul9978@gmail.com...`
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl border border-[#DEDEDE] bg-white p-7 sm:p-9 shadow-2xl text-[#111111]">
        <button
          onClick={closeQuoteModal}
          className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-[#111111] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
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

        {/* Selected Product Pill if opened from a specific product */}
        {formData.product && (
          <div className="mb-4 px-3.5 py-2.5 rounded-2xl bg-amber-50/90 border border-[#FFD84D] flex items-center justify-between text-xs font-dmsans text-[#111111] shadow-xs">
            <div className="flex items-center gap-2 truncate">
              <span className="font-space font-bold uppercase text-[10px] text-[#FF583E] tracking-wider shrink-0">
                Selected Product:
              </span>
              <span className="font-bold truncate text-[#111111] font-space">{formData.product}</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-space font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full shrink-0">
              <CheckCircle2 className="w-3 h-3" />
              <span>Export Ready</span>
            </div>
          </div>
        )}

        <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="space-y-4 font-dmsans">
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
                  className={`py-2 px-3 rounded-xl text-xs font-space font-bold border transition-all cursor-pointer ${
                    formData.category.toLowerCase() === cat.toLowerCase()
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
                placeholder="+ Country Code & No."
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
                <option value="LCL Fast Air Freight">LCL Fast Air Freight</option>
                <option value="Bulk Volume (Metric Tons)">Bulk Volume (Metric Tons)</option>
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

          {/* Customer Choice: WhatsApp or Email */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[11px] font-space font-bold uppercase tracking-wider text-zinc-600">
                Choose Submission Channel:
              </span>
              <span className="text-[10px] font-dmsans text-zinc-500 font-medium">
                Direct to Export Desk
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSend("whatsapp")}
                className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-xs font-space font-bold shadow-md hover:scale-[1.01] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => handleSend("email")}
                className="w-full py-3.5 px-4 rounded-full bg-[#111111] hover:bg-[#FF583E] text-white flex items-center justify-center gap-2 text-xs font-space font-bold shadow-md hover:scale-[1.01] transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#FFD84D] shrink-0" />
                <span>Send via Email</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
