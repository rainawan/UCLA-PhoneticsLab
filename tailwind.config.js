const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2774AE",
        darkblue: "#005587",
        yellow: "#FFE59D",
        white: "#FFFFFF",
        lightgray: "#D3D3D3",
      },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      inter: ["Inter", "serif"],
    },
  },
  plugins: [],
  plugins: [nextui()],
};
