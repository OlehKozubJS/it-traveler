<script setup>
import { computed, reactive } from 'vue'

import { ItTravelerButton } from '../ItTravelerButton'
import { ItTravelerInput } from '../ItTravelerInput'
import { ItTravelerModal } from '../ItTravelerModal'

import InputImage from '../InputImage/InputImage.vue'

import MarkerIcon from '../icons/MarkerIcon.vue'

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

const formData = reactive({
  title: '',
  description: '',
  img: '',
})

const handleUpload = (url) => {
  formData.img = url
}

const uploadText = computed(() => {
  return `Натисність тут, щоб ${formData.img ? 'змінити' : 'додати'} фото`
})

const resetForm = () => {
  formData.title = ''
  formData.description = ''
  formData.img = ''
}
</script>

<template>
  <ItTravelerModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData, resetForm)" class="min-w-[420px]">
      <div class="flex gap-1 font-bold justify-center mb-10"><MarkerIcon />Додати маркер</div>
      <ItTravelerInput label="Локація" class="mb-4" v-model="formData.title" />
      <ItTravelerInput label="Опис" type="textarea" class="mb-2" v-model="formData.description" />
      <div class="flex gap-1 items-center mb-10">
        <img v-if="formData.img" :src="formData.img" alt="" class="w-20 h-20 object-cover" />
        <InputImage class="mb-10" @uploaded="handleUpload">{{ uploadText }}</InputImage>
      </div>
      <ItTravelerButton class="w-full" variant="gradient" :is-loading="props.isLoading"
        >Додати</ItTravelerButton
      >
      <div v-if="props.hasError" class="text-red-500">Щось пішло не так</div>
    </form>
  </ItTravelerModal>
</template>
