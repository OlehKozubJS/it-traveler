<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '../api/user'

const handleRegisterUser = async (userData) => {
  try {
    await registerUser()
  } catch {}
}
</script>

<template>
  <RegistrationForm @submit="console.log" />
</template>
