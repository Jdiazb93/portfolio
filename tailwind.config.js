/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lexend-black": ['"Lexend Black"'],
        "lexend-bold": ['"Lexend Bold"'],
        "lexend-extra-bold": ['"Lexend Extra Bold"'],
        "lexend-extra-light": ['"Lexend Extra Light"'],
        "lexend-light": ['"Lexend Light"'],
        "lexend-medium": ['"Lexend Medium"'],
        "lexend-regular": ['"Lexend Regular"'],
        "lexend-semi-bold": ['"Lexend Semi Bold"'],
        "lexend-thin": ['"Lexend Thin"'],
      },
      backgroundImage: {
        "body-light": "url('/src/assets/images/FondoJlight.png')",
        "body-dark": "url('/src/assets/images/FondoJdark.png')",
      },
    },
  },
  darkMode: ["selector"],
  plugins: [],
};
