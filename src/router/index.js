import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import GreetingView from '../views/GreetingView.vue'
import AuthView from '../views/AuthView.vue'

const GreetingPage = () => {
  import('../views/GreetingView.vue')
}

const HomePage = () => {
  import('../views/HomepageView.vue')
}

const AuthPage = () => {
  import('../views/AuthView.vue')
}

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: HomePage },
  { path: '/auth', component: AuthPage },
]

export const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })
