<template>
  <div class="page-contact-advisor">
    <section class="contact-hero">
      <div>
        <p class="contact-eyebrow">Contact Advisor</p>
        <h1>与顾问携手，规划跨境业务的下一阶段</h1>
        <p>
          告诉我们你的项目范围与团队背景，我们将在 48 小时内安排区域顾问，与您确定 PoC
          或实施路径。
        </p>
        <ul class="contact-highlights">
          <li v-for="item in highlights" :key="item.title">
            <strong>{{ item.title }}</strong>
            <p>{{ item.description }}</p>
          </li>
        </ul>
      </div>
      <div class="contact-info-card">
        <p>服务时间：工作日 09:00-19:00（GMT+8）</p>
        <p>跨境热线：+86 21-4000-900</p>
        <p>邮箱：advisors@nuclxsoft.com</p>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="contact-form__intro">
        <h2>提交咨询</h2>
        <p>
          填写下方表单，Nuclx 顾问会结合您所在行业、业务体量和系统现状，提供最合适的接入方案及伙伴资源对接。
        </p>
        <ul>
          <li>支持中文、英文双语沟通</li>
          <li>可签署双向保密协议</li>
          <li>可安排技术、生态、运营等多角色协同会议</li>
        </ul>
      </div>

      <form class="contact-form" novalidate @submit.prevent="handleSubmit">
        <div class="form-grid">
          <label>
            <span>项目名称 *</span>
            <input
              v-model="form.project"
              type="text"
              name="project"
              @input="clearSubmitState"
              @blur="validateField('project')"
            />
            <small v-if="errors.project">{{ errors.project }}</small>
          </label>

          <label>
            <span>联系电话 *</span>
            <input
              v-model="form.phone"
              type="tel"
              name="phone"
              @input="clearSubmitState"
              @blur="validateField('phone')"
            />
            <small v-if="errors.phone">{{ errors.phone }}</small>
          </label>

          <label>
            <span>工作邮箱 *</span>
            <input
              v-model="form.email"
              type="email"
              name="email"
              @input="clearSubmitState"
              @blur="validateField('email')"
            />
            <small v-if="errors.email">{{ errors.email }}</small>
          </label>

          <label>
            <span>公司名称 *</span>
            <input
              v-model="form.company"
              type="text"
              name="company"
              @input="clearSubmitState"
              @blur="validateField('company')"
            />
            <small v-if="errors.company">{{ errors.company }}</small>
          </label>

          <fieldset class="identity-field">
            <legend>身份类型 *</legend>
            <div class="identity-options">
              <label
                v-for="option in identityOptions"
                :key="option.value"
                class="identity-option"
                :class="{ 'is-active': form.identity === option.value }"
              >
                <input
                  v-model="form.identity"
                  type="radio"
                  name="identity"
                  :value="option.value"
                  @change="handleIdentityChange"
                />
                <span>{{ option.label }}</span>
              </label>
            </div>
            <small v-if="errors.identity">{{ errors.identity }}</small>
          </fieldset>
        </div>

        <label class="textarea-field">
          <span>我们能为您做些什么？</span>
          <textarea v-model="form.note" rows="4" @input="clearSubmitState"></textarea>
        </label>

        <div class="form-actions">
          <BaseButton type="submit">提交给顾问团队</BaseButton>
          <p v-if="submitState.message" :class="['submit-message', submitState.status]">
            {{ submitState.message }}
          </p>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const highlights = [
  { title: '行业专家对接', description: '覆盖制造、零售、跨境电商、能源等 12 个行业。' },
  { title: '多语言支持', description: '提供中英文顾问及 24 小时内邮件响应。' },
  { title: '落地赋能', description: '联动生态伙伴，支持本地化合规与定制集成。' }
]

const identityOptions = [
  { label: '企业代表', value: 'company' },
  { label: '个人创业者', value: 'individual' }
]

type ContactForm = {
  project: string
  phone: string
  email: string
  company: string
  identity: string
  note: string
}

const form = reactive<ContactForm>({
  project: '',
  phone: '',
  email: '',
  company: '',
  identity: '',
  note: ''
})

const errors = reactive<Record<keyof ContactForm, string>>({
  project: '',
  phone: '',
  email: '',
  company: '',
  identity: '',
  note: ''
})

const submitState = reactive<{ status: 'success' | 'error' | ''; message: string }>({
  status: '',
  message: ''
})

const emailRegex =
  /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
const phoneRegex = /^[+0-9\s-]{6,20}$/

const requiredFields: (keyof ContactForm)[] = ['project', 'phone', 'email', 'company', 'identity']

const validateField = (field: keyof ContactForm) => {
  let message = ''
  if (field === 'project' && !form.project.trim()) {
    message = '请填写项目名称'
  }
  if (field === 'phone') {
    if (!form.phone.trim()) {
      message = '请填写联系电话'
    } else if (!phoneRegex.test(form.phone.trim())) {
      message = '请输入正确的联系电话，可包含区号'
    }
  }
  if (field === 'email') {
    if (!form.email.trim()) {
      message = '请填写工作邮箱'
    } else if (!emailRegex.test(form.email.trim())) {
      message = '请输入有效的工作邮箱'
    }
  }
  if (field === 'company' && !form.company.trim()) {
    message = '请填写公司或团队名称'
  }
  if (field === 'identity' && !form.identity) {
    message = '请选择身份类型'
  }

  errors[field] = message
  return !message
}

const validate = () => requiredFields.every((field) => validateField(field))

const clearSubmitState = () => {
  submitState.status = ''
  submitState.message = ''
}

const handleIdentityChange = () => {
  clearSubmitState()
  validateField('identity')
}

const resetForm = () => {
  form.project = ''
  form.phone = ''
  form.email = ''
  form.company = ''
  form.identity = ''
  form.note = ''
  ;(Object.keys(errors) as (keyof ContactForm)[]).forEach((key) => (errors[key] = ''))
}

const handleSubmit = () => {
  const isValid = validate()
  if (!isValid) {
    submitState.status = 'error'
    submitState.message = '请检查信息是否完整且格式正确。'
    return
  }

  submitState.status = 'success'
  submitState.message = '已收到请求，我们会尽快与您联系。'
  // TODO: send data to API when backend ready.
  resetForm()
}
</script>
