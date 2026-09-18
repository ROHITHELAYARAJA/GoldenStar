"use client";

import React, { createContext, useContext, useState } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  selectedCategory: string;
  prefillProduct: string;
  toastMessage: string | null;
  openQuoteModal: (productOrCategory?: string) => void;
  closeQuoteModal: () => void;
  showToast: (msg: string) => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [prefillProduct, setPrefillProduct] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const openQuoteModal = (productOrCategory?: string) => {
    if (productOrCategory) {
      if (
        productOrCategory.includes("Fruits") ||
        productOrCategory.includes("Vegetables") ||
        productOrCategory.includes("Spices")
      ) {
        setSelectedCategory(productOrCategory);
      }
      setPrefillProduct(productOrCategory);
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        selectedCategory,
        prefillProduct,
        toastMessage,
        openQuoteModal,
        closeQuoteModal,
        showToast,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
