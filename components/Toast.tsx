"use client";

import React from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { CheckCircle2 } from "lucide-react";

export default function Toast() {
  const { toastMessage } = useQuoteModal();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 rounded-2xl bg-zinc-950 px-5 py-4 text-xs font-bold text-white shadow-2xl border border-gold/40">
        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
        <p className="leading-snug">{toastMessage}</p>
      </div>
    </div>
  );
}
