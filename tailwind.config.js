/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#F9F1EE',
      primary: '#1A763B',
      secondary: '#1D1D1D',
      lightGray: '#D3D3D3',
      gray: '#808080',
      white: '#ffffff',
      black: '#000000',
      red: '#FF0000',
    },
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      maxHeight: {
        '1/2': '50%',
        '1/4': '25%',
      },
      minHeight: {
        '1/2': '50%',
        '1/4': '25%',
      },
    },
  },
  plugins: [],
};
