<template>
  <section class="hero-banner">
    <div class="hero-content">
      <p class="hero-eyebrow">Nuclx Soft · 跨境建站</p>
      <h1>
        强大的
        <span class="hero-highlight">一站式</span>
        独立站建设
      </h1>
      <p class="hero-subtitle">
        覆盖建站、运营、营销与全球支付，为品牌提供持续增长的独立站基础设施，轻松链接客户、供应链与合作伙伴。
      </p>
      <div class="hero-actions">
        <BaseButton class="hero-btn hero-btn--primary" to="/products">获取建站方案</BaseButton>
        <BaseButton class="hero-btn hero-btn--secondary" variant="ghost" to="/contact/advisor">
          联系解决方案顾问
        </BaseButton>
      </div>
      <ul class="hero-meta">
        <li v-for="item in metaList" :key="item.text">
          <span class="hero-meta__icon">✓</span>
          <span v-html="item.text" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

const metaList = [
  { text: '<strong>100个</strong> 自定义模块化编辑  ' },
  { text: '<strong>80+</strong> 高可用性稳定架构' },
  { text: '企业级安全与数据合规' }
]
</script>
