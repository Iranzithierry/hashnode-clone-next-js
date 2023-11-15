/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './App/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      boxShadow: {
        card: "0 0 10px 0px rgba(255, 107, 0, 0.1)",
        light: "0 2px 10px 2px rgba(0, 0, 0, 0.1)",
        button: "0 0px 5px 0.5px ",
      },
      fontWeight: {
        bold: "700",
      },
      padding: {
        xl: '1.7rem 3rem ',
        lg: '1.5rem 2.25rem',
        base: '1.2rem 1.5rem',
        sm: '0.5rem 0.75rem',
        xs: '0.25rem 0.25rem',
      },
      colors: {
        primary: ["rgb(0, 105, 255)", "rgb(33 66 231 / 1)"," rgb(147 197 253 / 1)"],
        dark: ["rgb(15 23 42 / 1)", "rgb(30 41 59 / 1)"],
        gray: ["rgb(229 231 235 / 1)", "rgb(156 163 175 / 1)"],
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
