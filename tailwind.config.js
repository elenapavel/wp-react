/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{php,html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#32645C",
        secondary: "#A8C653",
        accent: "#FCCF61",
        "secondary-light": "#F6F6E7",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      fontFamily: {
        sans: ['"Montserrat"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
