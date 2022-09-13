import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css';
import VideoPlayer from 'vue-video-player'
// eslint-disable-next-line
import Video from 'video.js'
import 'video.js/dist/video-js.css'
// require('/IDEA/untitled/node_modules/vue-video-player/node_modules/@videojs-player/vue/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
//引入elementui

Vue.prototype.$qs=qs
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
//在vue中使用elementui
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
