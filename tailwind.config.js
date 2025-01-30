/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        glow: {
          '0%': {
            filter: 'brightness(100%) drop-shadow(0 0 15px rgba(219, 39, 119, 0.3))'
          },
          '50%': {
            filter: 'brightness(120%) drop-shadow(0 0 30px rgba(219, 39, 119, 0.6))'
          },
          '100%': {
            filter: 'brightness(100%) drop-shadow(0 0 15px rgba(219, 39, 119, 0.3))'
          }
        }
      },
      animation: {
        'logo': 'fadeIn 1s ease-out, 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} 