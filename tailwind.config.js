/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{php,html,js,tsx}"],
  safelist: [
    "border-cyan",
    "border-purple",
    "border-pink",
    {
      // pattern: /(bg|text|border)-(cyan|purple|pink)/,
      // variants: ["hover", "after", "before"],
    },
  ],
  theme: {
    extend: {
      colors: {
        black: "#111",
        purple: "#663693",
        cyan: "#00f0b5",
        pink: "#f61067",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      fontFamily: {
        sans: ["Brother", "system-ui", "sans-serif"],
      },
      keyframes: {
        borderCheckTop: {
          "0%": {
            width: 0,
            height: 0,
            "border-top-color": "transparent",
            "border-right-color": "transparent",
            "border-bottom-color": "transparent",
            "border-left-color": "white",
          },

          "5%": {
            width: "0",
            height: "100%",
            "border-top-color": "transparent",
            "border-right-color": "transparent",
            "border-bottom-color": "transparent",
            "border-left-color": "white",
          },

          "100%": {
            width: "100%",
            height: "100%",
            "border-top-color": "white",
            "border-right-color": "transparent",
            "border-bottom-color": "transparent",
            "border-left-color": "white",
          },
        },
        borderCheckBottom: {
          "0%": {
            width: 0,
            height: 0,
            "border-top-color": "transparent",
            "border-right-color": "white",
            "border-bottom-color": "transparent",
            "border-left-color": "transparent",
          },

          "5%": {
            width: "0",
            height: "100%",
            "border-top-color": "transparent",
            "border-right-color": "white",
            "border-bottom-color": "white",
            "border-left-color": "transparent",
          },

          "100%": {
            width: "100%",
            height: "100%",
            "border-top-color": "transparent",
            "border-right-color": "white",
            "border-bottom-color": "white",
            "border-left-color": "transparent",
          },
        },
      },
      animation: {
        borderTestTop: "borderCheckTop 200ms ease-in-out forwards",
        borderTestBottom: "borderCheckBottom 200ms ease-in-out  forwards",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-white",
    "bg-black",
    "bg-cyan",
    "bg-pink",
    "bg-purple",
    "text-white",
    "text-black",
    "text-cyan",
    "text-pink",
    "text-purple",
    "after:bg-white",
    "after:bg-black",
    "after:bg-cyan",
    "after:bg-pink",
    "after:bg-purple",
    "after:text-white",
    "after:text-black",
    "after:text-cyan",
    "after:text-pink",
    "after:text-purple",
  ],
};
