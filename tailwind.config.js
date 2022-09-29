/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fffcf2',
        'dark_blue': '#03071e',
        'medium_blue': '#000019',
        'light_blue': '#5498c8',
        'dark_red': '#370617',
        'light_red': '#9d0208',
        'twitch_purple': '#9147FF'
      },
      backgroundImage: {
        'wave': "url('/background_waves.svg')",
      }
    }
  },
  plugins: [],
}