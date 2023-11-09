import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RegisterPage from '../views/RegisterPage.vue';
import PageLayout from '../components/PageLayout.vue';
import Notice from '../views/BoardNotice.vue';
import Gallery from '../views/Gallery.vue';


const routes = [
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: '',
        component: HomeView,
      },
      {
        path: 'about',
        component: AboutView, // about 페이지 컨텐츠
      },
    ],
    
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
  },
  {
    path: '/abc',
    name: 'Notice',
    component: Notice,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
