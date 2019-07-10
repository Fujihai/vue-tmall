import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('pages/home')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('pages/category')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('pages/search')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
