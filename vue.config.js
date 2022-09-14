const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    /* 使用代理 */
    proxy: { // string | Object
      '/api': {
        /* 目标代理服务器地址 */
        target: 'localhost:8085',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
})
