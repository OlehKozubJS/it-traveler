<script setup>
import IModal from '../IModal/IModal.vue'
import IInput from '../IInput/IInput.vue'
import InputImage from '../InputImage/InputImage.vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import { computed, reactive } from 'vue'

const props = defineProps({
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

const emit = defineEmits(['close', 'submit'])
const formData = reactive({ title: '', description: '', img: '' })

const handleUpload = (url) => {
  formData.img = url
}

const uploadText = computed(() => {
  return `Натисність тут, щоб ${formData.img ? 'змінити' : 'додати'} фото`
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData)" class="min-w-[420px]">
      <div class="flex gap-1 font-bold justify-center mb-10"><MarkerIcon />Додати маркер</div>
      <IInput label="Локація" class="mb-4" v-model="formData.title" />
      <IInput label="Опис" type="textarea" class="mb-2" v-model="formData.description" />
      <div class="flex gap-1 items-center mb-10">
        <img v-if="formData.img" :src="formData.img" alt="" class="w-20 h-20 object-cover" />
        <InputImage class="mb-10" @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>
      <IButton class="w-full" variant="gradient" :is-loading="props.isLoading">Додати</IButton>
      <div v-if="props.hasError" class="text-red-500">Щось пішло не так</div>
    </form>
  </IModal>
</template>
