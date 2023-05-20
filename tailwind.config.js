/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%',
      '1/10': '10%',
      '1/50': '2%',
    }
  },
  plugins: [],
}
