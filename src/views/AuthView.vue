<script setup>
import { RouterView, RouterLink } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout
    ><router-view><router-link></router-link></router-view
  ></BaseLayout>
</template>
