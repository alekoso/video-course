const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "460px",
      sm: "660px",
      md: "768px",
      l: "989px",
      lg: "1150px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: "#0C0117",
        textColorWhite: "#FFF",
        textColorBlack: "#0C0117",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
