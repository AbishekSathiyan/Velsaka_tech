/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ------------------------------
         Screens (Responsive Breakpoints)
      ------------------------------ */
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
      },

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
         Spacing System (Merged)
      ------------------------------ */
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '64px',
        '5rem': '5rem',
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

      /* ------------------------------
         Animations (Merged)
      ------------------------------ */
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'float-in': 'float-in 0.8s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },

      /* ------------------------------
         Keyframes (Merged)
      ------------------------------ */
      keyframes: {
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(-30px) scale(0.9)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-down': {
          'from': {
            opacity: '0',
            transform: 'scaleY(0)',
          },
          'to': {
            opacity: '1',
            transform: 'scaleY(1)',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.5',
          },
        },
      },

      /* ------------------------------
         Border Radius Extensions
      ------------------------------ */
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },

      /* ------------------------------
         Backdrop Blur Extensions
      ------------------------------ */
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },

      /* ------------------------------
         Z-Index Extensions
      ------------------------------ */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },

  plugins: [], // Remove line-clamp if not needed
}