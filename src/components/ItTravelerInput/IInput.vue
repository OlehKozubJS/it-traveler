<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: () => {
      return ['number', 'text', 'email', 'tel', 'password', 'textarea']
    },
  },
})

defineOptions({ inheritAttrs: false })

const text = ref('')

const emit = defineEmits(['update:modelValue'])

const isTextarea = computed(() => {
  return props.type === 'textarea'
})

const baseStyles =
  'w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary'

const inputStyles = computed(() => {
  return baseStyles + (isTextarea.value ? ' resize-none' : '')
})

const componentName = computed(() => {
  return isTextarea.value ? 'textarea' : 'input'
})
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    {{ text }}
    <label class="block" for="">
      <span class="block text-xs ps-3 mb-2">{{ props.label }}</span>
      <component
        :is="componentName"
        rows="3"
        :class="inputStyles"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>
