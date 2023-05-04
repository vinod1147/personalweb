/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    },
    backgroundImage: {
      'footerbg': "url('/footerbg.png')",
    },
  },
  plugins: [],
}