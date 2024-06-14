/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        cornflower: {
          50: '#f3f8fc',
          100: '#e7f1f7',
          200: '#c9e1ee',
          300: '#81bcd9',
          400: '#62acce',
          500: '#3e92b9',
          600: '#2d759c',
          700: '#265e7e',
          800: '#235169',
          900: '#214459',
          950: '#162c3b',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        hero: "url('./src/assets/fondo hero 1.png')",
        contact: 'url(./src/assets/your_ideas_matter.webp)',
      },
    },
  },
  plugins: [],
}
