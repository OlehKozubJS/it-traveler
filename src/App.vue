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
    <div class="bg-white h-full w-[400px] shrink-0 overflow-autop pb-10">
      <FavouritePlaces />
    </div>
    <div class=""></div>
  </main>
</template>
