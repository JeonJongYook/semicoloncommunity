const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

var path = require("path");

module.exports = {
  // outputDir: path.resolve("../backend/public"),
  outputDir: path.resolve("../public"),
  devServer: {
    proxy: {
      '/api' : {
        target: 'https://localhost:8080/api',
        changeOrigin: true,
        pathRewrite: {
          "^api" : ''
        }
      }
    }
  },
  css: {
      loaderOptions: {
          sass: {
              additionalData: `
                  @import "@/assets/scss/_reset.scss";
                  @import "@/assets/scss/_variables.scss";
                  @import "@/assets/scss/_breakpoints.scss";
                  @import "@/assets/scss/_mixins.scss";
              `
          }
      }
  }
};
