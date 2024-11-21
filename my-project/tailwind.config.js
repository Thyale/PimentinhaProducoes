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
    },
  },
  plugins: [],
}