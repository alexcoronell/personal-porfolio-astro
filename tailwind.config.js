const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,astro,svelte}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'primary': '#42b883',
      'primary-dark': '#21262b',
      'black': '#000000',
      'white': '#FFFFFF',
      'red': '#FF0000',
      'gray': '#666666',
      'gray-dark': '#333333',
      'background-icons': '#242938',
      'linkedin': '#0077B5',
      'github': '#f5f5f5',
      'gitlab': '#fca326',
      'whatsapp': '#25D366',
      'gmail': '#DB4437',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1366px',
      '3xl': '1600px',
    },
    extend: {
      fontFamily: {
        NerdFont3270: ['"3270NerdFont"', 'sans-serif'],
        ProFontNerd: ['"ProFontNerd"', 'sans-serif'],
        SFMono: ['"SFMono"', 'sans-serif'],
      },
      dropShadow: {
        'primary': '3px 3px 3px #42b88370'
      }
    },
  },
  plugins: [addDynamicIconSelectors()],
}

