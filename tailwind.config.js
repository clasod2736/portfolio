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
        streamUp: {
          "0%": { transform: "translateY(80%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        imgIn: {
          from: { opacity: "0.5" },
          to: { opacity: "1" },
        },
        imgOut: {
          from: { opacity: "1" },
          to: { opacity: "0.2" },
        },
        opacityOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
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
        opacityIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.5s backwards",
        slideToRight: "slideToRight 0.3s backwards",
        slideToLeft: "slideToLeft 0.3s backwards",
        opacityIn: "opacityIn 0.3s backwards",
        imgIn: "imgIn 0.2s backwards",
        imgOut: "imgOut 0.2s forwards",
        opacityOut: "opacityOut 0.3s forwards ",
        streamUp: "streamUp 0.5s backwards",
      },
    },
  },
  plugins: [tailwindcssAnimationDelay],
};
