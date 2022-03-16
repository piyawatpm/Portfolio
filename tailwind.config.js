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
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-300px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(300px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        popIn: {
          "0%": { transform: "scale(0)" },
          "60%": { opacity: "1", transform: "scale(1.1)" },
          "80%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        transformArrow: "transformArrow 0.5s",
        slideInLeft: "slideInLeft 0.75s ease both",
        slideInRight: "slideInRight 0.75s ease both",
        popIn:"popIn 1s both"
      },
    },
  },
  plugins: [],
};
