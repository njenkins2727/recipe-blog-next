/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#eb5e28",
        "secondary": "#403d39",
        "base-100": "#252422" 
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        playfair:["Playfair Display", "serif"],
        raleway:["Raleway", "sans-serif"]
      },
      screens: {
        'sm': '426px',
      }
    },
  },
  plugins: [
  require("daisyui"),
  require('@tailwindcss/line-clamp'),
]
};
