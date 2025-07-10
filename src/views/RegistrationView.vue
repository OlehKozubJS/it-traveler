<script setup>
import { ref } from 'vue'

import { registerUser } from '../api/user'
import { useRouter } from 'vue-router'

import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'

const isLoading = ref(false)
const router = useRouter()
const error = ref(null)

const handleRegisterUser = async (userData) => {
  isLoading.value = true

  try {
    await registerUser(userData)
    router.replace('/map')
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
</template>
