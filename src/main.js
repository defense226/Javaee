import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
//引入elementui
import 'element-ui/lib/theme-chalk/index.css'
import qs from 'qs'
// 引入video.js
import 'video.js/dist/video-js.css';
import './font/iconfont.css';
Vue.prototype.$qs = qs
Vue.config.productionTip = false
//在vue中使用elementui
Vue.use(ElementUI);
// 配置请求的根路径
axios.defaults.baseURL = 'api'
// 挂载到原型对象之前 先设置拦截器 通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  // 为请求头对象添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后都必须 return config
  return config
})
// 在 response 拦截器中， 隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  return config
})
// 原型上挂载axios， 所有组件都可以通过this.$http来请求
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
