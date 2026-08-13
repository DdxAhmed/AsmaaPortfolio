/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#050810',
        navyCard: 'rgba(255, 255, 255, 0.03)',
        navyBorder: 'rgba(255, 255, 255, 0.08)',
        electric: '#3B82F6',
        accentPurple: '#7C5CFC',
        highlightCyan: '#22D3EE',
        textPrimary: '#F1F5F9',
        textSecondary: '#94A3B8',
        brandSuccess: '#10B981',
        brandWarning: '#F59E0B',
      },
      fontFamily: {
        ar: ['Cairo', 'sans-serif'],
        enHead: ['Space Grotesk', 'sans-serif'],
        enBody: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
