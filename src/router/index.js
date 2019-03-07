import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../pages/homepage/home.vue'
import boyfriend from '../pages/boyfriend/index.vue'
import girlfriend from '../pages/girlfriend/index.vue'


Vue.use(Router);

export const asyncRoute = [
    {
    path: '/home',
    component: homepage,
    hidden: true
    },
    {
        path: '/boyfriend',
        component: boyfriend,
        hidden: true
    },
    {
        path: '/girlfriend',
        component: girlfriend,
        hidden: true
    },
]

export default new Router({
    routes: asyncRoute
})