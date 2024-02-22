import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import TaskView from '../components/TaskView.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/task/:id',
    name: 'TaskView',
    component: TaskView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;