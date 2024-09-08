import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#2C2F2E",
          2: "#161925",
        },
        blue: {
          1: "#0E78F9",
        },
        sky: {
          1: "#c9DDFF",
          2: "#ECF0FF",
          3: "#F5FCFF",
        },
        orange: {
          1: "#FF742E",
        },
        purple: {
          1: "#830EF9",
        },
        yellow: {
          1: "#F9A00E",
        },
      },
    },
    backgroundImage: {
      hero: "url('/images/hero-background.png ')",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
