<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери {{ buttonVariant }}</div>
    <FavouritePlace :key="number" v-for="number in 4" />
    <IButton class="w-full mt-10" @click="changeButtonVariant" variant="gradient"
      >Додати маркер</IButton
    >
  </div>
</template>
