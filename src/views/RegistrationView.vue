<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '../api/user'

const handleRegisterUser = () => {}
</script>

<template>
  <RegistrationForm @submit="console.log" />
</template>
