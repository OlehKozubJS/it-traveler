<script setup>
import { reactive, toRaw } from 'vue'

import IInput from '@/components/IInput/IInput.vue'
import { ItTravelerButton } from '../../ItTravelerButton'

const props = defineProps({ isLoading: { default: false, type: Boolean } })

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput
      class="mb-4"
      label="Електронна пошта"
      type="email"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput label="Пароль" type="password" v-model="userData.password" />
    <ItTravelerButton
      class="mt-30 w-full"
      variant="gradient"
      type="submit"
      :is-loading="props.isLoading"
    >
      Увійти
    </ItTravelerButton>
  </form>
</template>
