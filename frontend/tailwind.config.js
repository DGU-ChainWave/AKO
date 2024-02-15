/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '0px', max: '400px' },
      md: { min: '401px', max: '1023px' },
      lg: { min: '1080px' },
    },
    backgroundColor: {
      'light-orange': 'rgba(255, 232, 189, 0.65)',
    },
    extend: {
      fontFamily: {
        sans: [
          'NanumSquareNeoOTF',
          'Helvetica',
          'Arial',
          'sans-serif',
          'NanumSquare',
          'Neo',
          'OTF',
          'PyeongChangPeace-Bold',
          'Montserrat',
        ],
      },
    },
  },
  plugins: [],
};
