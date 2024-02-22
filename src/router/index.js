import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import NotePage from '../pages/NotePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/note',
    name: 'NotePage',
    component: NotePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
