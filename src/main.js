import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

// 注册全局组件
import TypeNav from '@/components/Global/TypeNav'
Vue.component(TypeNav.name, TypeNav)

import productApi from "@/api/product";
productApi.getCategoryList();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
