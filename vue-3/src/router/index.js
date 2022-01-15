import {createRouter, createWebHistory} from 'vue-router'
import Home                             from '../views/Home.vue'

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    /*-------------posts--------------*/
    {
        path     : '/posts',
        name     : 'posts.index',
        component: () => import('../views/post/Index')
    }, {
        path     : '/posts/create',
        name     : 'posts.create',
        component: () => import('../views/post/CreateEdit')
    }, {
        path     : '/posts/edit/:id',
        name     : 'posts.edit',
        component: () => import('../views/post/CreateEdit')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
