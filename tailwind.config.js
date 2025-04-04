/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {},
    // fontFamily: {},
    screens: {
      bigPhone: "425px",
      tablet: "768px",
      tabletPlus: "800px",
      laptop: "1024px",
      hd: "1280px",
      bigLaptop: "1440px",
      fullHd: "1920px",
    },
  },

  plugins: [],
};
