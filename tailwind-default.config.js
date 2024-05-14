/** @type {import('tailwindcss').Config} */
module.exports = {
  module: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        custom_120px: "120px",
      },
    },
  },
  plugins: [],
}

