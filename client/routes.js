import Router from 'vue-router'
import Home from '@pages/home.vue'
import Login from '@pages/login.vue'
import Register from '@pages/register.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/auth/login',
      component: Login
    },
    {
      path: '/auth/register',
      component: Register
    }
  ]
})
