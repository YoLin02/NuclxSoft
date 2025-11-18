<template>
  <div class="page-home">
    <HeroSection />

    <section class="home-section-title">
      精选案例
    </section>

    <ProductSummary
      eyebrow="产品矩阵"
      title="覆盖渠道、供应链与服务网络的全域能力"
      description="以统一标准交付，结合多行业模板和二次开发接口，让业务团队自由组合模块。"
      :items="featuredProducts"
    />

    <section class="home-pillars">
      <article v-for="pillar in pillars" :key="pillar.title">
        <h3>{{ pillar.title }}</h3>
        <p>{{ pillar.description }}</p>
        <ul>
          <li v-for="point in pillar.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </section>

    <NewsList
      eyebrow="动态速览"
      title="与合作伙伴共同构建开放生态"
      description="了解 Nuclx Soft 在大企业数字化、伙伴发展和生态治理上的最新洞察。"
      :items="latestNews"
    />

    <section class="home-cta">
      <div>
        <p class="home-cta__eyebrow">下一步</p>
        <h2>预约顾问，获取定制化迁移路线</h2>
        <p>欢迎携带现有系统架构或业务痛点来访，我们将在 7 个工作日内给出评估方案。</p>
      </div>
      <div class="home-cta__actions">
        <BaseButton to="/contact/advisor">预约顾问</BaseButton>
        <BaseButton variant="ghost" to="/partners">查看伙伴计划</BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/home/HeroSection.vue'
import ProductSummary from '~/components/sections/products/ProductSummary.vue'
import NewsList from '~/components/sections/news/NewsList.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const featuredProducts = [
  {
    slug: 'enterprise-platform',
    title: 'Enterprise Platform',
    summary: '统一身份与权限、流程引擎和集成总线，快速装配企业级应用。',
    tags: ['流程编排', '集成中台', '多租户'],
    category: '数字底座'
  },
  {
    slug: 'data-integration',
    title: 'Data Integration Hub',
    summary: '实时 CDC + 批处理同步，内置数据清洗和权限治理。',
    tags: ['数据网关', '实时链路', '治理'],
    category: '智能数据'
  },
  {
    slug: 'automation-suite',
    title: 'Automation Suite',
    summary: '覆盖供应链、售后与渠道的自动化模板，拖拽式搭建与监控。',
    tags: ['RPA', '触发器', '监控'],
    category: '业务自动化'
  },
  {
    slug: 'analytics-hub',
    title: 'Analytics Hub',
    summary: '为管理层提供财务与经营联动指标，支持自定义看板与警报。',
    tags: ['智能报表', '预测模型', '经营驾驶舱'],
    category: '经营洞察'
  }
]

const pillars = [
  {
    title: '协同透明',
    description: '跨区域跨组织视图随时掌握执行进度。',
    points: ['实时监控 KPI 与 SLA', '任务流向一目了然', '敏捷同步伙伴权限']
  },
  {
    title: '智能运营',
    description: '通过数据闭环与智能策略实现持续优化。',
    points: ['AI 推荐补货与分销策略', '自动推送风险预警', '可插拔行业算法']
  },
  {
    title: '安全开放',
    description: '支持本地部署或云原生，兼顾合规与开放生态。',
    points: ['多层安全隔离', '可审计访问链路', '丰富 API 与 SDK']
  }
]

const latestNews = [
  {
    slug: 'q2-release',
    title: 'Nuclx 发布 Q2 版本，强化渠道伙伴共建能力',
    summary: '新增跨组织工作台以及 AI 辅助配置工具，缩短交付周期 25%。',
    date: '2025-05-08',
    category: '产品发布'
  },
  {
    slug: 'ecosystem-summit',
    title: '首届「白橙生态峰会」在上海举行',
    summary: '超过 150 家 ISV 与系统集成商参加，共同探讨 B2B 协同趋势。',
    date: '2025-04-22',
    category: '生态活动'
  },
  {
    slug: 'case-study-lf',
    title: '领先制造集团上线 Nuclx，构建供应链协同中枢',
    summary: '实现 47 个工厂的库存透明化，并打通上下游接口。',
    date: '2025-03-30',
    category: '客户案例'
  }
]
</script>
