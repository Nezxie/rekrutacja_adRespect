/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom_white: '#FFFFFF',
        custom_grey: '#F5F0EC',
        custom_beige: '#DCC1AB',
        custom_green: '#1B5B31',
        custom_black: '#111111',      
      },
      fontFamily: {
        'inter' : ['"Inter"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      fontSize: {
        '28':'1.75rem'
      },
      spacing: {
        '9': '2.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22':'5.6rem',
        '30': '7.5rem',
        '50': '12.5rem'
      }
    }    
  },
  plugins: [],
}