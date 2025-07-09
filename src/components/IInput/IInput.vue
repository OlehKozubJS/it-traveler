<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: () => {
      return ['number', 'text', 'email', 'tel', 'password']
    },
  },
})

defineOptions({ inheritAttrs: false })

const text = ref('')

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    {{ text }}
    <label class="block" for="">
      <span class="block text-xs ps-3 mb-2">{{ props.label }}</span>
      <input
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
        v-bind="{ ...$props, ...$attrs }"
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
      />
      <textarea
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary resize-none"
        v-bind="{ ...$props, ...$attrs }"
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
      />
    </label>
  </div>
</template>
