import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
//引入elementui
import 'element-ui/lib/theme-chalk/index.css'
import qs from 'qs'
import VideoPlayer from 'vue-video-player'
// 引入video.js
import 'video.js/dist/video-js.css';
Vue.prototype.$qs = qs
Vue.config.productionTip = false
//在vue中使用elementui
Vue.use(VideoPlayer)
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
