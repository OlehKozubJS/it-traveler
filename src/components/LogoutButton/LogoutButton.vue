<script setup>
import { useRouter } from 'vue-router'
import { logout } from '../../api/user'
import { useMutation } from '../../composables/useMutation'

import LogoutIcon from './LogoutIcon.vue'

const router = useRouter()

const { mutation: logoutUser, isLoading } = useMutation({
  mutationFunction: () => logout(),
  onSuccess: () => {
    router.replace('auth/login')
  },
})

const handlelogout = () => {
  logout()
}
</script>

<template>
  <button class="flex gap-2 items-center px-6 text-black" @click="handlelogout">
    Вихід<LogoutIcon />
  </button>
</template>
