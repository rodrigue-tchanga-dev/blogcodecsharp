/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/nuxt.config.{js,ts}',
    './app/content/**/*.md',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};