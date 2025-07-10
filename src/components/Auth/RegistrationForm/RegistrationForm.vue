<script setup>
import { reactive, toRaw } from 'vue'

import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/IButton/IButton.vue'

const props = defineProps({ isLoading: { default: false, type: Boolean } })

const emit = defineEmits(['submit'])

const userData = reactive({ name: '', email: '', password: '' })
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Повне ім'я" v-model="userData.name" />
    <IInput class="mb-4" label="Електронна пошта" type="email" v-model="userData.email" />
    <IInput class="mb-4" label="Пароль" type="password" v-model="userData.password" />
    <IButton variant="gradient" type="submit" class="mt-8 w-full">Створити акаунт</IButton>
  </form>
</template>
