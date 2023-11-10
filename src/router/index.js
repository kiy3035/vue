import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../views/LoginPage.vue';
import PageLayout from '../components/PageLayout.vue';
import GalleryView from '../views/GalleryView.vue';



const routes = [
  {
    path: '/',
    component: PageLayout,
    // children: [
    //   {
    //     path: '',
    //     component: HomeView,
    //   },
    //   {
    //     path: 'about',
    //     component: AboutView, // about 페이지 컨텐츠
    //   },
    // ],
  },
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
]

const router = createRouter({
  history: createWebHistory(), // history 모드
  routes
})

export default router