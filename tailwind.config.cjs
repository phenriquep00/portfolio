/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand': '#feda4a',
      },
      backgroundImage: {
        'tatooine': "url('/tatooine.png')"
      },
      animation: {
        project_display: "project_display .5s ease-in-out",
        project_list: "project_list .5s ease-in-out",
        prelude: "prelude 4s ease-in-out",
        fadein: "fadein 5s ease-in-out",
        contact: "contact 0.75s ease-in-out",
        contactCard: "contactCard 0.75s ease-in-out",
        homeIntro: "homeIntro 2s ease-in-out",
      },
      keyframes: {
        project_display: {
          "0%": {
            transform: "translate(100%, 100%)",
          },
          "100%": {
            transform: "translate(0%, 0%)",
          },
        },
        project_list: {
          "0%": {
            transform: "translate(100%, 0%)",
          },
          "100%": {
            transform: "translate(0%, 0%)",
          },
        },
        prelude: {
          "0%": {
            opacity: 0,
          },
          "75%": {
            opacity: 0
          },
          "100%": {
            opacity: 1,
          },
        },
        fadein: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        contact: {
          "0%": {
            opacity: 0.4,
            transform: "translate(100%, 0%)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0%, 0%)"
          }
        },
        contactCard: {
          "0%": {
            transform: "translate(-300%, 0%)",
          },
          "100%": {
            transform: "translate(0%, 0%)"
          }
        },
        homeIntro: {
          "0%": {
            transform: "translate(-100%, 0%)"
          },
          "100%": {
            transform: "translate(-2%, 0%)"
          }
        }
      },
    },
  },
  plugins: [],
};
