<script setup>
import IButton from '../IButton/IButton.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'

const props = defineProps({
  iOpen: {
    default: false,
    type: Boolean,
  },
})
const emit = defineEmits(['close'])
</script>

<template>
  <IModal v-if="props.isOpen"> </IModal>
</template>
