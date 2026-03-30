/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f1f8f4',
          100: '#ddeee4',
          200: '#bbdecb',
          300: '#8ec5a9',
          400: '#5fa783',
          500: '#3e8b65',
          600: '#2e6f4f',
          700: '#265941',
          800: '#204735',
          900: '#1b3b2d',
        },
        earth: {
          50: '#fdf8f4',
          100: '#f8eedf',
          200: '#eedabf',
          300: '#e1bf97',
          400: '#d2a06c',
          500: '#c68547',
          600: '#ba6e3a',
          700: '#9b5631',
          800: '#7e462b',
          900: '#663b25',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
