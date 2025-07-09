<script setup>
import UploadIcon from './UploadIcon.vue'
</script>

<template>
  <label classr="cursor-pointer hover-text-primary">
    <input type="file" accept="image/*" class="hidden" />
    <span>
      <UploadIcon />
      <span></span>
    </span>
  </label>
  <span></span>
</template>
