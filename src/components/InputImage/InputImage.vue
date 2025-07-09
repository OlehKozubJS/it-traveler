<script setup>
import { ref } from 'vue'
import UploadIcon from './UploadIcon.vue'

const emit = defineEmits('uploaded')
const errorMessage = ref('')
let file = ref(null)

const handleUploadImage = (event) => {
  file = event.target.files[0]

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
      <span class="flex gap-1 items-center">
        <UploadIcon />
        <span class="underline text-xs"
          >Натисність тут, щоб <span v-if="!file">додати</span
          ><span v-else="file">змінити</span> фото</span
        >
      </span>
    </label>
    <div class="text-red-500" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>
