const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      "Raleway-Bold": ["Raleway-Bold", "sans-serif"],
    },
    extend: {
      keyframes: {
        transformArrow: {
          "0%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        transformArrow: "transformArrow 0.5s",
      },
    },
  },
  plugins: [],
};
