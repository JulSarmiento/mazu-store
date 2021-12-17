module.exports = {
  content: [ "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
      xxl: '1440px'
    },
    colors: {
      'beige': '#F4F2EE',
      'dark-red': '#682C1A',
      'cream': '#CDB8B1',
      'black': '#1c1917',

    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], // 300 for text and 500 for subtitle
      serif: ['Syncopate', 'serif'], // title
    },

    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
