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
        primary: '#FFF5F5',
        secondary: '#DB2777',
        secondaryHover: '#F9A8D4',
        accent: '#FFF5F5',
        muted: '#A1A1AA',
        border: '#1F1F1F',
        surface: '#F7E8E8',
      },
    },
  },
  plugins: [],
};