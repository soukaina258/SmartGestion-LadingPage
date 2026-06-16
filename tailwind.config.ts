import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark backgrounds
        dark: {
          DEFAULT: "#0B0B0F",
          900: "#0B0B0F",
          800: "#12121A",
          700: "#191921",
          600: "#22222C",
        },
        // Brand accent palette — SmartGestion logo (navy → blue → teal)
        neon: {
          purple: "#0A1F44", // deep navy
          violet: "#102A56", // navy
          pink: "#1D6FD6", // primary blue (accent)
          fuchsia: "#2E8BD8", // mid blue
          orange: "#3FB8C4", // teal
          amber: "#5CC9C9", // light cyan highlight
        },
        brand: {
          DEFAULT: "#1D6FD6",
          50: "#EAF3FC",
          100: "#CFE4F8",
          400: "#3FB8C4",
          500: "#1D6FD6",
          600: "#1657AD",
          700: "#0A1F44",
        },
      },
      borderColor: {
        muted: "rgba(255,255,255,0.1)",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #0A1F44 0%, #1D6FD6 55%, #3FB8C4 100%)",
        "accent-gradient-soft":
          "linear-gradient(135deg, #1657AD 0%, #2E8BD8 55%, #5CC9C9 100%)",
        "pink-orange":
          "linear-gradient(135deg, #5CC9C9 0%, #1D6FD6 60%, #0A1F44 100%)",
        "card-glow":
          "linear-gradient(135deg, rgba(10,31,68,0.18) 0%, rgba(29,111,214,0.18) 50%, rgba(63,184,196,0.18) 100%)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(29,111,214,0.25) 0%, rgba(10,31,68,0.12) 40%, transparent 70%)",
      },
      boxShadow: {
        neon: "0 0 40px -10px rgba(29,111,214,0.5)",
        "neon-purple": "0 0 50px -12px rgba(10,31,68,0.55)",
        "card-lift": "0 24px 60px -24px rgba(10,31,68,0.18)",
        glow: "0 0 0 1px rgba(10,31,68,0.04), 0 20px 60px -20px rgba(29,111,214,0.45)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.95)" },
        },
        "aurora-slow": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-40px, 30px) scale(1.15)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "drift-up": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%, 90%": { opacity: "0.7" },
          "100%": { transform: "translateY(-120px)", opacity: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        marquee: "marquee 28s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        "spin-slow": "spin-slow 16s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "aurora-slow": "aurora-slow 24s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "drift-up": "drift-up 9s linear infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
