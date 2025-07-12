<script setup>
import { ItTravelerButton } from '../ItTravelerButton'
import { ItTravelerModal } from '../ItTravelerModal'

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
  hasError: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['cancel', 'confirm'])
</script>

<template>
  <IModal v-if="isOpen" @close="emit('cancel')">
    <div class="mb-4 test-lg">{{ title }}</div>
    <div class="flex gap-3 justify-center">
      <ItTravelerButton @click="emit('cancel')" variant="primary"> Відхилити</ItTravelerButton>
      <ItTravelerButton @click="emit('confirm')" variant="gradient" :is-loading="isLoading">
        Підтвердити
      </ItTravelerButton>
    </div>
    <div v-if="hasError" class="text-red-500">Щось пішло не так</div>
  </IModal>
</template>
