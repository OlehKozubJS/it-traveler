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
  <main>
    <div>
      <FavouritePlaces />
    </div>
    <div></div>
  </main>
</template>
