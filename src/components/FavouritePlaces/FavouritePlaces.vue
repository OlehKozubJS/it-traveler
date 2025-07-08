<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'

import { ref } from 'vue'

const buttonVariant = ref('gradient')

const changeButtonVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'outlined' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <IInput />
    <div class="text-grey mb-4">Додані маркери {{ buttonVariant }}</div>
    <FavouritePlace :key="number" v-for="number in 4" />
    <IButton class="w-full mt-10" @click="changeButtonVariant" :variant="buttonVariant"
      >Додати маркер</IButton
    >
  </div>
</template>
