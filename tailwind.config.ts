import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: {
          DEFAULT: "#1F1F1F",
          subtle: "#5F6368",
          muted: "#80868B",
        },
        primary: {
          50: "#e6f4fa",
          100: "#b3dff0",
          200: "#80cae6",
          300: "#4db5dc",
          400: "#26a5d5",
          500: "#0097ce",
          600: "#0087b9",
          700: "#00739e",
          800: "#005f83",
          900: "#003764",
        },
        accent: {
          50: "#fff3e6",
          100: "#ffddbb",
          200: "#ffc78f",
          300: "#ffb163",
          400: "#ff8b33",
          500: "#ff5f00",
          600: "#e65500",
          700: "#cc4b00",
          800: "#a33c00",
          900: "#7a2d00",
        },
        neutral: {
          50: "#f8f8f7",
          100: "#f1f0ef",
          200: "#e8e7e6",
          300: "#d0cfcd",
          400: "#b8b6b4",
          500: "#9a9896",
          600: "#7c7a78",
          700: "#5e5c5a",
          800: "#403e3c",
          900: "#22201e",
        },
      },
      fontFamily: {
        display: ['"Ethnocentric"', '"Rajdhani"', "system-ui", "sans-serif"],
        body: ['"Camphor Pro"', '"Inter"', '"Source Sans 3"', "system-ui", "sans-serif"],
      },
      fontSize: {
        /* ── Enterprise Modern — Bold, tight headlines; breathing body ── */
        "display-lg": ["5rem", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "700" }],
        "title-lg": ["1.5rem", { lineHeight: "1.35", fontWeight: "600" }],
        "title-md": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "title-sm": ["1.0625rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-sm": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        "label-lg": ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }],
        "label-md": ["0.9375rem", { lineHeight: "1.35", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-sm": ["0.875rem", { lineHeight: "1.35", letterSpacing: "0.02em", fontWeight: "600" }],
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "28px",
        "2xl": "32px",
        full: "9999px",
      },
      boxShadow: {
        "elevation-1": "0 1px 2px 0 rgba(0,0,0,0.04), 0 1px 3px 0 rgba(0,0,0,0.06)",
        "elevation-2": "0 1px 3px 0 rgba(0,0,0,0.06), 0 2px 8px 0 rgba(0,0,0,0.06)",
        "elevation-3": "0 2px 6px 0 rgba(0,0,0,0.06), 0 4px 12px 0 rgba(0,0,0,0.05)",
        "glow-orange": "0 0 20px rgba(255,95,0,0.25)",
        "glow-blue": "0 0 20px rgba(0,151,206,0.25)",
      },
      maxWidth: {
        container: "1240px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
