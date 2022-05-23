import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component:  () => import(/* webpackChunkName: "welcome" */ '../views/WelcomeView.vue'),
  },
  {
    path: '/login/success/profile',
    name: 'UserProfile',
    component:  () => import(/* webpackChunkName: "UserProfile" */ '../views/UsersProfile/ProfileView.vue'),
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
  },
  {
    path: '/login/success/setting',
    name: 'loginSetting',
    component:  () => import(/* webpackChunkName: "userSetting" */ '../views/UserSettingsView.vue'),
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
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: () => import(/* webpackChunkName: "testPage" */ '../views/ToastView.vue'),
  // },
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
