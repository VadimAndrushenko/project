/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index-shop.html",
    "./index-card.html",
    "./index-aliquam-furniture.html",
    "./src/**/*.{html,js}" ,
  ],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', 
        sm: '2rem', 
      },
    },

    extend: {

    },
  },
  plugins: [],
}
