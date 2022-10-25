module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#5755E7",
      },
      fontFamily: {
        lato: ['Lato', "sans-serif"],
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
