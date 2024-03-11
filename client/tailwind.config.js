/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#121212',
        secondary: '#000000',
        hover: '#b3b3b322'
      },
      textColor: {
        primary: '#ffffff',
        secondary: '#b3b3b3'
      },
    }
  },
  plugins: [],
}