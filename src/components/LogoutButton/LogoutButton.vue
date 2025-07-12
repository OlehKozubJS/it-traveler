<script setup>
import { logout } from '../../api/user'
import { useMutation } from '../../composables/useMutation'

import LogoutIcon from './LogoutIcon.vue'

const { mutation: logoutUser, isLoading } = useMutation({ mutationFunction: })

const handlelogout = () => {
  logout()
}
</script>

<template>
  <button class="flex gap-2 items-center px-6 text-black" @click="handlelogout">
    Вихід<LogoutIcon />
  </button>
</template>
