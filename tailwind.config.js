/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "portfolio-orange":  "#FF5800",
          "portfolio-blue":  "#0011FF",
          "portfolio-lightblue":  "#67AEFA",
          "portfolio-white":  "white",
          "portfolio-black":  "#3A3B3A"
          }      
      }
    },
  plugins: [],
}

