/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      pink: "#F0A6CA",
      darklila: "#362056",
      lightlila: "#9C89B8",
      softblue: "#B8BEDD",
      brokenwhite: "#F0E6EF",
      lightpink: "#EFC3E6",
      brown: "#554348",
    },
    fontFamily: {
      raleway: 'Raleway',
      ultra: 'Ultra'
    },
    extend: {
      backgroundImage: {
        'gr-pink-pink': 'linear-gradient(180deg, #EFC3E6 100%, #F0A6CA 100%)',
        'gr-lila-pink': 'linear-gradient(180deg, #9C89B8 100%, #F0A6CA 100%)',  
        'gr-blue-lila': 'linear-gradient(180deg, #B8BEDD 100%, #9C89B8 100%)',
        'gr-white-blue': 'linear-gradient(180deg, #F0E6EF 100%, #B8BEDD 100%)'
      },
      borderRadius: {
        inp: '0.65rem',
        cont: '1.25rem' 
      },
      fontSize: {
        ptitle: '3.125rem',
        stitle: '1.875rem',
        ctitle: '1.25rem',
        userp: '1.625rem',
        regu: '1.5rem',
        tiny: '1rem',
      }
    },
    
  },
  plugins: [],
}

