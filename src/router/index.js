import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import AddVideoComp from '../components/AddVideoComp.vue';
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
    component: LoginView,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
  },
  {
    path: '/',
    name: 'AddVideo',
    component: AddVideoComp,
  },
]

const router = createRouter({
  history: createWebHistory(), // history 모드
  routes
})

export default router