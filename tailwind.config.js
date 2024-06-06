/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      transitionProperty: {
        size: 'min-width, min-height',
      },
      colors: {
        base: 'var(--base)',
        surface: 'var(--surface)',
        overlay: 'var(--overlay)',
        muted: 'var(--muted)',
        subtle: 'var(--subtle)',
        text: 'var(--text)',
        love: 'var(--love)',
        gold: 'var(--gold)',
        rose: 'var(--rose)',
        pine: 'var(--pine)',
        foam: 'var(--foam)',
        iris: 'var(--iris)',
        highlightLow: 'var(--highlightLow)',
        highlightMed: 'var(--highlightMed)',
        highlightHigh: 'var(--highlightHigh)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
