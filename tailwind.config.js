import tailwindcssAnimationDelay from "tailwindcss-animation-delay";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        blur: {
          xs: "2px",
        },
      },
      backgroundImage: {
        mono: "url('/images/JoonMono.jpeg')",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(10%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideToRight: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        slideToLeft: {
          "0%": { transform: "translateX(10%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        opacity: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s backwards",
        slideToRight: "slideToRight 0.3s backwards",
        slideToLeft: "slideToLeft 0.3s backwards",
        opacity: "opacity 0.3s backwards",
      },
    },
  },
  plugins: [tailwindcssAnimationDelay],
};
