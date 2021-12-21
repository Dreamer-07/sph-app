import Vue from 'vue'
import Vuex from 'vuex'
// 先使用一次插件
Vue.use(Vuex)

import home from "./modules/home"
import search from "./modules/search"
import detail from './modules/detail'
import cart from './modules/cart'
import user from './modules/user'
import order from './modules/order'

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        cart,
        user,
        order
    }
})
