<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери</div>
    <FavouritePlace :key="number" v-for="number in 4" />
    <IButton class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
