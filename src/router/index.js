import { createRouter, createWebHistory } from 'vue-router'
import { authService } from '../api/authService'

window.addEventListener('vite:preloadError', (event) => {
  window.location.reload() // for example, refresh the page
})

const GreetingView = () => import('../views/GreetingView.vue')
const HomepageView = () => import('../views/HomepageView.vue')
const AuthView = () => import('../views/AuthView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegistrationView = () => import('../views/RegistrationView.vue')

/*
import GreetingView from '../views/GreetingView.vue'
import HomepageView from '../views/HomepageView.vue'
import AuthView from '../views/AuthView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'
*/
const routes = [
  { path: '/', component: GreetingView, name: 'greeting' },
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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
/*
router.onError((error, to) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    window.location = to.fullPath
  }
})
*/
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
