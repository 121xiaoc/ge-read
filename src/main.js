import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.scss'
import middleware from './middleware'

middleware.install(Vue) // 绑定中间件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
