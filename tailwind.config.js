module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      height: {
        screen: 'var(--fsvh, 100vh)'
      },
      width: {
        screen: 'var(--fsvw, 100vw)'
      }
    }
  },
  plugins: []
}
