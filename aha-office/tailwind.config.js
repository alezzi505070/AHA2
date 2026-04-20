/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        surface: '#F8F5F0',
        primary: '#553637',
        accent: '#C4A35A',
        textPrimary: '#1A1A1A',
        textMuted: '#6B6B6B',
      },
      fontFamily: {
        sans: ['"Noto Sans Arabic"', 'sans-serif'],
        serif: ['"Noto Serif Arabic"', 'serif'],
      },
    },
  },
  plugins: [],
}
