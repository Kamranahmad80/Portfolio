/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
      ],
    theme: {
      extend: {
        colors: {
          galaxy: "#0f0f1c",
          neon: "#00ffff",
          star: "#fcd34d"
        },
        fontFamily: {
          orbit: ["Orbitron", "sans-serif"],
        }
      },
    },
    plugins: [],
  };
  