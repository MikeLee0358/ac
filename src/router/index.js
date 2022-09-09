import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: "HomePage",
      component: HomePage,
    },
    {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,  
    }
  ],
});

export default router;
