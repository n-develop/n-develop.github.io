import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CertificatesPage from '@/pages/CertificatesPage.vue';
import EducationPage from '@/pages/EducationPage.vue';
import TalksPage from '@/pages/TalksPage.vue';

const routes = [
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
