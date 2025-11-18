export interface NavigationItem {
  label: string
  to: string
  badge?: string
}

const navigationItems: NavigationItem[] = [
  { label: '首页', to: '/' },
  { label: '产品', to: '/products' },
  { label: '新闻中心', to: '/news' },
  { label: '关于我们', to: '/about' },
  { label: '合作伙伴', to: '/partners' },
  { label: '联系顾问', to: '/contact/advisor', badge: '预约' }
]

export function useNavigation() {
  return navigationItems
}
