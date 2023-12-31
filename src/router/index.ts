import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
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
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (Work.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Work" */ '../views/Work.vue')
  },
  {
    path: '/work/:id',
    name: 'WorkDetail',
    // route level code-splitting
    // this generates a separate chunk (Work.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "WorkDetail" */ '../views/WorkDetail.vue'),
    // props: true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
