/** @type {import('tailwindcss').Config} */
module.exports = {
  module: 'jit',
  purge: ["./public/**/*.html", "./public/**/*.js" ],
  theme: {
    extend: {
      height:{
        custom_sm_hero: "560px",
        custom_lg_hero: "91vh",
        custom_md_hero: '85vh',
        custom_hero: "620px",
        custom_10o11: "93%",
        custom_line_md: '2px',
        custom_line_sm: '1px'
      },
      width:{
        custom_420px: "420px",
        custom_560px: "560px",
      },
      colors:{
        sub_brand: "#895F53",
        light_brand: '#FFC58F',
      },
      fontSize:{
        font_btn_sm: "40px",
        font_btn_md: "55px",
      },
      boxShadow:{
        custom: '-5px 3px 10px 5px rgba(0, 0, 0, 0.204)',
      },
      dropShadow:{
        custom:'-5px 3px 10px 5px rgba(0, 0, 0, 0.204)',
      }
    },
  },
  plugins: [],
};
