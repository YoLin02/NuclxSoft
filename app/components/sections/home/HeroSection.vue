<template>
  <section class="home-hero">
    <div class="home-hero__content">
      <p class="hero-eyebrow">面向B2B的白橙智联云</p>
      <h1>为企业打造高粘性的数字化合作网络</h1>
      <p class="hero-body">
        通过统一的数据底座和柔性的业务编排，我们帮助客户在供应链、渠道和服务网络中实现实时协同，稳步提升营收效率。
      </p>

      <ul class="hero-highlights">
        <li v-for="item in highlights" :key="item.title">
          <span class="hero-highlights__badge" />
          <div>
            <strong>{{ item.title }}</strong>
            <p>{{ item.caption }}</p>
          </div>
        </li>
      </ul>

      <div class="hero-actions">
        <BaseButton to="/contact/advisor">预约顾问</BaseButton>
        <BaseButton variant="ghost" to="/products">查看产品矩阵</BaseButton>
      </div>
    </div>

    <div class="home-hero__panel">
      <header>
        <p>季度交付指数</p>
        <strong>Nuclx Insight</strong>
      </header>
      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="hero-stat">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.value }}</strong>
          <small>{{ stat.trend }}</small>
        </div>
      </div>
      <footer>
        <p>由Nuclx Soft脉搏引擎提供支持</p>
        <span>实时刷新 · SLA 99.95%</span>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue'

const highlights = [
  { title: '多租户业务协同', caption: '按组织灵活分层，快速整合上下游伙伴。' },
  { title: '数据驱动决策', caption: '内建可观测性与分析模型，实时调优策略。' },
  { title: '开放式生态', caption: 'API 与低代码共存，满足定制化与标准化需求。' }
]

const stats = [
  { label: '项目履约率', value: '98.4%', trend: '+3.2% MoM' },
  { label: '平均部署周期', value: '27天', trend: '较去年缩短 12 天' },
  { label: '生态伙伴', value: '160+', trend: '新增 12 家 ISV' }
]
</script>
