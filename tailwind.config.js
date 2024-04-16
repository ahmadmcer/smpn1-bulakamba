/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "serif"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'background': '#201658',
        'primary': '#1D24CA',
        'secondary': '#98ABEE',
        'tertiary': '#F9E8C9',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}