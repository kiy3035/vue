import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
// import AddVideoComp from '../components/AddVideoComp.vue';
import GalleryView from '../views/GalleryView.vue';


const routes = [
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
  // {
  //   path: '/add-video',
  //   name: 'AddVideo',
  //   component: AddVideoComp,
  // },
]

const router = createRouter({
  history: createWebHistory(), // history 모드
  routes
})

export default router