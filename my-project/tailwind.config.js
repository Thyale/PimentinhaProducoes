/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aclonica: ['Aclonica', 'sans-serif'],
        aboreto: ['Aboreto', 'system-ui'],
      },
      screens: {
        'Mobile': {'max': '939px'},
      },
      colors: {
        'Preto': 'rgba(0, 0, 0, 1)',
        'Branco' : 'rgba(255, 255, 255, 1)',
        'Amarelo' : 'rgba(213, 203, 82, 1)',
        'hoverAmarelo' : 'rgba(200, 190, 74, 1)',
        'Verde' : 'rgba(167, 199, 53, 1)',
        'hoverVerde' : 'rgba(163, 194, 50, 1)',
        'Salmao' : 'rgba(220, 112, 104, 1)',
        'hoverSalmao' : 'rgba(215, 106, 97, 1)',
        'Vinho': 'rgba(91, 0, 0, 1)',
        'Cinza' : 'rgba(217, 217, 217, 1)',
        'CinzaEscuro' : 'rgba(120, 120, 120, 1)'
      },
    },
  },
  plugins: [],
}