import tailwindcssAnimationDelay from "tailwindcss-animation-delay";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s backwards",
      },
    },
  },
  plugins: [tailwindcssAnimationDelay],
};
