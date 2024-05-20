/** @type {import('tailwindcss').Config} */
module.exports = {
  module: 'jit',
  purge: ["./public/**/*.html", "./public/**/*.js" ],
  theme: {
    extend: {
      height:{
        custom_sm_hero: "560px",
        custom_lg_hero: "93vh",
        custom_hero: "620px",
      },
      width:{
        custom_420px: "420px",
        custom_560px: "560px",
      },
      colors:{
        sub_brand: "#895F53",
      },
      fontSize:{
        font_btn_sm: "40px",
        font_btn_md: "55px",
      }
    },
  },
  plugins: [],
};
