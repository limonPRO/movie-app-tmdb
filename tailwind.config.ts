import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      screens: {
        //MIN
        xxs: { max: "300px" }, //0-300px
        xs: { max: "575px" }, //0-575px
        "3xl": { min: "1536px", max: "1699px" }, //1536-1700px
        "4xl": { min: "1700px", max: "1899px" }, //1700-1900px
        "5xl": { min: "1900px", max: "2199px" }, //1900-2200px
        "6xl": { min: "2200px", max: "2399px" }, //2200-2400px

        // MAX
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "1023px" },
        "xl-max": { max: "1279px" },
        "2xl-max": { max: "1535px" },
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        green: "var(--bg-green)",
        "primary-Soft": "rgba(var(--primary-rgb), 0.2)",
        "green-secondary": "var(--bg-green-secondary)",
        dove: "var(--bg-dove)",
        dark: "var(--dark)",
      },
    },

    colors: {
      transparent: "transparent",
    },
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "normal" }], //10px
      xs: ["0.75rem", { lineHeight: "normal" }], //12px
      "2xs": ["0.8125rem", { lineHeight: "normal" }], //13px
      sm: ["0.875rem", { lineHeight: "normal" }], //14px
      base: ["1rem", { lineHeight: "normal" }], //16px
      md: ["1.125rem", { lineHeight: "normal" }], //18px
      lg: ["1.25rem", { lineHeight: "1.5" }], //20px
      xl: ["1.5rem", { lineHeight: "normal" }], //24px
      "2xl": ["1.75rem", { lineHeight: "normal" }], //28px
      "3xl": ["2rem", { lineHeight: "normal" }], // 32px
      "4xl": ["2.25rem", { lineHeight: "normal" }], // 36px
      "5xl": ["2.5rem", { lineHeight: "normal" }], // 40px
      "6xl": ["3.5rem", { lineHeight: "normal" }], // 56px
      "7xl": ["4.25rem", { lineHeight: "normal" }], //68px
    },
    animation: {
      fly: "fly 6s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
      marquee: "marquee 60s linear infinite",
      marqueeRight: "marqueeRight 60s linear infinite",
      heartBeat: "heartBeat 1s cubic-bezier(0.75, 0.02, 0.31, 0.87) infinite",
      progress: "progress 5s linear",
      "spin-slow": "spin 10s linear infinite",
      gradient: "gradient 6s linear infinite",
      gradientDiagonal: "gradientDiagonal 6s linear infinite",
    },
    textColor: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      fill: "var(--text-fill)",
      white: "var(--text-white)",
      green: "var(--text-green)",
      placeholder: "var(--text-placeholder)",
      danger: "var(--text-danger)",
    },
    borderColor: {
      primary: "var(--border-primary)",
      green: "var(--border-green)",
      transparent: "transparent",
    },
    divideColor: { primary: "var(--border-primary)" },
    backgroundImage: {
      hero: "url('/assets/images/hero.jpg')",
    },
  },
};
export default config;