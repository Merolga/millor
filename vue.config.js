const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        scss: {
            additionalData: `
                @import "~@/global/styles/functions.scss";
                @import "~@/global/styles/variables.scss";
            `
          },
    },
},
  publicPath: process.env.NODE_ENV === 'production'
  ? '/millor/'
  : '/'
})
