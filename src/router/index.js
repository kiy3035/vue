import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import MypageView from '../views/MypageView.vue';
import CommunityView from '../views/CommunityView.vue';


const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/mypage',
    component: MypageView,
  },
  {
    path: '/community',
    component: CommunityView,
  },
]

const router = createRouter({
  history: createWebHistory(), // history 모드
  routes
})

export default router