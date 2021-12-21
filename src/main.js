import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import api from '@/api'

// 注册全局组件
import '@/components/Global'
// 引入 mock 数据
import '@/mock'
// 引入 element-ui
import '@/utils/element-ui'

new Vue({
  render: h => h(App),
  // 配置全局消息总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$api = api;
  },
  router,
  store
}).$mount('#app')
