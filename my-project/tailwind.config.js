/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'VermelhoEscuro': '#5B0000',
      'Black' : '#000000' ,
      'CinzaEscuro' : '#363636',
      'Cinza' : '#9F9F9F',
      'CinzaClaro' : '#D9D9D9',
      'Branco' : '#FEFEFE',
      'Verde' : '#AFBF36',
      'Amarelo' : '#D9C355',
      'Vermelho' : '#D96A6A',
    },
    fontFamily: {
      FontTexts: ['Aboreto', 'system-ui'],
      FonteTitles: ['Julius Sans One', 'sans-serif'],
    },
    screens: {
      'Mobile': {'max': '639px'},
      'Tablet' : {'max' : '1250px'},
    },
    extend: {},
  },
  plugins: [],
}

