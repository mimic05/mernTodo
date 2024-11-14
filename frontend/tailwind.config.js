/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue-gray': '#0F172A',
        'cutom-dark-light-gray' : '#334155',
      },
    },
  },
  plugins: [],
}

