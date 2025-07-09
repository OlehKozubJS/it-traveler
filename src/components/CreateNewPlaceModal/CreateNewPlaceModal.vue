<script setup>
import IModal from '../IModal/IModal.vue'
import IInput from '../IInput/IInput.vue'
import InputImage from '../InputImage/InputImage.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({ isOpen: { default: false, type: Boolean } })

const emit = defineEmits(['close'])
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <div class="min-w-[420px]">
      <IInput label="Локація" class="mb-4" />
      <IInput label="Опис" type="textarea" class="mb-2" />
      <InputImage class="mb-10" />
      <IButton variant="gradient">Додати</IButton>
    </div>
  </IModal>
</template>
