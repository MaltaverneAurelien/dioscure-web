/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fffcf2',
      'primary': '#03071e',
      'secondary': '#370617',
      'purple': '#9147FF'
    },
    extend: {},
  },
  plugins: [],
}