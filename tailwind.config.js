/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#6B7280',
        customOrange: '#EA580C',
        customWhite: '#FFFFFF',
        customBlack: '#030712',
      },

    },
  },
  plugins: [],
}
