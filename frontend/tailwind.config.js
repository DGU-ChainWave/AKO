/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
      scale: {
        130: '1.30',
        160: '1.60',
      },
      textUnderlineOffset: {
        12: '12px',
      },
      animation: {
        scaleUpDown: 'scaleUpDown 3s infinite',
        scaleUpDownRight: 'scaleUpDownRight 3s infinite',
      },
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1) rotate(-24.86deg)' },
          '50%': { transform: 'scale(0.9) rotate(-24.86deg)' },
        },
        scaleUpDownRight: {
          '0%, 100%': { transform: 'scale(1) rotate(15.97deg)' },
          '50%': { transform: 'scale(0.9) rotate(15.97deg)' },
        },
      },
    },
  },
  plugins: [],
};
