import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#0A84FF',
          red: '#FF3B30',
          purple: '#7D3C98',
        },
        neutral: {
          light: '#F5F6FA',
          dark: '#121212',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(10, 132, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(10, 132, 255, 0.6)' },
        },
        'neural-pulse': {
          '0%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '0.3', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
