import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'

import Layout from '@/views/layout'
import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'
import Category from '@/views/layout/category.vue'
import store from '../store'

const MyOrder = () => import('@/views/myorder')
const Pay = () => import('@/views/pay')
const Prodetail = () => import('@/views/prodetail')
const Search = () => import('@/views/search/index.vue')
const SearchList = () => import('@/views/search/list.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/cart', component: Cart },
      { path: '/user', component: User },
      { path: '/category', component: Category }
    ]
  },
  { path: '/myorder', component: MyOrder },
  { path: '/pay', component: Pay },
  { path: '/detail/:id', component: Prodetail },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList }
]

const router = new VueRouter({
  routes
})

const authPath = ['/myorder', '/pay']
router.beforeEach((to, from, next) => {
  if (!authPath.includes(to.path)) { return next() }
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
