/**
 * Constantes del tema de MARCA LOLO DÚO.
 * Fuente de verdad para TS-land (React, futura migración a Next.js).
 * Espejo de la paleta declarada en `tailwind.config.mjs`.
 */

export const COLORS = {
  cream: '#F9F6F0',
  sage: '#B3C8A2',
  sageSoft: '#CBDABE',
  sageDeep: '#8FA97C',
  ink: '#222521',
  inkMuted: '#5A5F57',
  line: '#E4DFD4',
} as const;

export const FONTS = {
  display: "'Fraunces', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
} as const;

export const LAYOUT = {
  maxContentWidth: '72rem',
  sectionSpacing: 'py-24 md:py-32',
} as const;

export type ThemeColor = keyof typeof COLORS;
