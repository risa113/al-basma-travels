/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00282b",
          dark: "#001b1d",
          container: "#073f43",
          light: "#0b5358"
        },
        secondary: {
          DEFAULT: "#0e696a",
          container: "#a3f0f0",
          fixed: "#a3f0f0",
          dim: "#88d3d4"
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#f3e5ab",
          shimmer: "#e5c378",
          dark: "#9e7d23"
        },
        surface: {
          DEFAULT: "#f8faf8",
          dim: "#d8dad9",
          bright: "#f8faf8",
          container: "#eceeec",
          "container-low": "#f2f4f2",
          "container-high": "#e6e9e7",
          "container-highest": "#e1e3e1",
          "container-lowest": "#ffffff"
        },
        "on-surface": "#191c1b",
        "on-surface-variant": "#404849",
        "outline-variant": "#c0c8c9",
        outline: "#707979",
        tertiary: {
          DEFAULT: "#172527",
          container: "#2d3b3c"
        }
      },
      fontFamily: {
        serif: ["Noto Serif", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        arabic: ["Amiri", "serif"]
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'gold-shimmer': 'goldShimmer 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        goldShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
