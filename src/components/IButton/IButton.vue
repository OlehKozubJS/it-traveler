<template>
  <button class="bg-[#FFA279] rounded-xl py-3 px-10 text-white font-bold -tracking-wider">
    <div v-if="$slots.default"></div>
    <slot>Hello button</slot>
  </button>
</template>
