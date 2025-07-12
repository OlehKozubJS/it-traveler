<script setup>
import { computed, ref } from 'vue'

import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { useModal } from '../../composables/useModal'
import { useMutation } from '../../composables/useMutation'
import { updateFavoritePlace } from '@/api/favourite-places'

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

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFunction: async (formData) => {
    await updateFavoritePlace(formData)
  },
  onSuccess: () => {
    closeEditModal()
  },
})

const selectedId = ref(null)
const selectedItem = computed(() => {
  return props.items.find((place) => place.id === selectedId.value)
})

const handleEditPlace = (id) => {
  selectedId.value = id
  openEditModal()
}

const handleSubmit = (formData) => {
  updatePlace(formData)
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
        @click="emit('place-clicked', place.id)"
        @edit="handleEditPlace(place.id)"
      />

      <EditPlaceModal
        :is-open="isEditOpen"
        :is-loading="isLoading"
        :place="selectedItem"
        @close="closeEditModal"
        @submit="handleSubmit"
      />
    </slot>
    <slot></slot>
    <IButton class="w-full mt-10" @click="emit('create')" variant="gradient">
      Додати маркер
    </IButton>
  </div>
</template>
