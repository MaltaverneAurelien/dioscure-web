/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fffcf2',
        'dark_blue': '#03071e',
        'light_blue': '#023e8a',
        'dark_red': '#370617',
        'light_red': '#9d0208',
        'twitch_purple': '#9147FF'
      },
    }
  },
  plugins: [],
}