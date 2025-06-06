import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreView from '../views/SobreView.vue'
import ProjetoView from '../views/ProjetoView.vue'
import ContatoView from '../views/ContatoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView,
    },
    {
      path: '/projeto',
      name: 'projeto',
      component: ProjetoView,
    },
     {
      path: '/contato',
      name: 'contato',
      component: ContatoView,
    },
  ],
})

export default router