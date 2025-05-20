/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        galaxy: "#05051a",     // Dark blue/black background color
        accent: "#4a9fff",    // Blue accent color from Simon Sparks design
        darkAccent: "#0d2554", // Darker blue for backgrounds
        textLight: "#f8f9fa", // Light text color
        textDim: "#9ca3af"    // Dimmed text color
      },
      fontFamily: {
        orbit: ["Orbitron", "sans-serif"],
      }
    },
  },
  plugins: [],
};