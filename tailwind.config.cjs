const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: { min: "300px", max: "1000px" },
    },
    extend: {
      fontFamily: {
        vr: ["Varela Round"],
      },
    },
  },
  plugins: [nextui()],
};
