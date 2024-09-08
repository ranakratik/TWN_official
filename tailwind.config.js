/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricblue: '#11E3EE'
      },

      fontFamily: {
        ubuntu: ['Ubuntu Sans','sans-serif']
      },
    },
  },
  plugins: [],
}