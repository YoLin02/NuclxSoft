<template>
  <NuxtLink :to="to" class="nav-link" :class="{ 'is-active': isActive }">
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string
  label?: string
}>()

const route = useRoute()

const isActive = computed(() => {
  if (props.to === '/') {
    return route.path === '/'
  }
  return route.path === props.to || route.path.startsWith(`${props.to}/`)
})
</script>
