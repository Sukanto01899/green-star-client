/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'universal': '#7BAF2F',
        'light-main': '#f1f5f9',
        'dark-main': '#1e293b',
        'main-hover': '#115e59',
        'dark-hover': '#334155'
      },
      spacing: {
        '25': '1216px'
      }
    },
  },

  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')]
}
