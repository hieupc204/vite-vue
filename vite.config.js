import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  // devServer: {
  //   headers : {"Access-Control-Allow-Origin": "*"},
  //   proxy: 'http://staff-apiV2.epoints.com/',
  // },
  // proxy: {
  //   '/api': {
  //        target: 'http://staff-api.stag.epoints.vn',
  //        changeOrigin: true,
  //        secure: false,      
  //        ws: true,
  //        headers : {"Access-Control-Allow-Origin": "*"},
  //    }
  // },
  // transpileDependencies: true,
  plugins: [vue()],
  resolve : {
    alias: {
      '@' : path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': {
      VUE_APP_API : 'http://staff-api.stag.epoints.vn'
    }
  }
})
