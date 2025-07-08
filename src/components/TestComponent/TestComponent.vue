<script setup>
import { ref } from 'vue'

const fruits = ['kiwi', 'orange', 'lemon']
const fruitsMap = {
  kiwi: 'super kiwi',
  orange: 'super orange',
  lemon: 'super lemon',
}

let isTestComponent = ref(false)

const toggleTestComponent = () => {
  console.log('clicked')
  if (isTestComponent === true) {
    console.log('else works', isTestComponent)
    isTestComponent.value = false
  } else {
    console.log('if works', isTestComponent)
    isTestComponent.value = true
  }
}
</script>

<style>
.hidden {
  display: none;
}
</style>

<template>
  <button @click="toggleTestComponent()" type="button">Test component</button>
  <template v-if="isTestComponent">
    <div :key="fruit" v-for="(fruit, index) in fruits">{{ index }} : {{ fruit }}</div>
    <div :key="fruit" v-for="(fruit, key) in fruitsMap">{{ key }} : {{ fruit }}</div>
    <div :key="val" v-for="val in 5">{{ val }}</div>
    <div :key="character" v-for="character in 'congratulations'">{{ character }}</div>
  </template>
</template>
