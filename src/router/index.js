import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '../api/authService'

const GreetingPage = () => import('../views/GreetingView.vue')
const HomePage = () => import('../views/HomepageView.vue')
const AuthPage = () => import('../views/AuthView.vue')
const LoginPage = () => import('../views/LoginView.vue')
const RegistrationPage = () => import('../views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage, name: 'Greeting' },
  { path: '/map', component: HomePage, name: 'Homepage' },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage, name: 'Login' },
      { path: 'registration', component: RegistrationPage, name: 'Registration' },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach
