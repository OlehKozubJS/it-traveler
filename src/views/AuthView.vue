<script setup>
import { RouterView, RouterLink } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <router-link>Створити акаунт</router-link>
    <router-link>Увійти</router-link>
    <router-view></router-view>
  </BaseLayout>
</template>
