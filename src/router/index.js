import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from './views/HomepageView.vue'
import GreetingView from './views/GreetingView.vue'
import AuthView from './views/AuthView.vue'

const routes = [
  { path: '/', component: HomepageView },
  { path: '/map', component: GreetingView },
  { path: '/auth', component: AuthView },
]
