import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CertificatesPage from '@/pages/CertificatesPage.vue';
import EducationPage from '@/pages/EducationPage.vue';
import TalksPage from '@/pages/TalksPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/certification',
      name: 'Cert',
      component: CertificatesPage,
    },
    {
      path: '/education',
      name: 'Edu',
      component: EducationPage,
    },
    {
      path: '/talks',
      name: 'Talks',
      component: TalksPage,
    },
  ],
});
