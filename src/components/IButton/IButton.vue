<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    required: true,
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'gradient', 'outline']
    },
  },
  to: String,
})

const bgStyles = computed(() => {
  return props.variant.value === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]'
    : 'bg-[#FFA279]'
})

const isLink = computed(() => {})

const componentName = computed(() => {
  return props.to ? 'link' : 'button'
})
</script>

<template>
  <component
    :is="componentName"
    class="bg-[#FFA279] rounded-xl py-3 px-10 text-white font-bold -tracking-wider"
    :class="bgStyles"
  >
    <slot></slot>
  </component>
</template>
