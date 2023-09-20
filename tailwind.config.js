/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black': '#111517',
        'gray': '#848484',
        'white': '#fff',
        'dark': '#202C36',
        'dark-card': '#2B3844'
      },
      maxWidth: {
        'container': '1240px'
      },
      boxShadow: {
        'navbar-shadow': '0px 2px 4px 0px #0000000E',
        'navbar-dark-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
        'card-shadow': '0px 0px 7px 2px #00000008',
        'card-shadow-dark': '0px 0px 7px 2px rgba(0, 0, 0, 0.03)',
        'border-country': '0px 0px 4px 1px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}