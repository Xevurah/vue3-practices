import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // REVIEW - WITHOUT LAZY LOAD - wich means that it will be loaded since the start of the page, can be cumulative and impact performance
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // REVIEW - LAZY LOAD - wich means that it will be loaded only when component is called by client (in page when section button its clicked)
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue')
    },
    {
      // REVIEW - LAZY LOAD - wich means that it will be loaded only when component is called by client (in page when section button its clicked)
      path: '/pokemon/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      //REVIEW - pathMatch - VueRouter reserved word
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue")
    }
  ]
})

export default router
