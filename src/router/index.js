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
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projects/lebank',
      name: 'lebank',
      component: () => import('../views/projects/lebank/LeBank.vue')
    },
    {
      path: '/projects/gc',
      name: 'gc',
      component: () => import('../views/projects/GC.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/projects/eoe',
      name: 'eoe',
      component: () => import('../views/projects/EoE.vue')
    }
  ]
})

export default router
