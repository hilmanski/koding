/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './../../**/*.md',
    "layouts/**/*.html"
  ],
  theme: {
    extend: {},
    fontSize: {
      xs: '0.8rem',
      sm: '0.8rem',
      base: '1rem',
      md: '0.9rem',
      lg: '1.1rem',
      xl: '1.25rem',
      "2xl": '1.563rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem'  
    }
  },
  plugins: [],
}
