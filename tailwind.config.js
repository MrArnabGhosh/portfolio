/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      Brown:"#53423e",
      darkBrown:"#2c2523",
      black:"#1e1917",
      white:"#f1e1d9",                                       
      cyan:"#15d1e9",
      lightCyan:"#88e5f0",
      darkCyan:"#009fb3",
      orange:"#fb9718",
      lightOrange:"#7ac27b",
      darkorange:"#d28422",
      grey:"#626965",
      lightGray:"#978580",
      darkGray:"#314441",
    },
    fontFamily : {
      body:[
        'Josefin Sans'
      ],
      special:['Roboto'],
    },
    extend: {},
  },
  plugins: [],
}

