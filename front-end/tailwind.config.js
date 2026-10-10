/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"EB Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"The Seasons"', 'serif'],
        ui: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#F3ECDD',
          light: '#F9F5EC',
        },
        gold: {
          DEFAULT: '#B98F53',
          dark: '#8F6C3C',
        },
        rose: {
          DEFAULT: '#C97C8B',
          deep: '#A85566',
          pale: '#EAC7CD',
        },
        charcoal: {
          DEFAULT: '#3A302A',
          soft: '#5B4E45',
        },
        border: '#E4D9C8',
      },
    },
  },
  plugins: [],
}
