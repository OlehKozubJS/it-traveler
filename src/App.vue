<script setup>
import { ref } from 'vue'

import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'

const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}

const openModal = () => {
  isOpen.value = true
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavouritePlaces />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl"></div>
  </main>
</template>
