<template>
  <nav class="nav-bar">
    <div class="nav-brand">
      <span class="nav-brand-badge">NX</span>
      <div>
        <div>Nuclx Soft</div>
        <small>打造极致产品</small>
      </div>
    </div>

    <button class="nav-toggle" type="button" @click="toggleMenu">
      {{ isMenuOpen ? '收起' : '菜单' }}
    </button>

    <div class="nav-links" :class="{ 'is-collapsed': !isMenuOpen }">
      <NavLink v-for="item in navItems" :key="item.to" :to="item.to" :label="item.label">
        <span class="nav-link-label">{{ item.label }}</span>
        <span v-if="item.badge" class="nav-link-badge">{{ item.badge }}</span>
      </NavLink>
    </div>

    <div class="nav-cta">
      <BaseButton variant="ghost" to="/news">新闻速览</BaseButton>
      <BaseButton to="/contact/advisor">预约顾问</BaseButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import NavLink from '~/components/navigation/NavLink.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { useNavigation } from '~/composables/useNavigation'

const navItems = useNavigation()
const isMenuOpen = ref(true)
const breakpoint = '(min-width: 960px)'
let mediaQuery: MediaQueryList | null = null
let changeListener: ((event: MediaQueryListEvent) => void) | null = null

const syncMenuWithViewport = (matches: boolean) => {
  isMenuOpen.value = matches ? true : false
}

const toggleMenu = () => {
  if (mediaQuery?.matches) {
    return
  }
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  if (typeof window === 'undefined') {
    return
  }
  mediaQuery = window.matchMedia(breakpoint)
  syncMenuWithViewport(mediaQuery.matches)
  changeListener = (event: MediaQueryListEvent) => {
    syncMenuWithViewport(event.matches)
  }
  mediaQuery.addEventListener('change', changeListener)
})

onBeforeUnmount(() => {
  if (mediaQuery && changeListener) {
    mediaQuery.removeEventListener('change', changeListener)
  }
})
</script>
