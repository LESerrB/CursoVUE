import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //linkActiveClass: "active",
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
      path: '/nueva',
      name: 'nueva',
      component: () => import('../views/NuevaView.vue')
    },
    {
      path: "/nueva/:name",
      name: "poke",
      component: () => import('../views/Poke.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router