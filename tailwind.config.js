/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['"Great Vibes"', 'cursive'], //  this is the class name: font-signature
      },
    },
  },
  plugins: [],
}
