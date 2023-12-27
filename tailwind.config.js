/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontEncabezado: ['Roboto, sans-serif'],
      },

      fontFamily: {
        fontContador: ['VT323, monospace'],
      },
    },
  },
  plugins: [],
}

