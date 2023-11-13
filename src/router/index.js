import { createRouter, createWebHistory } from 'vue-router';
import AddVideoComp from '../components/AddVideoComp.vue';
import LoginView from '../views/LoginView.vue';
import MypageView from '../views/MypageView.vue';


const routes = [
  {
    path: '/',
    component: AddVideoComp,
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/mypage',
    component: MypageView,
  },
]

const router = createRouter({
  history: createWebHistory(), // history 모드
  routes
})

export default router