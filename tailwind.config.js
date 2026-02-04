/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'spider-primary': "#F1ECEA",
        'spider-dark': '#0f172a', // Dark text and buttons
        'spider-bg-light': '#fef9f3', // The cream/tan background tint
      },
      fontFamily: {
        // Assuming a serif for headings and sans for body
        'serif': ['"Libre Baskerville"', 'serif'], 
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}