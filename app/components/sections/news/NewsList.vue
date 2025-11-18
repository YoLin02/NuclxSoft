<template>
  <section class="news-list">
    <header class="news-list__header">
      <div>
        <p class="news-list__eyebrow">{{ eyebrow }}</p>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <NuxtLink class="news-list__more" to="/news">查看全部动态 →</NuxtLink>
    </header>

    <div class="news-cards">
      <article v-for="item in items" :key="item.slug">
        <p class="news-card__date">{{ item.date }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <div class="news-card__meta">
          <span>{{ item.category }}</span>
          <NuxtLink :to="`/news/${item.slug}`">阅读全文</NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface NewsItem {
  slug: string
  title: string
  summary: string
  date: string
  category: string
}

defineProps<{
  eyebrow: string
  title: string
  description: string
  items: NewsItem[]
}>()
</script>
