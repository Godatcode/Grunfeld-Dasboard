import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-glossy': 'linear-gradient(135deg, #7C3AED, #EC4899, #06B6D4)',
        'gradient-dynamic': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
        'glass-border': '12px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        glass: 'rgba(255, 255, 255, 0.2)',
        overlay: 'rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        glossy: '0 4px 20px rgba(92, 39, 251, 0.4)',
        intense: '0 8px 30px rgba(0, 0, 0, 0.5)',
        inset: 'inset 0 4px 10px rgba(255, 255, 255, 0.2)',
      },
      keyframes: {
        'glossy-hover': {
          '0%, 100%': { transform: 'translateY(0)', boxShadow: 'var(--tw-shadow)' },
          '50%': { transform: 'translateY(-2px)', boxShadow: 'var(--tw-shadow-intense)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'glossy-hover': 'glossy-hover 0.3s ease-in-out',
        'gradient-shift': 'gradient-shift 3s infinite linear',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
