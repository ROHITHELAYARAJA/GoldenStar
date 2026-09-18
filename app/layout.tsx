import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import Toast from "@/components/Toast";
import QuickNavWidget from "@/components/QuickNavWidget";
import { QuoteModalProvider } from "@/context/QuoteModalContext";

export const metadata: Metadata = {
  title: "The Golden Star | Agricultural Import & Export",
  description:
    "Connecting South India's finest agricultural harvest to global seaports. High-volume export of fresh fruits, quality vegetables, and authentic spices led by founder Sahul Hameed.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[#111111] font-sans antialiased flex flex-col min-h-screen selection:bg-[#FFD84D] selection:text-[#111111]">
        <QuoteModalProvider>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
          <QuoteModal />
          <Toast />
          <QuickNavWidget />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
