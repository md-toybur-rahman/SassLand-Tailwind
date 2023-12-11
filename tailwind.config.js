/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'plex': ['IBM Plex Mono', 'sans-serif']
    },
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  },
  plugins: [],
}