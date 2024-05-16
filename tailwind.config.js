/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Golos Text", "Helvetica", "Arial"],
    },
    extend: {
      colors: {
        primary: "#c38f41",
        secondary: "#2b2b2b",
      },
      screens: {
        mobile: { max: "640px" },
        tablet: { max: "1024px" },
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

