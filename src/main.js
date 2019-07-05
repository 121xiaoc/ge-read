import Vue from 'vue'
import App from './App.vue'
import router from './router'
import middleware from './middleware'
import './assets/style/reset.scss'
import './utils/intercepors.js'

middleware.install(Vue) // 绑定中间件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
