module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#E50914',
        secondaryHover: '#B20710',
        accent: '#FFFFFF',
        muted: '#A1A1AA',
        border: '#1F1F1F',
        surface: '#141414',
      },
    },
  },
  plugins: [],
};