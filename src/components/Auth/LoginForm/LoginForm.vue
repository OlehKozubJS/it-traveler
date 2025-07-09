<script setup>
import { reactive, watch } from 'vue'

import FormContainer from '../FormContainer.vue'
import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})

watch(
  userData,
  () => {
    console.log('user login data changed')
  },
  { immediate: true },
)
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" label="Електронна пошта" type="email" v-model="userData.email" />
    <IInput class="mb-4" label="Пароль" type="password" v-model="userData.password" />
    <IButton variant="gradient" type="submit" class="mt-8 w-full">Увійти</IButton>
  </FormContainer>
</template>
