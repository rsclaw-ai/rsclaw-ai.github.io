<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import ImageCarousel from './ImageCarousel.vue'

const route = useRoute()
const isEn = computed(() => route.path.startsWith('/en'))

const zhSlides = [
  { src: '/screenshot-cn-0.jpg', caption: '控制台总览 — 实时日志、通道状态一目了然' },
  { src: '/screenshot-cn-1.jpg', caption: '多语言引导 — 支持 10 种语言一键切换' },
  { src: '/screenshot-cn-2.jpg', caption: '环境检测 — 自动发现 OpenClaw，一键迁移' },
  { src: '/screenshot-cn-3.jpg', caption: '模型配置 — 连接 LLM 提供商，选择模型' },
  { src: '/screenshot-cn-4.jpg', caption: '通道接入 — 飞书/微信扫码登录' },
  { src: '/screenshot-cn-5.jpg', caption: '基础配置 — 网关端口与绑定地址' },
  { src: '/screenshot-cn-6.jpg', caption: '启动验证 — 全自动健康检查，一键就绪' },
  { src: '/screenshot-cn-7.jpg', caption: 'AI 对话 — 文件、网络、编程、自动化全能' },
  { src: '/screenshot-cn-8.jpg', caption: '配置管理 — 网关参数精细调整' },
  { src: '/screenshot-cn-9.jpg', caption: '智能体管理 — 多 Agent 灵活编排协作' },
  { src: '/screenshot-cn-10.jpg', caption: '技能管理 — 在线搜索安装扩展技能' },
]

const enSlides = [
  { src: '/screenshot-en-0.jpg', caption: 'Dashboard — real-time logs & channel status at a glance' },
  { src: '/screenshot-en-1.jpg', caption: 'Multi-language — 10 languages, one-click switch' },
  { src: '/screenshot-en-2.jpg', caption: 'Environment detection — auto-discover OpenClaw, one-click migration' },
  { src: '/screenshot-en-3.jpg', caption: 'Model setup — connect LLM providers, pick your model' },
  { src: '/screenshot-en-4.jpg', caption: 'Channel connection — Feishu / WeChat QR login' },
  { src: '/screenshot-en-5.jpg', caption: 'Basic config — gateway port & bind address' },
  { src: '/screenshot-en-6.jpg', caption: 'Launch check — fully automated health verification' },
  { src: '/screenshot-en-7.jpg', caption: 'AI chat — files, web, coding, automation all-in-one' },
  { src: '/screenshot-en-8.jpg', caption: 'Config panel — fine-tune gateway parameters' },
  { src: '/screenshot-en-9.jpg', caption: 'Agent management — orchestrate multiple agents' },
  { src: '/screenshot-en-10.jpg', caption: 'Skill management — search & install skill extensions' },
]

const slides = computed(() => isEn.value ? enSlides : zhSlides)
const images = computed(() => slides.value.map(s => s.src))
const captions = computed(() => slides.value.map(s => s.caption))
</script>

<template>
  <ImageCarousel :images="images" :captions="captions" :interval="5000" />
</template>
