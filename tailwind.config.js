/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  },
  plugins: [],
}