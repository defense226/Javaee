import Vue from 'vue'
import Router from 'vue-router'
import Main from "../view/Main"
<<<<<<< HEAD
import Login from "../view/AccountLogin"
import List from "../view/user/List"
import Profile from "../view/user/Profile"
import Register from "../view/Register"
import Player from "../view/Player";
=======
import Login from "../view/AccountLogin";
import List from "../view/user/List";
import Profile from "../view/user/Profile";
import Register from "../view/Register";
import gameInfor from "@/view/gameInfor";
import Addath from "@/view/Addath";
import Addact from "@/view/Addact";
import welcome from "../view/welcome";
import actList from "../view/actList";
import Athlist from "@/view/Athlist";
import select from "@/view/Select";
>>>>>>> origin/master
Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
<<<<<<< HEAD
            path:"/login",
            component:Login
        },
        {
            path: '/main',
            component: Main,
            //嵌套路由
            children: [
                {
=======
            path: '/login',
            component: Login
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
>>>>>>> origin/master
                    path: "/user/list",
                    component: List
                }, {
                    path: "/user/profile",
                    name:'UserProfile',
                    component: Profile
<<<<<<< HEAD
=======
                },{
                    path: '/gameInfor',
                    component: gameInfor,
                },{
                    path: '/actList',
                    component: actList,
                },{
                    path: '/AthList',
                    component: Athlist,
>>>>>>> origin/master
                }
            ]
        },
        {
<<<<<<< HEAD
=======
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
                },
            ]
        },
        {
>>>>>>> origin/master
            path: "/user/profile/:id",
            component: Profile,
            props: true //添加这一行表示开启props传参
        },
        {
<<<<<<< HEAD
            path: "/goHome",
            redirect: "/"
=======
            path: "/gohome",
            redirect: "/Main"
>>>>>>> origin/master
        },
        {
            path:"/register",
            component:Register
        },
<<<<<<< HEAD
        {
            path:"/",
            component:Player
        },
=======
>>>>>>> origin/master
    ]
})