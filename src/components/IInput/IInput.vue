<script setup>
const props = defineProps({ label: String })
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label for="" class="block">
      <span class="block text-xs ps-3 mb-2">{{ props.label }}</span>
      <input
        type="text"
        class="w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary"
      />
    </label>
  </div>
</template>
