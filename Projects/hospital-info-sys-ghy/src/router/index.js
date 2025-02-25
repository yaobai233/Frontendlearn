import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 1. 创建路由组件(此处是引入已创建好的组件)
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'


// 2. 将路由和组件进行映射
const routes = [
    //主路由
    { 
        path: '/',
        component: Main,
        name :'Main',
        redirect: '/home', //重定向
        children: [
            // //子路由（嵌套路由）
            // { path: 'home', component: Home }, //首页
            // { path: 'user', component: User }, //用户管理
            // { path: 'mall', component: Mall },//商品管理
            // { path: 'page1', component: PageOne },//页面一
            // { path: 'page2', component: PageTwo },//页面二
        ]
    },
    //登录页
    {
        path:'/login',
        component: Login,
        name: 'login',
    }
]

//创建router实例,传'routes'配置
const router = new VueRouter({
    routes //缩写，相当于routes: routes
})

//router实例对外暴露
export default router

