<template>
  <AppShell>
    <NavBar />
    <main class="page-wrapper">
      <slot />
    </main>
  </AppShell>
</template>

<script setup lang="ts">
import AppShell from '~/components/layout/AppShell.vue'
import NavBar from '~/components/navigation/NavBar.vue'
</script>
