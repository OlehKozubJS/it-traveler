<script setup>
const props = defineProps({ isOpen: { default: false, type: Boolean } })

import IModal from '../IModal/IModal.vue'
import IInput from '../IInput/IInput.vue'
import InputImage from '../InputImage/InputImage.vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import { reactive } from 'vue'

const emit = defineEmits(['close', 'submit'])
const formData = reactive({ title: '', description: '', img: '' })

const handleUpload = () => {}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit')" class="min-w-[420px]">
      <div class="min-w-[420px]">
        <div class="flex gap-1 font-bold justify-center mb-10"><MarkerIcon />Додати маркери</div>
        <IInput label="Локація" class="mb-4" v-model="formData.title" />
        <IInput label="Опис" type="textarea" class="mb-2" v-model="formData.description" />
        <InputImage class="mb-10" />
        <IButton variant="gradient" class="w-full">Додати</IButton>
      </div>
    </form>
  </IModal>
</template>
