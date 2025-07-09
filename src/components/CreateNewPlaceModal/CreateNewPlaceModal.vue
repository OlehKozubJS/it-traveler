<script setup>
import IModal from '../IModal/IModal.vue'
import IInput from '../IInput/IInput.vue'

const props = defineProps({ isOpen: { default: false, type: Boolean } })
</script>

<template>
  <IModal v-if="props.isOpen">
    <div>
      <IInput />
      <IInput type="textarea" />
    </div>
  </IModal>
</template>
