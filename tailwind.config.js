/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'zoom-in': 'zoomIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1.2s ease-out forwards',
        'slide-left': 'slideLeft 1.2s ease-out forwards',
        'expand-horizontal': 'expandHorizontal 1.2s ease-out forwards',
        'fly-vertical': 'flyVertical 3s linear forwards'
      },
      keyframes: {
        zoomIn: {
          '0%': {
            transform: 'scale(0.1) translateY(-50%)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1) translateY(0)',
            opacity: 1,
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        expandHorizontal: {
          '0%': {
            transform: 'scaleX(0)',
            opacity: 0,
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'scaleX(1)',
            opacity: 1,
            transformOrigin: 'center',
          },
        },
        flyVertical: {
          '0%': { transform: 'translateY(100vh)' }, // Start off-screen at the bottom
          '100%': { transform: 'translateY(-4vh)' } // End off-screen at the top
        }
      },
    },
  },
  plugins: [],
}

