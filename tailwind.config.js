/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./about.html","./text-new-cv/about.html","./**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        cello: {
          50: '#f4f6fb',
          100: '#e9edf5',
          200: '#ced9e9',
          300: '#a3bad6',
          400: '#7194bf',
          500: '#4f76a8',
          600: '#3d5e8c',
          700: '#324b72',
          800: '#2d425f',
          900: '#2b3b54',
          950: '#1b2436',
        },
      },
    },

    plugins: [
      require('tailwindcss-animated'),
      require('tailwind-hamburgers'),
      require('flowbite/plugin')
    ],
}
}