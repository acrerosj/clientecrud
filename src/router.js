import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    alias: '/clientes',
    name: 'clientes',
    component: () => import('./components/ClienteList')
  },
  {
    path: '/clientes/crear',
    name: 'clientes-crear',
    component: () => import('./components/ClienteCrear')
  },
  {
    path: '/clientes/:id',
    name: 'clientes-detalle',
    component: () => import('./components/ClienteDetalle')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;