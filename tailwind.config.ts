/* eslint-disable global-require */
import { type Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxHeight: {
        fullContent: 'calc(100vh - 34px)',
        desktop: 'calc(100vh - 108px - 76px)',
      },
      colors: {
        base: 'rgb(var(--base) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        overlay: 'rgb(var(--overlay) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        subtle: 'rgb(var(--subtle) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        love: 'rgb(var(--love) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
        rose: 'rgb(var(--rose) / <alpha-value>)',
        pine: 'rgb(var(--pine) / <alpha-value>)',
        foam: 'rgb(var(--foam) / <alpha-value>)',
        iris: 'rgb(var(--iris) / <alpha-value>)',
        highlightLow: 'rgb(var(--highlightLow) / <alpha-value>)',
        highlightMed: 'rgb(var(--highlightMed) / <alpha-value>)',
        highlightHigh: 'rgb(var(--highlightHigh) / <alpha-value>)',
        discText: '#938f8e',
        discTextActive: '#fffefc',
        discPurple: 'rgb(114,137,218)',
        discBlack: '#1d1e20',
        discDarkGrey: '#2c2d30',
        discGrey: '#323338',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
} satisfies Config;
