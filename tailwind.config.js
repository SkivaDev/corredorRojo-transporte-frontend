/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "principal": ['Be Vietnam Pro', 'sans-serif']
      },

      colors: {
        "gray-blue": "hsl(227, 12%, 61%)"
      },

      backgroundImage: {
        "close-menu": "url('/src/assets/images/icon-close.svg')",
        "open-menu": "url('/src/assets/images/icon-hamburger.svg')"
      }
    },
  },
  plugins: [],
}

