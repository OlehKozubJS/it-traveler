<script setup>
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { useModal } from '../../composables/useModal'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [String, null],
  },
})

const emit = defineEmits(['place-clicked', 'create'])

const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери</div>
    <slot name="label"></slot>
    <slot name="list">
      <div v-if="items.length === 0">Список порожній</div>
      <FavouritePlace
        v-for="place in props.items"
        :key="place._id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place._id === props.activeId"
        @click="emit('place-clicked', place._id)"
      />

      <EditPlaceModal :is-open="isEditOpen" @close="closeEditModal" />
    </slot>
    <slot></slot>
    <IButton class="w-full mt-10" @click="emit('create')" variant="gradient">Додати маркер</IButton>
  </div>
</template>
