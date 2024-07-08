/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#56CEDF",
        grey: "#19191A",
        lightGrey: "#3A3A40",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        greenBlue: "#43BCCD",
        brownish: "#e09c46",
        secondaryButton: "#42BCCD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        '1': '1px',
      },
    },
    screens: {
      // xxs: "300px",
      // xs: "480px",
      // ss: "650px",
      // sm: "768px",
      // md: "1060px",
      // lg: "1200px",
      // xl: "1700px",
        'sm': '650px',
        'md': '768px',
        'mm': '888px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1636px',
        '3xl': '2300px',
    },
  },
  plugins: [],
};
// richard li
// TODO:
// alignment
// expanding underline under the 4 thingies 
// implement the 4 thingies ^

// animations

// email agent