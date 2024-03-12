/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        content: "fit-content",
        700: "700px",
        800: "800px",
      },
      height: {
        content: "fit-content",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, display: "none" },
        },
        "up-down": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in .3s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out",
        "up-down": "up-down .8s ease-in-out infinite",
      },
    },
    screens: {
      "desktop-sm": { min: "1440px", max: "1559px" },
      "desktop-md": { min: "1920px", max: "2559px" },
      "desktop-lg": "2560px",
      laptop: { min: "1280px", max: "1439px" },
    },
  },
  plugins: [],
};
