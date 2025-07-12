<script setup>
import { reactive, toRaw } from 'vue'

import { ItTravelerInput } from '../../ItTravelerInput'
import { ItTravelerButton } from '../../ItTravelerButton'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['submit'])

const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <ItTravelerInput class="mb-4" label="Повне ім'я" v-model="userData.name" />
    <ItTravelerInput
      class="mb-4"
      label="Електронна пошта"
      type="email"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <ItTravelerInput label="Пароль" type="password" v-model="userData.password" />
    <ItTravelerButton
      class="mt-10 w-full"
      variant="gradient"
      type="submit"
      :is-loading="props.isLoading"
    >
      Створити акаунт
    </ItTravelerButton>
  </form>
</template>
