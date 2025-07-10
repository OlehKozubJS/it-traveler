import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import { authService } from './api/authService'

import App from './App.vue'

const token = localStorage.getItem()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
