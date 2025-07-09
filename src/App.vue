<script setup>
import { ref } from 'vue'

import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import IModal from './components/IModal/IModal.vue'
//import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
//import { HomepageView } from './views'
//import { TestComponent } from './components/TestComponent'

const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}

const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <!--FavouritePlaces /-->
  <!--TestComponent /-->
  <!--HomepageView /-->]
  <button @click="openModal" class="text-white">Open modal</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <IModal v-if="isOpen" @close="closeModal">Hello modal</IModal>
</template>
