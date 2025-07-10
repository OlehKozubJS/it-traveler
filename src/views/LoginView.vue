<script setup>
import { ref } from 'vue'

import { loginUser } from '@/api/user'
import { useRouter } from 'vue-router'

import { useMutation } from '@/composables/useMutation'

import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'

const { data, isLoading, error, mutation: handleLoginUser } = useMutation(loginUser)
const router = useRouter()
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <div>{{ error.message }}</div>
</template>
