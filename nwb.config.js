module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Cattous',
      externals: {
        react: 'React'
      }
    }
  }
}
