import Vue from 'vue'
import VueRouter from "vue-router"

import {getToken} from '@/utils/uuid-token'
import store from '@/store/index'

Vue.use(VueRouter)

// 重写 router push / replace 方法
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
        originReplace.call(this, options, () => {
        }, () => {
        })
    }
}


// 配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/home',

    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: {
            showFooter: true
        }
    },
    {
        name: 'search',
        path: '/search',
        component: () => import('@/pages/Search'),
        meta: {
            showFooter: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: {
            showFooter: false
        }
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: {
            showFooter: false
        }
    },
    {
        name: 'detail',
        path: '/detail/:skuId',
        component: () => import('@/pages/Detail'),
        meta: {
            showFooter: true
        }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: {
            showFooter: true
        }
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: {
            showFooter: true
        }
    },
    {
        name: 'trade',
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: {
            showFooter: false
        }
    },
    {
        name: 'pay',
        path: '/pay',
        component: () => import('@/pages/Pay'),
        meta: {
            showFooter: true
        },
        // 设置路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path === '/trade') {
                next()
            } else {
                next(false)
            }
        },
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: {
            showFooter: true
        }
    },
    {
        name: 'center',
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: {
            showFooter: false
        },
        redirect: '/center/myorder',
        children: [
            {
                name: 'myorder',
                path: 'myorder',
                component: () => import('@/pages/Center/Childrens/MyOrder')
            },
            {
                name: 'grouporder',
                path: 'grouporder',
                component: () => import('@/pages/Center/Childrens/GroupOrder')
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    // 配置 vue router 滚动行为
    scrollBehavior(to, from, savedpPosition) {
        return {y: 0}
    }
});

// 配置需要认证的 URL 路径
const needAuthURL = ['/center', '/pay', '/trade'];
// 配置全局前置守卫
router.beforeEach(async (to, from, next) => {
    // 判断用户是否已经登录
    let token = getToken();
    if (token) {
        let userName = store.state.user.userInfo.name;
        // 已经登录 - 无法回到注册/登录页面
        if (to.path === '/login' || to.path === '/register') {
            next('/')
        } else {
            // 获取用户信息
            if (!userName) {
                try {
                    // 如果用户名不存在就去获取
                    await store.dispatch('getUserInfo')
                    next()
                } catch (e) {
                    // 如果获取表示 token 过期，清楚用户信息，重新登录
                    await store.dispatch('logoutUser')
                    next('/login')
                }
            } else {
                next();
            }
        }
    } else {
        // 还未登录 - 直接放行
        if(needAuthURL.every(url => to.path.indexOf(url) === -1)){
            next();
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})


export default router
