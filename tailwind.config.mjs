/** @type {import('tailwindcss').Config} */
// NOTA: esta paleta es espejo de `src/config/theme.ts` (fuente de verdad en TS-land).
// Si cambias un color aquí, actualízalo también allí.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F0',
        sage: {
          DEFAULT: '#B3C8A2',
          soft: '#CBDABE',
          deep: '#8FA97C',
        },
        ink: {
          DEFAULT: '#222521',
          muted: '#5A5F57',
        },
        line: '#E4DFD4',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      letterSpacing: {
        wideish: '0.18em',
      },
    },
  },
  plugins: [],
};
