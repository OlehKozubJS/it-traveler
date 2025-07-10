<script setup>
import { registerUser } from '../api/user'
import { useRouter } from 'vue-router'

import { useMutation } from '@/composables/useMutation'

import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'

const {
  isLoading,
  error,
  mutation: handleRegisterUser,
} = useMutation({
  mutationFunction: registerUser,
  onSuccess: () => {
    router.replace('/map')
  },
})
const router = useRouter()
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
