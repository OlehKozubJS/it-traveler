<script setup>
import { onMounted } from 'vue'

import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
//import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
//import { HomepageView } from './views'
//import { TestComponent } from './components/TestComponent'

onMounted(() => {
  console.log('mounted')
})
</script>

<template>
  <!--FavouritePlaces /-->
  <!--TestComponent /-->
  <!--HomepageView /-->
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
</template>
