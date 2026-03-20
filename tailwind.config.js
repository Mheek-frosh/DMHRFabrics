/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lust-red': '#dc2626',
        'lust-dark': '#111827',
        'whatsapp': '#25D366',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
