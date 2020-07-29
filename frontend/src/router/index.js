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
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/create',
    name: 'Create Post',
    component: () => import('../views/CreatePost.vue')
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('../views/Archive.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
