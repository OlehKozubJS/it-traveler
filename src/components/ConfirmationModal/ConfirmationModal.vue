<script setup>
import IButton from '../IButton/IButton.vue'
import IModal from '../IModal/IModal.vue'

defineProps({
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

const emit = defineEmits(['cancel', 'confirm'])
</script>

<template>
  <IModal v-if="isOpen">
    <div class="mb-4 test-lg">{{ title }}</div>
    <div class="flex gap-3 justify-center">
      <IButton @click="emit('cancel')" variant="primary"> Відхилити</IButton>
      <IButton @click="emit('confirm')" variant="gradient" :is-loading="isLoading">
        Підтвердити
      </IButton>
    </div>
  </IModal>
</template>
