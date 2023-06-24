/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      screens: {
        'hp' : '200px',
        'tablet' : '940px',
        'laptop' : '1270px',
        'komputer': '1550px',
      },
    },
  },
  plugins: [],
}

