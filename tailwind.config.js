/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{ts,tsx}',
  ],
  daisyui: {
    themes: ['dracula'],
  },
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    extend: {
      colors: {
        // Ligth theme
        light: {
          primary: '#a4dad2',
          secondary: '#152C36',
          tertiary: '#FBBF24',
          hot: '#37392e',
          light: '#EAEEF3',
        },

        dark: {
          primary: '#37392e',
          secondary: '#EAEEF3',
          tertiary: '#FBBF24',
          hot: '#f6d809',
          dark: '#37392e',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
