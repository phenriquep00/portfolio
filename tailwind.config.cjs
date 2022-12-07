/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      animation: {
        button: "button 1s ease-in-out infinite",
        'project_display': "project_display .5s ease-in-out",
      },
      keyframes: {
        button: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        project_display:{
          '0%': {
            transform: 'translate(100%, 100%)',
          },
          '100%': {
            transform: 'translate(0%, 0%)',
          }
        },
      },
    },
  },
  plugins: [],
};
