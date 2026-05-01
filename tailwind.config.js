/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      /* ------------------------------
         Colors (Design System)
      ------------------------------ */
      colors: {
        background: "#13121b",
        surface: "#13121b",
        "surface-container": "#1f1f28",
        "surface-container-lowest": "#0e0d16",
        "on-surface": "#e4e1ee",
        "on-surface-variant": "#c7c4d8",
        primary: "#c4c0ff",
        "primary-container": "#8781ff",
      },

      /* ------------------------------
         Spacing System
      ------------------------------ */
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '64px',
      },
      
      gap: {
        'xl': '32px',
      },
      
      padding: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      
      margin: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '64px',
      },

      /* ------------------------------
         Fonts (Merged Properly)
      ------------------------------ */
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },

  plugins: [],
};