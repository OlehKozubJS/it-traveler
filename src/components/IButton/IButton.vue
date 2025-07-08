<script setup>
import { defineProps, computed, toRefs } from 'vue'

const props = defineProps({
  variant: {
    required: true,
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'gradient', 'outline']
    },
  },
})

const { variant } = toRefs(props)

const bgStyles = computed(() => {
  return variant.value === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
})
</script>

<template>
  <button
    class="bg-[#FFA279] rounded-xl py-3 px-10 text-white font-bold -tracking-wider"
    :class="bgStyles"
  >
    <slot></slot>
  </button>
</template>
