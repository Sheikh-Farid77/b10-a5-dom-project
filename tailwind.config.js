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
      // backgroundImage: {
      //   'navbar': "url('./assets/logo.png')",
      //   'footer-texture': "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

