/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#080b1b",
        white: "#f0efed",
        blue: "#1a2456",
        orange: "#ff501c",
        pink: "#ff8b68",
      },
    },
  },
  plugins: [],
};
