/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3B4D",
        secondary: "#D0FEFE",
        tertiary: "#017374",
      },
      backgroundImage: {
        'parallex1': "url('./assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg')",
      }
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
