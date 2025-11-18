<template>
  <section class="product-summary">
    <header class="product-summary__header">
      <div>
        <p class="product-summary__eyebrow">{{ eyebrow }}</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <BaseButton variant="ghost" to="/products">查看全部产品</BaseButton>
    </header>

    <div class="product-summary__grid">
      <article v-for="item in items" :key="item.slug" class="product-card">
        <div class="product-card__badge">{{ item.category }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <ul class="product-card__tags">
          <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
        </ul>
        <BaseButton variant="ghost" :to="`/products/${item.slug}`">了解更多</BaseButton>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

interface ProductSummaryItem {
  slug: string
  title: string
  summary: string
  tags: string[]
  category: string
}

defineProps<{
  eyebrow: string
  title: string
  description: string
  items: ProductSummaryItem[]
}>()
</script>
