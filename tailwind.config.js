/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      backgroundImage: {
        'hero-bg': "url('./public/hero-bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'custom-bg': '#d8ded7',
      }
    },
    plugins: [],
  }
}