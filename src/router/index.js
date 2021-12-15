import Vue from 'vue'
import VueRouter from "vue-router"

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(VueRouter)

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (options, reject, resolve) {
    // 这里的 this 是 VueRouter 的实例
    if (reject && resolve) {
        originPush.call(this, options, reject, resolve)
    } else {
        originPush.call(this, options, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (options, reject, resolve) {
    if (reject && resolve) {
        originReplace.call(this, options, reject, resolve)
    } else {
        originReplace.call(this, options, () => {}, () => {})
    }
}


const routes = [
    {
        path: '/',
        redirect: '/home',

    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
            showFooter: true
        }
    },
    {
        name: 'search',
        path: '/search',
        component: Search,
        meta: {
            showFooter: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            showFooter: false
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            showFooter: false
        }
    }
]

export default new VueRouter({
    routes
})
