/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#eb5e28",
        "secondary": "#403d39",
        "dark": "#252422",
        "light": "#fffcf2",
        },
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
        'xxsm': '331px',
        'xsm': '515px',
        'xmd': '399px',
      }
    },
  },
  plugins: [
  require("daisyui"),
  require('@tailwindcss/line-clamp'),
]
};
