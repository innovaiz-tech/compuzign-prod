import { text } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffda17',
          bgYellow: '#ffda17',
          bgBlack: '#000',
          bgLight: '#fff',
          bgLightBlack: 'rgb(36, 36, 36)',
          bgGray: 'rgb(244, 245, 249)',
          textBlack: '#000',
          textWhite: '#fff',
          textGray: '#808080',
        },
      },
      animation: {
        spin: 'spin 3s linear infinite',
        spinReverse: 'spinReverse 2s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'scale(0.8)' },
          to: { opacity: 1, transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

// #ffda17