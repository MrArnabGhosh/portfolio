/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        Brown: "#53423e",
        darkBrown: "#4a3323",
        black: "#402f23",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#009fb3",
        orange: "#fb9718",
        lightOrange: "#7ac27b",
        darkorange: "#d28422",
        grey: "#626965",
        lightGray: "#978580",
        darkGray: "#314441",
      },
      extend:{
        boxShadow:{
          cyanShadow:'0px 0px 20px 0px rgba(94,206,220,0.5)'
        },
      },
      fontFamily: {
        body: ['Josefin Sans', 'sans-serif'],
        special: ['Roboto', 'sans-serif'],
      },
   
  },
  plugins: [],
};
