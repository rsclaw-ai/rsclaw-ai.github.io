import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeCarousel from './components/HomeCarousel.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h('div', { class: 'home-carousel-slot' }, [
        h(HomeCarousel)
      ])
    })
  },
} satisfies Theme
