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
        'primary_blue': '#03071e',
        'secondary_blue': '#232745',
        'dark_blue': '#000D16',
        'yellow': '#FBAE3C',
        'orange': '#F17C53',
        'red_purple': '#96446E',
        'twitch_purple': '#9147FF'
      },
      backgroundImage: {
        'blob': "url('/background_blob.svg')",
      }
    }
  },
  plugins: [],
}