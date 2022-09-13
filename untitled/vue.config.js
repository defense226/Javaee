const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 //向后端发动
 /*dev: {
   // 这个是前端项目启动的端口号，vue默认8080，如果与你后端端口不冲突，就不用修改
        port: 8080,
        // 配置不同的后台API地址
  proxyTable: {
    '/api/!**': {
      target:"http://localhost:8081", //你请求的地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/' //替换target中的地址，项目中请求http://xx就直接写成/json就可以了
      }
    },
  }
  }*/
})
