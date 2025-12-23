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
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        earth: {
          50: "#faf7f2",
          100: "#f4ede0",
          200: "#e8d9c1",
          300: "#d9bf9a",
          400: "#c8a373",
          500: "#b88a5a",
          600: "#a6754d",
          700: "#8a5f42",
          800: "#714f3b",
          900: "#5d4232",
        },
      },
    },
  },
  plugins: [],
};
export default config;






