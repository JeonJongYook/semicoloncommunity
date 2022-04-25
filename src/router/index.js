import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import WelcomeView from '../views/WelcomeView.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
    alias: '/index'
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
  },
  {
    path: '/login/success/profile',
    name: 'UserProfile',
    component:  () => import(/* webpackChunkName: "UserProfile" */ '../views/UsersProfile/ProfileView.vue'),
    meta: {authRequired: true},
  },
  {
    path: '/login',
    name: 'login',
    component:  () => import(/* webpackChunkName: "register" */ '../views/LoginView.vue'),
  },
  {
    path: '/login/success',
    name: 'loginSuccess',
    component:  () => import(/* webpackChunkName: "loginSuccess" */ '../views/UserLoginSuccessView.vue'),
    meta: {authRequired: true},
  },
  {
    path: '/login/success/setting',
    name: 'loginSetting',
    component:  () => import(/* webpackChunkName: "userSetting" */ '../views/UserSettingsView.vue'),
    meta: {authRequired: true},
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "adminPage" */ '../views/Admin/AdMiniStarTorView.vue'),
  },
  {
    path: '/:catchAll(.*)+',
    name: 'error404',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundView.vue')
  },
]

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
