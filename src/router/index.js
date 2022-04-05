import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login/success/profile',
    name: 'UserProfile',
    component:  () => import(/* webpackChunkName: "UserProfile" */ '../views/UsersProfile/ProfileView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:  () => import(/* webpackChunkName: "register" */ '../views/LoginView.vue')
  },
  {
    path: '/login/success',
    name: 'loginSuccess',
    component:  () => import(/* webpackChunkName: "loginSuccess" */ '../views/UserLoginSuccessView.vue')
  },
  {
    path: '/login/success/setting',
    name: 'loginSetting',
    component:  () => import(/* webpackChunkName: "userSetting" */ '../views/UserSettingsView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/:catchAll(.*)+',
    name: 'error404',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
