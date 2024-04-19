/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  safelist: [
    // Padding
    {
      pattern: /^p.?-(\d)/,
      variants: ['sm','lg','md','xl','2xl']
    },

    // Margin
    {
      pattern: /^m.?-(\d)/,
      variants: ['sm','lg','md','xl','2xl']
    },
  ],
}

