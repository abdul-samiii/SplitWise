/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/home/dev/React/splitwise/src/assets/banner.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}