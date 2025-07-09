<script setup>
const props = defineProps({ label: String })

const text = ref('')

const changeValue = (event) => {
  text.value = event.target
}
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block" for="">
      <span class="block text-xs ps-3 mb-2">{{ props.label }}</span>
      <input
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
        type="text"
      />
    </label>
  </div>
</template>
