/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: {
          900: '#111827', // Adjust this if necessary
        },
    },},
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Ensure dark mode variants are enabled
    },
  },
  plugins: [],
}

