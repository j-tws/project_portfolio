/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        primary: ['IBM Plex Sans', 'sans-serif'],
        secondary: ['DM Sans', 'sans-serif']
      },
      display: ['group-hover'],

      animation: {
        blob: "blob 7s infinite",
        waving: 'wave 2s linear infinite',
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(-20px, 0px) scale(1)"
          },

          "33%": {
            transform: "translate(50px, -50px) scale(1.1)"
          },

          "66%": {
            transform: "translate(-40px, 20px) scale(0.9)"
          },

          "100%": {
            transform: "translate(-20px, 0px) scale(1)"
          }

        }, // blob

       
      }, // keyframes

    }, // extend
  },
  plugins: [],
}
