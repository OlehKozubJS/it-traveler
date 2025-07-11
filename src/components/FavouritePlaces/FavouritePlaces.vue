<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({
  items: { required: true, type: Array },
  activeId: { required: true, type: [Number, null] },
})

const emit = defineEmits(['place-clicked', 'create'])

const handlePlaceClick = () => {
  emit('place-clicked', place.id)
}
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери</div>
    <slot name="label"></slot>
    <slot name="list">
      <div v-if="items.length === 0">Список порожній</div>
      <FavouritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
        @click="handlePlaceClick"
      />
    </slot>
    <slot></slot>
    <IButton class="w-full mt-10" @click="emit('create')" variant="gradient">Додати маркер</IButton>
  </div>
</template>
