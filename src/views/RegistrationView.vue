<script setup>
import { useRouter } from 'vue-router'
import { authService } from '../api/authService'
import { useMutation } from '@/composables/useMutation'

import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'

const router = useRouter()

const {
  isLoading,
  error,
  mutate: handleRegisterUser,
} = useMutation({
  mutationFunction: async (data) => {
    await authService.registerUser(data)
  },
  onSuccess: () => {
    router.replace('/map')
  },
})
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
