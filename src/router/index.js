import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/pages/main/Main.vue'
import Catalog from '@/pages/catalog/Catalog.vue'
import Basket from '@/pages/basket/Basket.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
