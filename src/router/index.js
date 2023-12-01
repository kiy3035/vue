import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import MypageView from '../views/MypageView.vue';
import CommunityView from '../views/CommunityView.vue';
import RealGrid from '../views/RealGridTest.vue';
import FescoLogin from '../views/FESCO/FescoLoginView.vue';
import FescoBookingEntry from '../views/FESCO/FescoBookingEntryView.vue';
import FescoJoinTest from '../views/FESCO/FescoJoinTestView.vue';


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
  {
    path: '/realgrid',
    component: RealGrid,
  },
  {
    path: '/fesco_login',
    component: FescoLogin,
  },
  {
    path: '/fesco_booking_entry',
    component: FescoBookingEntry,
  },
  {
    path: '/fesco_joinTest',
    component: FescoJoinTest,
  },
]

const router = createRouter({
  history: createWebHistory(), // history 모드
  routes
})

export default router