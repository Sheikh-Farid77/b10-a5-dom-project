/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'Lexend': ['Lexend', 'sans-serif'],
    },
    extend: {
      colors: {
        'Primary': '#B4F461',
        'Secondary': '#F9F7F3',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

