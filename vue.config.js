module.exports = {
 filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          '/wp-json': {
            target: 'http://andrew-portfolio:8888',
            secure: false,
            changeOrigin: true
          }
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";`,
      },
    },
  },
};
