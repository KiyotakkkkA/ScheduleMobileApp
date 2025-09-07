/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./stuff/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
            'dark-primary-hard': '#0d0d0d',
            'dark-primary': '#1A1A1A',
            'dark-primary-light': '#2c2c2c',
            'dark-secondary': '#E67E22',
            
            'orange': {
              400: '#FB923C',
              500: '#E67E22',
              600: '#D4831F',
              700: '#C2741C',
            }
        },
    },
  },
  plugins: [],
}