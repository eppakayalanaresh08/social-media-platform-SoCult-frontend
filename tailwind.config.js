/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#9ec05a',
        blue: '#2596be',
        gray: '#242526',
        lightgray: '#4e4f50',
        textgray: '#a5a7aa',
        bggray: '#f8f8f8',
        red: '#d4543b',
      },
      fontSize: {
        '2xs': '10px',
      },
    },
  },
  plugins: [],
};
