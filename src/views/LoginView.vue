<script setup>
import { ref } from 'vue'

import { loginUser } from '@/api/user'
import { useRouter } from 'vue-router'

import { useMutation } from '@/composables/useMutation'

import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'

const { data, isLoading, error, mutation } = useMutation
const router = useRouter()

const handleLoginUser = async (userData) => {
  isLoading.value = true

  try {
    await loginUser(userData)
    router.replace('/map')
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
</template>
