<script setup>
import UploadIcon from './UploadIcon.vue'

const handleUploadImage = (event) => {
  const file = event.target.files[0]
  console.log(file)
}
</script>

<template>
  <label classr="cursor-pointer hover:text-primary">
    <input type="file" accept="image/*" class="hidden" @change="handleUploadImage" />
    <span class="flex gap-1 items-center">
      <UploadIcon />
      <span class="underline text-xs">Натисність тут, щоб додати фото</span>
    </span>
  </label>
  <span class="text-red-500"></span>
</template>
