/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundColor: {
        primary: "rgb(3 7 18 / 1)",
        secondary: "rgb(17 24 39/ 1)",
      },
      textColor: {
        primary: "#ffffff",
        secondary: "rgb(148 163 184 / 1)",
      },
    },
  },
  plugins: [],
};
