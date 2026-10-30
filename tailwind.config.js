/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712', // Ultra deep black
          900: '#070d1a', // Rich dark base
          850: '#0b1325', // Surface 1
          800: '#0f1a33', // Surface 2
          750: '#142345', // Surface 3 / hover
          700: '#1e293b', // Border dark
          600: '#334155',
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
      fontFamily: {
        arabic: ['"Amiri"', '"Noto Naskh Arabic"', 'serif'],
        'arabic-body': ['"Noto Naskh Arabic"', '"Amiri"', 'sans-serif'],
        english: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.4)',
        'blue-glow-lg': '0 0 45px rgba(37, 99, 235, 0.5)',
        'cyan-glow': '0 0 30px rgba(6, 182, 212, 0.4)',
        'soft-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.8)',
        'card-dark': '0 8px 24px -4px rgba(2, 6, 23, 0.6), 0 0 1px 1px rgba(59, 130, 246, 0.15)',
      },
      animation: {
        'title-shimmer': 'shimmer 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)'
          }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
