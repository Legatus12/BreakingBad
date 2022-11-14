/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'montserrat': ['Montserrat', 'Serif']
    },
  },
  plugins: [],
}
