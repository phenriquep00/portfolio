/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    extend: {
      skew: {
        '25': '25deg',
      }
    },
  },
  plugins: [],
}
