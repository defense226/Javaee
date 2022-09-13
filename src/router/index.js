import Vue from 'vue'
import Router from 'vue-router'
import Main from "../view/Main"
import Login from "../view/AccountLogin"
import List from "../view/user/List"
import Profile from "../view/user/Profile"
import Register from "../view/Register"
import Player from "../view/Player";
Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path:"/login",
            component:Login
        },
        {
            path: '/main',
            component: Main,
            //嵌套路由
            children: [
                {
                    path: "/user/list",
                    component: List
                }, {
                    path: "/user/profile",
                    name:'UserProfile',
                    component: Profile
                }
            ]
        },
        {
            path: "/user/profile/:id",
            component: Profile,
            props: true //添加这一行表示开启props传参
        },
        {
            path: "/goHome",
            redirect: "/"
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/",
            component:Player
        },
    ]
})