import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'
import Lifecycle from "@/views/Lifecycle";
import Events    from "@/views/Events";

Vue.use(VueRouter)

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home
    },
    {
        path     : '/lifecycle',
        name     : 'lifecycle',
        component: Lifecycle
    },{
        path     : '/events',
        name     : 'events',
        component: Events
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
