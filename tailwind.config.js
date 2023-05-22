/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1683033578/fondo_valentini_p68cfx.jpg')",
        'footer-texture': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1683033578/fondo_valentini_p68cfx.jpg')",
      }
    },
  },
  plugins: [],
}

