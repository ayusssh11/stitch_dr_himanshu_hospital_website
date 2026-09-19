import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brand: {
          teal: "#008891",
          deepteal: "#007A87",
          darkteal: "#005e68",
          navy: "#0A1E34",
          darknavy: "#061322",
          cyan: "#00B4D8",
          lightcyan: "#E6F7F9",
          ice: "#F0F9FA",
          border: "#CBE8EB",
          borderlight: "#E1F2F4",
        },
        crimson: {
          DEFAULT: "#B91C1C",
          dark: "#991B1B",
          light: "#FEE2E2",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", '"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
