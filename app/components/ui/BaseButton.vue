<template>
  <component
    :is="tag"
    v-bind="componentAttrs"
    class="base-button"
    :class="{ 'is-ghost': variant === 'ghost' }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'solid' | 'ghost'

const props = withDefaults(
  defineProps<{
    as?: string
    to?: string
    variant?: ButtonVariant
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    as: 'button',
    variant: 'solid',
    type: 'button'
  }
)

const tag = computed(() => (props.to ? 'NuxtLink' : props.as))

const componentAttrs = computed(() => {
  if (props.to) {
    return { to: props.to }
  }
  return { type: props.type }
})
</script>
