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
    themes: [
      {
        mytheme: {
          primary: '#fde192',
          secondary: '#fda292',
          accent: '#d35d47',
          neutral: '#191D24',
          'base-100': '#0c1061',
          info: '#fff5d9',
          success: '#349a57',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
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

    extend: {
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [require('daisyui')],
};
