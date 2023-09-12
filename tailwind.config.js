/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(1,87,155)',
        'secondary': 'rgb(52 211 153)',
      }
    },
  },

  plugins: [require("daisyui")],
  // plugins: [require("daisyui"),require('tailwind-scrollbar-hide')],
}

