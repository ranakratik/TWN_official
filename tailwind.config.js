/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff' ,
        black: '#000000' ,
        russianviolet: '#310e59' ,
        steelpink: '#d745c8'
      },

      fontFamily: {
        ubuntu: ['Ubuntu Sans','sans-serif']
      },
    },
  },
  plugins: [],
}