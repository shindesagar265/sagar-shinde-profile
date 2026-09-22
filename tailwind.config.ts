import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0B1120',
        azure: '#0078D4',
        violet: '#6B46C1',
        signal: '#00C853',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px -28px rgba(0, 120, 212, 0.45)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
