/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        custom: {
          50:'#db4d27',
          100:'#e2471e'
        }
      }
    },
  },
  plugins: [],
}

