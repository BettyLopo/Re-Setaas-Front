/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#F0A6CA",
        darklila: "#362056",
        lightlila: "#9C89B8",
        softblue: "#B8BEDD",
        brokenwhite: "#F0E6EF",
        lightpink: "#EFC3E6"
      },
      fontFamily: {
        raleway: 'Raleway',
        ultra: 'Ultra'
      }
    },
  },
  plugins: [],
}

