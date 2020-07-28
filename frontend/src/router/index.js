import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Blog Post',
    component: () => import('../views/SinglePost.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
