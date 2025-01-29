/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'primary': '#1c1d31',
      'secondary': '#313357',
      'accent': '#c91865',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'red': '#f60002',
      'light-gray': '#c6c6c6',
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}