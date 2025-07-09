<script setup>
import IModal from '../IModal/IModal.vue'
import IInput from '../IInput/IInput.vue'
import InputImage from '../InputImage/InputImage.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({ isOpen: { default: false, type: Boolean } })
</script>

<template>
  <IModal v-if="props.isOpen">
    <div>
      <IInput />
      <IInput type="textarea" />
      <InputImage />
      <IButton></IButton>
    </div>
  </IModal>
</template>
