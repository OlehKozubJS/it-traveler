<script setup>
import { loginUser } from '../api/user'
import { useRouter } from 'vue-router'
import { authService } from '../api/authService'
import { useMutation } from '../composables/useMutation'
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'

const {
  isLoading,
  error,
  mutation: handleLoginUser,
} = useMutation({
  mutationFunction: (data) => {
    authService.loginUser(data)
  },
  //
  //mutationFunction: loginUser,
  onSuccess: () => {
    router.replace('/map')
  },
})
const router = useRouter()
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
  <div v-if="error" class="text-red-500">{{ error.message }}</div>
</template>
