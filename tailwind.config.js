/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx'],
  theme: {
    extend: {
      colors: {
        lime: {
          50: 'rgb(247 254 231)',
          100: 'rgb(236 252 203)',
          200: 'rgb(217 249 157)',
          300: 'rgb(190 242 100)',
          400: 'rgb(163 230 53)',
          500: 'rgb(132 204 22)',
          600: 'rgb(101 163 13)',
          700: 'rgb(77 124 15)',
          800: 'rgb(63 98 18)',
          900: 'rgb(54 83 20)'
        }
      }
    }
  },
  plugins: []
};
