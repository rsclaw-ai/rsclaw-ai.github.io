import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RsClaw',
  description: 'High-performance AI gateway with native OpenClaw A2A orchestration',
  lang: 'zh-CN',
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#e8590c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'RsClaw' }],
    ['meta', { property: 'og:title', content: 'RsClaw - High-performance AI Gateway' }],
    ['meta', { property: 'og:description', content: 'High-performance AI gateway with native OpenClaw A2A orchestration.' }],
  ],

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        outline: { label: '本页目录' },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '最后更新',
        nav: [
          { text: '文档', link: '/docs/getting-started' },
          { text: 'API', link: '/api/' },
          { text: 'CLI', link: '/cli/' },
          { text: '下载', link: '/download' },
        ],
        sidebar: {
          '/docs/': [
            {
              text: '入门',
              items: [
                { text: '快速开始', link: '/docs/getting-started' },
                { text: '安装指南', link: '/docs/installation' },
                { text: 'OpenClaw 迁移', link: '/docs/migration' },
              ]
            },
            {
              text: '配置',
              items: [
                { text: '配置参考', link: '/docs/configuration' },
                { text: '消息通道', link: '/docs/channels' },
                { text: 'LLM 提供商', link: '/docs/providers' },
              ]
            },
            {
              text: '功能',
              items: [
                { text: '内置工具', link: '/docs/tools' },
                { text: '安全机制', link: '/docs/security' },
                { text: '预解析命令', link: '/docs/commands' },
              ]
            },
          ],
          '/api/': [
            {
              text: 'API',
              items: [
                { text: '概览', link: '/api/' },
                { text: 'REST API', link: '/api/rest' },
                { text: 'WebSocket', link: '/api/websocket' },
              ]
            },
          ],
          '/cli/': [
            {
              text: 'CLI 参考',
              items: [
                { text: '概览', link: '/cli/' },
              ]
            },
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Docs', link: '/en/docs/getting-started' },
          { text: 'API', link: '/en/api/' },
          { text: 'CLI', link: '/en/cli/' },
          { text: 'Download', link: '/en/download' },
        ],
        sidebar: {
          '/en/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Quick Start', link: '/en/docs/getting-started' },
                { text: 'Installation', link: '/en/docs/installation' },
                { text: 'Migration from OpenClaw', link: '/en/docs/migration' },
              ]
            },
            {
              text: 'Configuration',
              items: [
                { text: 'Config Reference', link: '/en/docs/configuration' },
                { text: 'Channels', link: '/en/docs/channels' },
                { text: 'LLM Providers', link: '/en/docs/providers' },
              ]
            },
            {
              text: 'Features',
              items: [
                { text: 'Built-in Tools', link: '/en/docs/tools' },
                { text: 'Security', link: '/en/docs/security' },
                { text: 'Pre-parsed Commands', link: '/en/docs/commands' },
              ]
            },
          ],
          '/en/api/': [
            {
              text: 'API Reference',
              items: [
                { text: 'Overview', link: '/en/api/' },
                { text: 'REST API', link: '/en/api/rest' },
                { text: 'WebSocket Protocol', link: '/en/api/websocket' },
              ]
            },
          ],
          '/en/cli/': [
            {
              text: 'CLI Reference',
              items: [
                { text: 'Overview', link: '/en/cli/' },
                { text: 'gateway', link: '/en/cli/gateway' },
                { text: 'setup / onboard', link: '/en/cli/setup' },
                { text: 'configure', link: '/en/cli/configure' },
                { text: 'doctor', link: '/en/cli/doctor' },
                { text: 'channels', link: '/en/cli/channels' },
                { text: 'cron', link: '/en/cli/cron' },
                { text: 'security', link: '/en/cli/security' },
                { text: 'update', link: '/en/cli/update' },
              ]
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    logo: '/rsclaw-logo.svg',
    siteTitle: 'RsClaw',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rsclaw-ai/rsclaw' },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under AGPL-3.0 License',
      copyright: 'Copyright 2026 RsClaw Contributors'
    },

    editLink: {
      pattern: 'https://github.com/rsclaw-ai/rsclaw-ai.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
