import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/class/80',
    component: () => import('../views/Products/Product1.vue')
  },
  {
    path: '/class/67',
    component: () => import('../views/Products/Product2.vue')
  },
  {
    path: '/class/81',
    component: () => import('../views/Products/Product3.vue')
  },
  {
    path: '/class/589',
    component: () => import('../views/Products/Product4.vue')
  },
  {
    path: '/class/590',
    component: () => import('../views/Products/Product5.vue')
  },
  {
    path: '/class/82',
    component: () => import('../views/Products/Product6.vue')
  },
  {
    path: '/class/83',
    component: () => import('../views/Products/Product7.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
