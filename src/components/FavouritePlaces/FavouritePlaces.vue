<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({ items: { required: true, type: Array } })

const addMarker = () => {}
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери</div>
    <slot name="label"></slot>
    <slot name="list">
      <FavouritePlace :key="place.id" v-for="place in props.items" />
    </slot>
    <slot></slot>
    <IButton class="w-full mt-10" @click="addMarker" variant="gradient">Додати маркер</IButton>
  </div>
</template>
