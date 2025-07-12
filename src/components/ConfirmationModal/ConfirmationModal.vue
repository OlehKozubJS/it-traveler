<script setup>
import IButton from '../IButton/IButton.vue'
import IModal from '../IModal/IModal.vue'

const props = defineProps({
  title: {
    default: false,
    type: String,
  },
  isOpen: {
    default: false,
    type: Boolean,
  },
  isLoading: {
    default: false,
    type: Boolean,
  },
})
</script>

<template>
  <IModal>
    <div class="mb-4 test-lg">{{ title }}</div>
    <div class="flex gap-3 justify-center">
      <IButton></IButton>
      <IButton></IButton>
    </div>
  </IModal>
</template>
