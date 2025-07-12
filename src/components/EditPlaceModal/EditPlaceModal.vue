<script setup>
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})
const emit = defineEmits(['close'])
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="w-[750x]">
      <div class="flex gap-2 items-center mb-10">
        <MarkerIcon height="18" width="18" />
      </div>
    </div>
  </IModal>
</template>
