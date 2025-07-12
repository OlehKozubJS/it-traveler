<script setup>
import { useRouter } from 'vue-router'
import { logout } from '../../api/user'
import { authService } from '../../api/authService'
import { useMutation } from '../../composables/useMutation'

import LogoutIcon from './LogoutIcon.vue'

const router = useRouter()

const { mutation: logoutUser, isLoading } = useMutation({
  mutationFunction: () => logout(),
  onSuccess: () => {
    authService.clearToken()
    router.replace('auth/login')
  },
})
</script>

<template>
  <button @click="logoutUser">
    <span v-if="isLoading">Loading...</span>
    <span v-else class="flex gap-2 items-center px-6 text-black">Вихід<LogoutIcon /></span>
  </button>
</template>
