import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式文件
import '@/assets/scss/index.scss'
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
  return config
})
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
