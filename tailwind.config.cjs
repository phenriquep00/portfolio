/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        buttonPrimary: 'var(--color-button-primary)',
        buttonSecondary: 'var(--color-button-secondary)',
        buttonTertiary: 'var(--color-button-tertiary)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        secondary: 'var(--color-border-secondary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        seecondary: 'var(--color-text-secondary)',
        highlightedPrimary: 'var(--color-text-highligthed-primary)',
        highlightedSecondary: 'var(--color-text-highligthed-secondary)',
      },
      ringColor: {
        primary: 'var(--color-ring-primary)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
