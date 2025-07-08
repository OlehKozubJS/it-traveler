<script setup>
import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
import { HomepageView } from './views'
</script>

<template>
  <FavouritePlaces
    ><div>This is super slot</div>
    <template></template
  ></FavouritePlaces>
  <!--HomepageView /-->
</template>
