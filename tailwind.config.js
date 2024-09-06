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
        'gr-pink-pink': 'linear-gradient(180deg, #F0E6EF 0%, #F0A6CA 100%)',
        'gr-lila-pink': 'linear-gradient(180deg, #9C89B8 0%, #F0A6CA 100%)',  
        'gr-blue-lila': 'linear-gradient(180deg, #B8BEDD 0%, #9C89B8 100%)',
        'gr-white-blue': 'linear-gradient(180deg, #F0E6EF 0%, #B8BEDD 100%)'
      },
      borderRadius: {
        inp: '0.65rem',
        cont: '1.25rem',
        big: '1.875rem', 
      },
      fontSize: {
        ptitle: '2.5rem',
        stitle: '1.875rem',
        ctitle: '1.2rem',
        userp: '1.625rem',
        regu: '1.5rem',
        tiny: '0.9rem',
      },
      boxShadow: {
        smalls: '2px 3px 0px 0px rgb(85, 67, 72)',
        bigs: '3px 4px 0px 1px rgb(85, 67, 72)',
      }
    },
    
  },
  plugins: [],
}

