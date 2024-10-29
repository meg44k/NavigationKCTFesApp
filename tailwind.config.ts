import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/ui/**/*.{js,ts,jsx,tsx,mdx}",
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
        'kct-black' : '#212121',
      },
      animation: {
        "scale-down-hor-right": "scale-down-hor-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "scale-up-hor-right": "scale-up-hor-right 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
      },
      keyframes: {
        "scale-down-hor-right": {
            "0%": {
                transform: "scaleX(1)",
                "transform-origin": "100% 100%"
            },
            to: {
                transform: "scaleX(0)",
                "transform-origin": "100% 100%"
            }
        },
        "scale-up-hor-right": {
          "0%": {
              transform: "scaleX(.4)",
              "transform-origin": "100% 100%"
          },
          to: {
              transform: "scaleX(1)",
              "transform-origin": "100% 100%"
          }
        }
      }
    },
    screens: {
      'iPhoneSE': '400px',
    },
  },
  plugins: [],
};
export default config;
