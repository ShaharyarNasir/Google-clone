const { Component } = require("react/cjs/react.production.min");

module.exports = {
  mode: "jit",
  purge:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  content: [],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Montserrat', 'serif'],
        sans: ['Graphik', 'sans-serif'],

    },
  },
  plugins: [ require('@tailwindcss/line-clamp')], 
}

}