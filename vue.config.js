const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // publicPath: '/semicoloncommunity',
  // outputDir: 'dist', // build 저장 파일 위치
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
