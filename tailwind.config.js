/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        winTeal: '#008080',
        winGray: '#c0c0c0',
        winDarkGray: '#808080',
        winBlue: '#000080',
        winLightBlue: '#1084d0',
        winYellow: '#ffff00',
      },
      fontFamily: {
        pixel: ['"MS Sans Serif"', 'Tahoma', 'sans-serif'],
        terminal: ['"Courier New"', 'monospace']
      },
      boxShadow: {
        'win-out': 'inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        'win-in': 'inset 1px 1px #0a0a0a, inset -1px -1px #fff, inset 2px 2px #808080, inset -2px -2px #dfdfdf',
        'win-button': 'inset -1px -1px #000, inset 1px 1px #fff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        'win-button-pressed': 'inset 1px 1px #000, inset -1px -1px #fff, inset 2px 2px #808080, inset -2px -2px #dfdfdf',
      }
    },
  },
  plugins: [],
}
