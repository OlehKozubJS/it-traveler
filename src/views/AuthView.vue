<script setup>
import { RouterView, RouterLink } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <router-link to="registration">Створити акаунт</router-link>
    <router-link to="login">Увійти</router-link>
    <router-view></router-view>
  </BaseLayout>
</template>
