import { createRouter, createWebHashHistory } from 'vue-router'
import { authService } from '../api/authService'

import MainView from '../views/MainView.vue'

//const MainView = () => import('../views/MainView.vue')
const GreetingView = () => import('../views/GreetingView.vue')
const HomepageView = () => import('../views/HomepageView.vue')
const AuthView = () => import('../views/AuthView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegistrationView = () => import('../views/RegistrationView.vue')

//import GreetingView from '../views/GreetingView.vue'
console.log('Hello! This is new deploy')
const routes = [
  { path: '/', component: MainView, redirect: '/greeting' },
  { path: '/greeting', component: GreetingView, name: 'greeting' },
  { path: '/map', component: HomepageView, name: 'homepage' },
  {
    path: '/auth',
    component: AuthView,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginView, name: 'login' },
      { path: 'registration', component: RegistrationView, name: 'registration' },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'registration']
  const { name } = to

  if (authRoutes.includes(name) && authService.isLoggedIn()) {
    next({ name: 'homepage' })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})
