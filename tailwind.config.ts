import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",
          text: "#111111",
          primary: "#111111",
          accent: "#FF583E",
          surface: "#FFD84D",
          border: "#DEDEDE",
          gold: "#FFD84D",
        },
        accent: {
          DEFAULT: "#FF583E",
          coral: "#FF583E",
          hover: "#E8492C",
        },
        surface: {
          DEFAULT: "#FFD84D",
          card: "#FFFDF0",
        },
        border: {
          DEFAULT: "#DEDEDE",
          light: "#EAEAEA",
        },
        obsidian: {
          DEFAULT: "#111111",
          deep: "#0A0A0A",
          card: "#18181B",
          border: "#DEDEDE",
          hover: "#222222",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        urbanist: ["'Urbanist'", "system-ui", "sans-serif"],
        opensans: ["'Open Sans'", "system-ui", "sans-serif"],
        space: ["'Space Grotesk'", "sans-serif"],
        heading: ["'Urbanist'", "'Space Grotesk'", "sans-serif"],
        body: ["'Open Sans'", "'DM Sans'", "sans-serif"],
        dmsans: ["'DM Sans'", "sans-serif"],
        outfit: ["'Outfit'", "'Space Grotesk'", "sans-serif"],
        cinzel: ["'Cinzel'", "'Playfair Display'", "serif"],
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'DM Sans'", "sans-serif"],
        manrope: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        clean: "0 2px 10px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.08)",
        "clean-hover": "0 12px 32px -8px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.12)",
        "accent-glow": "0 8px 24px -4px rgba(255, 88, 62, 0.35)",
        "surface-glow": "0 8px 24px -4px rgba(255, 216, 77, 0.4)",
        "card-luxury": "0 4px 24px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px #DEDEDE",
        "card-hover": "0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px #111111",
      },
    },
  },
  plugins: [],
};

export default config;
