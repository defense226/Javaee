import Vue from 'vue'
import Router from 'vue-router'
import Main from "../view/Main"
import Login from "../view/AccountLogin";
import List from "../view/user/List";
import Profile from "../view/user/Profile";
import Register from "../view/Register";
import Addath from "@/view/Addath";
import Addact from "@/view/Addact";
import welcome from "../view/welcome";
import actList from "../view/actList";
import Athlist from "@/view/Athlist";
import select from "@/view/Select";
import Player from "@/view/Player";
import explain from "@/view/explain";
Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path:"/login",
            component:Login
        },
        {
            path: '/',
            component: Main,
            redirect:'/welcome',
            //嵌套路由
            children: [
                {
                    path:'/welcome',
                    component:welcome,

                },
                {
                    path: "/user/list",
                    component: List
                }, {
                    path: "/user/profile",
                    name:'UserProfile',
                    component: Profile
                },{
                    path: '/actList',
                    component: actList,
                },{
                    path: '/AthList',
                    component: Athlist,
                }
            ]
        },
        {
            path: '/Main',
            component: Main,
            children:[
                {
                    path: '/Addath',
                    component: Addath,
                },{
                    path: '/Addact',
                    component: Addact,
                },{
                    path: '/Select',
                    component: select,
                },{
                    path: '/explain',
                    component: explain,
                },
            ]
        },
        {
            path: "/user/profile",
            component: Profile,
            props: true //添加这一行表示开启props传参
        },
        {
            path: "/gohome",
            redirect: "/Main"
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/player",
            name:"player",
            component:Player
        },
    ]
})