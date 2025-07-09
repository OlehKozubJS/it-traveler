<script setup>
import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])
</script>

<template>
  <form
    action=""
    class="max-w-[500px] w-full bg-white p-10 rounded-2xl"
    @submit.prevent="emit('submit')"
  >
    <IInput class="mb-4" label="Повне ім'я" />
    <IInput class="mb-4" label="Електронна пошта" type="email" />
    <IInput class="mb-4" label="Пароль" type="password" />
    <IButton variant="gradient" type="submit" class="mt-8 w-full">Створити акаунт</IButton>
  </form>
</template>
