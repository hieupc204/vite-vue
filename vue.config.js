const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    headers : {"Access-Control-Allow-Origin": "*"},
    proxy: 'http://staff-apiV2.epoints.com/',
  },
  transpileDependencies: true,
})
