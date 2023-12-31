/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins:[ 'Poppins', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive']
      },
      colors: {
        'primary':'#FF902A',
        'coffee': "#F6EBDA",
        'secondary':'#2F2105',
        "dark-coffee": "#F9D9AA",
        "slate-gray": "#6D6D6D",
        
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        '4xl':'10px 10px 17px 0px rgba(0,0,0,0.75)'
      },
      backgroundImage: {
        'coffee-cup':"url('../assets/coffeeCupBg.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}