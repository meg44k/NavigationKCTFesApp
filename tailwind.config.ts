import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        zenKurenaido: ['Zen Kurenaido', 'sans-serif']
      },
      colors: {
        'kct-red' : '#FF426C',
        'kct-blue' : '#013FF9',
        'kct-yellow' : '#FFB100',
      },
    },
  },
  plugins: [],
};
export default config;
