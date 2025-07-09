<script setup>
import UploadIcon from './UploadIcon.vue'
</script>

<template>
  <label classr="cursor-pointer hover:text-primary">
    <input type="file" accept="image/*" class="hidden" />
    <span class="flex gap-1 items-center">
      <UploadIcon />
      <span class="underline text-xs">Натисність тут, щоб додати фото</span>
    </span>
  </label>
  <span class="text-red-500"></span>
</template>
