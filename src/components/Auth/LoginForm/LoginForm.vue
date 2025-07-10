<script setup>
import { reactive, toRaw } from 'vue'

import FormContainer from '../FormContainer.vue'
import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Електронна пошта" type="email" v-model="userData.email" />
    <IInput class="mb-4" label="Пароль" type="password" v-model="userData.password" />
    <IButton variant="gradient" type="submit" class="mt-32 w-full">Увійти</IButton>
  </form>
</template>
