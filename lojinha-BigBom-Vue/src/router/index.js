import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Mouse from '../views/PagMouse.vue';
import Fone from '../views/PagFone.vue';
import Teclado from '../views/PagTeclado.vue';
import Variados from '../views/PagVariados.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/mouse', name: 'Mouse', component: Mouse },
    { path: '/fone', name: 'Fone', component: Fone },
    { path: '/teclado', name: 'Teclado', component: Teclado },
    { path: '/variados', name: 'Variados', component: Variados },
  ],
});

export default router;


