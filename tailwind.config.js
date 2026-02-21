/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a3c6e',
          dark: '#0f2649',
          light: '#2a5298',
          50: '#f0f4fb',
          100: '#dce6f5',
        },
        accent: {
          DEFAULT: '#c8102e',
          light: '#e63950',
          dark: '#a00d24',
        },
        gold: '#f5a623',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(26, 60, 110, 0.10)',
        'card-hover': '0 8px 40px rgba(26, 60, 110, 0.18)',
        'nav': '0 2px 20px rgba(26, 60, 110, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'count-up': 'countUp 2s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
