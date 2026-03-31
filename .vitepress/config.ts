import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RsClaw',
  description: 'High-performance multi-agent AI gateway, OpenClaw compatible',
  lang: 'en-US',
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#e8590c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'RsClaw' }],
    ['meta', { property: 'og:title', content: 'RsClaw - High-performance multi-agent AI gateway' }],
    ['meta', { property: 'og:description', content: '10x faster startup, 10x smaller footprint, zero Node.js dependency. OpenClaw compatible.' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '文档', link: '/zh/docs/getting-started' },
          { text: 'API', link: '/zh/api/' },
          { text: 'CLI', link: '/zh/cli/' },
          { text: '下载', link: '/zh/download' },
        ],
        sidebar: {
          '/zh/docs/': [
            {
              text: '入门',
              items: [
                { text: '快速开始', link: '/zh/docs/getting-started' },
                { text: '安装指南', link: '/zh/docs/installation' },
                { text: 'OpenClaw 迁移', link: '/zh/docs/migration' },
              ]
            },
            {
              text: '配置',
              items: [
                { text: '配置参考', link: '/zh/docs/configuration' },
                { text: '消息通道', link: '/zh/docs/channels' },
                { text: 'LLM 提供商', link: '/zh/docs/providers' },
              ]
            },
            {
              text: '功能',
              items: [
                { text: '内置工具', link: '/zh/docs/tools' },
                { text: '安全机制', link: '/zh/docs/security' },
                { text: '预解析命令', link: '/zh/docs/commands' },
              ]
            },
          ],
          '/zh/api/': [
            {
              text: 'API',
              items: [
                { text: '概览', link: '/zh/api/' },
                { text: 'REST API', link: '/zh/api/rest' },
                { text: 'WebSocket', link: '/zh/api/websocket' },
              ]
            },
          ],
        },
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'RsClaw',

    nav: [
      { text: 'Docs', link: '/docs/getting-started' },
      { text: 'API', link: '/api/' },
      { text: 'CLI', link: '/cli/' },
      { text: 'Download', link: '/download' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/docs/getting-started' },
            { text: 'Installation', link: '/docs/installation' },
            { text: 'Migration from OpenClaw', link: '/docs/migration' },
          ]
        },
        {
          text: 'Configuration',
          items: [
            { text: 'Config Reference', link: '/docs/configuration' },
            { text: 'Channels', link: '/docs/channels' },
            { text: 'LLM Providers', link: '/docs/providers' },
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Built-in Tools', link: '/docs/tools' },
            { text: 'Security', link: '/docs/security' },
            { text: 'Pre-parsed Commands', link: '/docs/commands' },
          ]
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'REST API', link: '/api/rest' },
            { text: 'WebSocket Protocol', link: '/api/websocket' },
          ]
        },
      ],
      '/cli/': [
        {
          text: 'CLI Reference',
          items: [
            { text: 'Overview', link: '/cli/' },
            { text: 'gateway', link: '/cli/gateway' },
            { text: 'setup / onboard', link: '/cli/setup' },
            { text: 'configure', link: '/cli/configure' },
            { text: 'doctor', link: '/cli/doctor' },
            { text: 'channels', link: '/cli/channels' },
            { text: 'cron', link: '/cli/cron' },
            { text: 'security', link: '/cli/security' },
            { text: 'update', link: '/cli/update' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rsclaw-ai/rsclaw' },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under MIT / Apache-2.0 License',
      copyright: 'Copyright 2026 RsClaw Contributors'
    },

    editLink: {
      pattern: 'https://github.com/rsclaw-ai/rsclaw-ai.github.io/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
  },
})
