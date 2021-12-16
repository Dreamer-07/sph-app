import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// 注册全局组件
import '@/components/Global'
// 引入 mock 数据
import '@/mock'

new Vue({
  render: h => h(App),
  // 配置全局消息总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
