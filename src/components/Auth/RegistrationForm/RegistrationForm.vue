<script setup>
import IInput from '@/components/IInput/IInput.vue'
import IButton from '@/components/IButton/IButton.vue'
</script>

<template>
  <form action="" class="max-w-[500px] w-full bg-white p-10 rounded-2xl">
    <IInput label="Повне ім'я" />
    <IInput label="Електронна пошта" />
    <IInput label="Пароль" />
    <IButton />
  </form>
</template>
