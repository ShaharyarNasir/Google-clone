const { Component } = require("react/cjs/react.production.min");

module.exports = {
  mode: "jit",
  purge:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: false, 
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
