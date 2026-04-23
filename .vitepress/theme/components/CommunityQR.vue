<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isEn = computed(() => route.path.startsWith('/en'))
const active = ref(0)

const groups = [
  { icon: '/qr-wechat.jpg', label: '微信群', labelEn: 'WeChat' },
  { icon: '/qr-feishu.jpg', label: '飞书群', labelEn: 'Feishu' },
  { icon: '/qr-qq.jpg', label: 'QQ 群', labelEn: 'QQ' },
  { icon: '/qr-telegram.jpg', label: 'Telegram', labelEn: 'Telegram' },
]
</script>

<template>
  <div class="community-qr">
    <div class="qr-title">🦀 {{ isEn ? 'RsClaw Community' : '螃蟹 AI 用户交流群' }}</div>
    <div class="qr-tabs">
      <button
        v-for="(g, i) in groups"
        :key="g.labelEn"
        :class="{ active: active === i }"
        @click="active = i"
      >{{ isEn ? g.labelEn : g.label }}</button>
    </div>
    <div class="qr-display">
      <img :src="groups[active].icon" :alt="groups[active].labelEn" class="qr-img" />
    </div>
  </div>
</template>

<style scoped>
.community-qr {
  text-align: center;
  padding: 8px 0;
  position: relative;
  z-index: 2;
}
.qr-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 10px;
}
.qr-tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.qr-tabs button {
  padding: 6px 14px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.qr-tabs button.active {
  color: #f97316;
  border-bottom-color: #f97316;
}
.qr-tabs button:not(.active):hover {
  color: var(--vp-c-text-1);
}
.qr-display {
  display: flex;
  justify-content: center;
}
.qr-img {
  width: 180px;
  height: 180px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
  background: #fff;
  padding: 6px;
}

@media (max-width: 959px) {
  .qr-img {
    width: 140px;
    height: 140px;
  }
  .qr-tabs button {
    padding: 6px 10px;
    font-size: 12px;
  }
}
</style>
