<script setup>
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { mapSettings } from './map/settings'

import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavouritePlaces />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap class="w-full h-full" :access-token="mapSettings.apiToken"></MapboxMap>
    </div>
  </main>
</template>
