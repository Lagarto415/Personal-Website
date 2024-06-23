import { createRouter, createWebHistory } from 'vue-router'
import List from './assets/views/ListView.vue'
import Login from './assets/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory('/shopping/'),
  routes: [
    {
      path: '/liste',
      component: List
    },
    {
      path: '/',
      component: Login
    }
  ]
})

export default router
