import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../views/LoginPage.vue';
import AddVideo from '../components/AddVideo.vue';

import GalleryView from '../views/GalleryView.vue';



const routes = [
    {
    path: '/',
    name: 'home',
    component: HomeView
  },
 {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
  },
  {
    path: '/',
    name: 'AddVideo',
    component: AddVideo,
  },
]

const router = createRouter({
  history: createWebHistory(), // history 모드
  routes
})

export default router