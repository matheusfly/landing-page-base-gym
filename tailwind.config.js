/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseDark: '#1E1E1E',      // Black / Deep Green
        olive: '#4C4A2D',         // Earthy Military Olive
        lightOlive: '#9A9873',    // Two-Tone Olive (Light)
        lime: '#B0D236',          // Lime Green Accent
        grayLight: '#E5E7EB',     // A light gray for text
        grayMedium: '#9CA3AF',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-.05em',
      }
    },
  },
  plugins: [],
}
