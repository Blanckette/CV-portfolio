/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  plugins: [require('tailwind-hamburgers')],
}

module.exports = {

  plugins: [
      require('flowbite/plugin')
  ]

}