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
        customgreen: '#166534',
        customPeach: '#ffedd5',
        customBrown: '#7C2D12', 
        customGrayy: '#D1D5DB', 
      },
      screens: {
        '2xl': '1640px', // Define um breakpoint para telas maiores que 1640px
      },
    },
  },
  plugins: [],
}
