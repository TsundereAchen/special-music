import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式文件
import '@/assets/scss/index.scss'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

// 配置请求的根路径
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
  return config
})
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('./assets/common/default.png')  //此图片路径为懒加载的默认图，小伙伴根据实际情况更改路径
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
