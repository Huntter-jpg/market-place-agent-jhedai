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
        body: ['"Camphor Pro"', '"Source Sans 3"', "system-ui", "sans-serif"],
      },
      fontSize: {
        /* ── Scaled +18% for high-readability ── */
        "display-lg": ["4.125rem", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "300" }],
        "display-md": ["3.3rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-sm": ["2.65rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "300" }],
        "headline-lg": ["2.35rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "500" }],
        "headline-md": ["2.05rem", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-sm": ["1.75rem", { lineHeight: "1.35", fontWeight: "500" }],
        "title-lg": ["1.6rem", { lineHeight: "1.4", fontWeight: "600" }],
        "title-md": ["1.175rem", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "600" }],
        "title-sm": ["1.025rem", { lineHeight: "1.45", fontWeight: "600" }],
        "body-lg": ["1.325rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1.175rem", { lineHeight: "1.6", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-sm": ["1.025rem", { lineHeight: "1.5", letterSpacing: "0.02em", fontWeight: "400" }],
        "label-lg": ["1.1rem", { lineHeight: "1.45", fontWeight: "600" }],
        "label-md": ["0.95rem", { lineHeight: "1.35", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-sm": ["0.875rem", { lineHeight: "1.35", letterSpacing: "0.04em", fontWeight: "600" }],
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
        "elevation-1": "0 1px 2px 0 rgba(0,55,100,0.05), 0 1px 3px 0 rgba(0,55,100,0.1)",
        "elevation-2": "0 1px 2px 0 rgba(0,55,100,0.06), 0 2px 6px 2px rgba(0,55,100,0.08)",
        "elevation-3": "0 4px 8px 3px rgba(0,55,100,0.08), 0 1px 3px 0 rgba(0,55,100,0.1)",
        "glow-orange": "0 0 20px rgba(255,95,0,0.3)",
        "glow-blue": "0 0 20px rgba(0,151,206,0.3)",
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
