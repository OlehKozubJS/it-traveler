<script setup>
import FavouritePlace from '../FavouritePlace/FavouritePlace.vue'
import IButton from '../IButton/IButton.vue'

import { ref, reactive } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value += 1
}

const user = ref({ name: 'Tom', age: 14 })

const changeUserName = () => {
  user.value.name = 'Harry Potter'
}

let superUser = reactive({ name: 'Super user', age: 1000 })

const changeSuperUserName = () => {
  superUser.name = 'New super user'
}
</script>

<template>
  <div class="px-6">
    <div class="text-grey mb-4">Додані маркери {{ counter }}</div>
    <slot name="label"></slot>
    <slot name="list"></slot>
    <FavouritePlace :key="number" v-for="number in 4" />
    <IButton class="w-full mt-10" @click="increment">Додати маркер</IButton>

    <div class="text-grey">User name {{ user.name }}</div>
    <IButton class="w-full mt-10" @click="changeUserName">Change user name</IButton>
    <div class="text-grey">Super user name {{ superUser.name }}</div>
    <IButton class="w-full mt-10" @click="changeSuperUserName">Change super user name</IButton>
  </div>
</template>
