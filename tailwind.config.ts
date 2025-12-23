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
        // Primary Green Palette
        'primary-green-dark': '#1a5f3a',
        'primary-green': '#2d7a4f',
        'primary-green-light': '#3d9b64',
        
        // Secondary Gold Palette
        'secondary-gold': '#d4a574',
        'secondary-amber': '#e8b44c',
        
        // Accent Colors
        'accent-earth': '#8b6f47',
        'accent-terracotta': '#c65d3b',
        
        // Neutral Colors
        'neutral-charcoal': '#2c3e50',
        'neutral-gray': '#7f8c8d',
        'neutral-light': '#ecf0f1',
        'neutral-cream': '#f8f9fa',
        
        // Legacy support
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
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 5vw, 4.5rem)',
        'section': 'clamp(2rem, 4vw, 3rem)',
        'subsection': 'clamp(1.5rem, 3vw, 2rem)',
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.7',
        'small': '1.5',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1a5f3a 0%, #2d7a4f 50%, #3d9b64 100%)',
        'gradient-card': 'linear-gradient(to bottom right, #ffffff, #f8f9fa)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(26, 95, 58, 0.9), rgba(61, 155, 100, 0.7))',
        'gradient-sunrise': 'linear-gradient(0deg, #d4a574 0%, #e8b44c 50%, #ffebb3 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-pop': 'scalePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'float': 'float 4s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scalePop: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;









