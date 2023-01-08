import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/main/Main.vue'
import Catalog from '@/pages/catalog/Catalog.vue'
import Basket from '@/pages/basket/Basket.vue'
import Delivery from '@/pages/delivery/Delivery.vue'
import Obmen from '@/pages/obmen/Obmen.vue'
import Offer from '@/pages/offer/Offer.vue'
import Conf from '@/pages/conf/Conf.vue'
import Comments from '@/pages/comments/Comments.vue'
import Contact from '@/pages/contact/Contact.vue'
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/catalog',
      component: Catalog,
    },
    {
      path: '/basket',
      component: Basket,
    },
    {
      path: '/delivery',
      component: Delivery,
    },
    {
      path: '/obmen',
      component: Obmen,
    },
    {
      path: '/offer',
      component: Offer,
    },
    {
      path: '/conf',
      component: Conf,
    },
    {
      path: '/comments',
      component: Comments,
    },
    {
      path: '/contact',
      component: Contact,
    },
    { 
      path: '/:catchAll(.*)', 
      redirect: "/"
    }
  ],
  mode: 'history'
});

export default router;
