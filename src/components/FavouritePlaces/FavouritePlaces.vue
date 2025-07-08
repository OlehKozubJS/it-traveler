<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'

import { ref } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value += 1
}
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери {{ counter }}</div>
    <slot name="label"></slot>
    <slot name="list"></slot>
    <FavouritePlace :key="number" v-for="number in 4" />
    <IButton class="w-full mt-10" @click="increment">Додати маркер</IButton>
  </div>
</template>
