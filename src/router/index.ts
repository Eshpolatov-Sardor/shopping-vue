import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Оплата from '../views/Оплата.vue'
import Проекты from '../views/Проекты.vue'
import Star from '../views/Star.vue'
import Main from '../views/Main.vue'
import Акции from '../views/Акции.vue'
import компании from '../views/Kомпании.vue'
import Кoнтакты from '../views/Кoнтакты.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/oblata',
      name: 'oblata',
      component: Оплата,
    },
    {
      path: '/prokty',
      name: 'prokty',
      component: Проекты,
    },
    {
      path: '/Star',
      name: 'Star',
      component: Star,
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/aksiya',
      name: 'aksiya',
      component: Акции,
    },
    {
      path: '/kompanitiy',
      name: 'kompanitiy',
      component: компании,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Кoнтакты,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/Доставка.vue'),
    },
  ],
})
export default router
