<script setup>
import { ref } from 'vue'
import UploadIcon from './UploadIcon.vue'

const emit = defineEmits('uploaded')
const errorMessage = ref('')

const handleUploadImage = (event) => {
  const file = event.target.files[0]

  if (file.size > 3 * 1024 * 1024) {
    errorMessage.value = 'Завеликий файл'
    return
  }

  const fileReader = new FileReader()
  errorMessage.value = ''
  fileReader.readAsDataURL(file)
  fileReader.onload = () => {
    emit('uploaded', fileReader.result)
  }
}
</script>

<template>
  <div>
    <label classr="cursor-pointer hover:text-primary">
      <input type="file" accept="image/*" class="hidden" @change="handleUploadImage" />
      <span class="flex gap-2 items-center">
        <UploadIcon />
        <span class="underline text-xs"><slot></slot></span>
      </span>
    </label>
    <div class="text-red-500" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>
