/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      animation: {
        'project_display': "project_display .5s ease-in-out",
        'project_list': "project_list .5s ease-in-out",
        'prelude': 'prelude 7s ease-in-out'
      },
      keyframes: {

        project_display:{
          '0%': {
            transform: 'translate(100%, 100%)',
          },
          '100%': {
            transform: 'translate(0%, 0%)',
          }
        },
        project_list:{
          '0%': {
            transform: 'translate(100%, 0%)',
          },
          '100%': {
            transform: 'translate(0%, 0%)',
          }
        },
        prelude: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          } 
        }
      },
    },
  },
  plugins: [

  ],
};
