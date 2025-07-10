<script setup>
import { RouterView, RouterLink } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl">
      <div>
        <router-link to="/auth/registration">Створити акаунт</router-link>
        <router-link to="/auth/login">Увійти</router-link>
      </div>
      <router-view></router-view>
    </section>
  </BaseLayout>
</template>
