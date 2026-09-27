/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Carvão da logo: textos e fundos escuros
        carvao: {
          DEFAULT: '#1d1814',
          800: '#2a221c',
          700: '#3a3029',
        },
        // Freijó: o tom de madeira que aparece em quase todos os projetos
        freijo: {
          50: '#faf4ec',
          100: '#f1e4d2',
          200: '#e2c9a8',
          300: '#cfa77a',
          400: '#bb8a57',
          500: '#a8723f',
          600: '#8c5b31',
          700: '#6e4628',
          800: '#523521',
          900: '#3a2618',
        },
        // Linho: fundo claro principal
        linho: {
          DEFAULT: '#f6f1ea',
          50: '#fbf9f5',
          200: '#ece4d8',
          300: '#ddd2c2',
        },
        // Greige: a laca fosca dos armários — neutro moderno
        greige: {
          DEFAULT: '#8f8a82',
          100: '#e7e4df',
          300: '#bdb7ae',
          500: '#8f8a82',
          700: '#5d5952',
        },
        // Musgo: acento discreto (da cozinha verde do portfólio)
        musgo: '#5d6b56',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      opacity: Object.fromEntries(
        [...Array.from({ length: 21 }, (_, i) => i * 5), 8, 12, 15, 18, 22, 35, 45, 55, 65, 85, 88, 92]
          .sort((a, b) => a - b)
          .map((v) => [String(v), String(v / 100)]),
      ),
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
}
