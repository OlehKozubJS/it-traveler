<script setup>
import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
import { HomepageView } from './views'
</script>

<template>
  <FavouritePlaces
    ><div>This is super slot</div>
    <template v-slot:label>this is label</template>
    <template v-slot:list>this is list</template>
  </FavouritePlaces>
  <!--HomepageView /-->
</template>
