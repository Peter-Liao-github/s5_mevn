module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/_variables.scss";`
      }
    }
  }
}