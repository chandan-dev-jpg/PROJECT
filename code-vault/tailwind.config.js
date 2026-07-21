/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f5f7fb',
          100: '#e9edf5',
          200: '#cfd8e6',
          300: '#a4b3cc',
          400: '#7488ab',
          500: '#54698c',
          600: '#3f5170',
          700: '#2f3d58',
          800: '#1b2436',
          900: '#0e1524',
          950: '#080c15',
        },
        brand: {
          50: '#eef4ff',
          100: '#dfeaff',
          200: '#b8d3ff',
          300: '#84b3ff',
          400: '#4c8bff',
          500: '#2563EB',
          600: '#1d4fc4',
          700: '#1a3f9c',
          800: '#183580',
          900: '#182f68',
        },
        vault: {
          violet: '#7C3AED',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#EF4444',
          cyan: '#06B6D4',
        },
      },
      boxShadow: {
        soft: '0 2px 10px -2px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(37,99,235,0.08), 0 12px 40px -12px rgba(37,99,235,0.35)',
        'glow-lg': '0 0 40px -8px rgba(37,99,235,0.45)',
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'vault-gradient': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        'vault-radial': 'radial-gradient(circle at top right, rgba(37,99,235,0.15), transparent 60%)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        'pulse-ring': { '0%': { transform: 'scale(0.9)', opacity: 0.7 }, '80%,100%': { transform: 'scale(1.4)', opacity: 0 } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        shimmer: 'shimmer 2s infinite linear',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
