<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'

import { ref } from 'vue'

const counter = ref('gradient')

const changeButtonVariant = () => {
  counter.value += 'gradient' || 'outlined'
}
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери {{ counter }}</div>
    <slot name="label"></slot>
    <slot name="list"></slot>
    <FavouritePlace :key="number" v-for="number in 4" />
    <IButton class="w-full mt-10" @click="increment" variant="gradient">Додати маркер</IButton>
  </div>
</template>
