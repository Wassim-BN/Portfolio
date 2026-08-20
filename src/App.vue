<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <NavBarComponent />

    <RouterView />
  </div>
</template>
