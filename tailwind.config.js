/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}