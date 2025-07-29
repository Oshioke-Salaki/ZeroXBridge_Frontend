import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Default breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
      // Custom laptop breakpoints
      'win-laptop': '1366px',    // Common Windows laptop (HD)
      'win-laptop-lg': '1920px', // Windows laptop (Full HD)
      'mac-13': '1280px',        // 13" MacBook
      'mac-14': '1512px',        // 14" MacBook Pro
      'mac-16': '1728px',        // 16" MacBook Pro
      '4k': '2500px',
      '4k-large': '3200px'
    },
    extend: {
      colors: {

      },
      backgroundImage: {
        
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        manrope: ["var(--font-manrope)"],
        "roboto-serif": ["var(--font-roboto-serif)"],
      },
   
    },
  },
  plugins: [],
};

export default config;