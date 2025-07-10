<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '../api/user'

const handleRegisterUser = async (userData) => {
  try {
    await registerUser(userData)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <RegistrationForm @submit="console.log" />
</template>
