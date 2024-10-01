/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "routes/**.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

