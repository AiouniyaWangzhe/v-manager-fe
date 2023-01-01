// 封装路由函数
// 这里用web哈希  访问的时候是# 不需要服务器做配置
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Login from './../components/Login.vue'
// import { de } from 'element-plus/es/locale'
// import { def } from '@vue/shared'

const routes = [
    {
        name: 'home',
        path: '/',
        // 元素集
        meta: {
            title: '首页'
        },
        component: Home,
        redirect: '/welcome',
        // 子路由
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎页'
                },
                component: Welcome,
            },
            {
                name: 'login',
                path: '/login',
                meta: {
                    title: '登录'
                },
                component: Login,
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router