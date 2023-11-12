/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "radial-gradient(61.92% 26.97% at 17.85% 37.54%, rgba(67, 188, 205, 0.10) 0%, rgba(0, 0, 0, 0.00) 100%), #19191A",
      },
      colors: {
        primary: "#000000",
        secondary: "#00f6ff",
        grey: "#19191A",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
