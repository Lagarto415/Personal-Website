import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/lebank',
      name: 'lebank',
      component: () => import('../views/projects/lebank/LeBank.vue')
    },
    {
      path: '/gc',
      name: 'gc',
      component: () => import('../views/projects/GC.vue')
    }
  ]
})

export default router
