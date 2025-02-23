import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#FEFBF6", // Change this to your desired background color
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#696665",
            primary: {
              DEFAULT: "#2e5237",
              foreground: "#000000",
            },
            focus: "#495B2A",
          },
        },
        light: {
          colors: {
            background: "#FEFBF6",
            primary: {
              DEFAULT: "#2e5237",
              foreground: "#000000",
            },
            focus: "#495B2A",
          },
        },
      },
    }),
  ],
};
