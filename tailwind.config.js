/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#000000",
      secondary: "#FCF5EE",
      aire: "#4472B7",
      village: "#ED3724",
      earth: "#6CBD45",
      sun: "#F5EA07",
      hopeful: "#D8C5E0",
      white: "#ffffff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      ibarra: ["Ibarra Real Nova", "sans-serif"],
      source: ["Source Code Pro", "sans-serif"],
    },
    fontSize: {
      headingOne: "72px",
      headingTwo: "56px",
      headingThree: "32px",
      headingFour: "26px",
      bodyOne: "22px",
      bodyTwo: "16px",
    },
    extend: {},
  },
  plugins: [],
};
