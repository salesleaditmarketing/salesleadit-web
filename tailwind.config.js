/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'sli-navy':    '#0D1B2A',
        'sli-orange':  '#F26522',
        'sli-orange2': '#FF7A35',
        'sli-surface': '#F5F4F0',
        'sli-bg':      '#FAFAF8',
        'sli-card':    '#112236',
        'sli-border':  '#E2E0DA',
        'sli-muted':   '#888888',
        'sli-body':    '#4A4A4A',
      },
      fontFamily: {
        sans:  ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono:  ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'card':    '1.75rem',
        'card-lg': '2.5rem',
        'section': '3rem',
      },
    },
  },
  plugins: [],
}
