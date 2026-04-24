import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '螃蟹 AI (RsClaw)',
  description: '拥有长期记忆与自我学习能力的 AI 智能体引擎，兼容 OpenClaw，你的 AI 不再健忘，越用越懂你',
  lang: 'zh-CN',
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#e8590c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'RsClaw' }],
    ['meta', { property: 'og:title', content: '螃蟹 AI (RsClaw) - AI 智能体引擎' }],
    ['meta', { property: 'og:description', content: '基于 Rust 从零构建的 AI 智能体引擎，原生三层持久化记忆（redb + tantivy + hnsw_rs），支持 OpenClaw 一键迁移、A2A 跨机编排、四种 Agent 后端，全平台桌面版一键安装。' }],
    // One-shot language auto-redirect for non-Chinese browsers.
    // Runs before Vue mounts. Only redirects on the very first visit,
    // then the user can freely use the language switcher.
    ['script', {}, `
      (function () {
        try {
          var path = window.location.pathname;
          // Already on /en/* — record preference and exit.
          if (path === '/en' || path === '/en/' || path.indexOf('/en/') === 0) {
            localStorage.setItem('lang-redirected', 'en');
            return;
          }
          // Already auto-redirected before — don't do it again.
          if (localStorage.getItem('lang-redirected')) return;
          // Chinese browsers: stay on root, remember choice.
          var lang = (navigator.language || '').toLowerCase();
          if (lang.indexOf('zh') === 0) {
            localStorage.setItem('lang-redirected', 'zh');
            return;
          }
          // Non-Chinese browser, first visit: redirect to /en equivalent once.
          localStorage.setItem('lang-redirected', 'en');
          var target = '/en' + (path === '/' ? '/' : path) + window.location.search + window.location.hash;
          window.location.replace(target);
        } catch (_) { /* localStorage may be disabled — fail silently */ }
      })();
    `],
  ],

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        outline: { label: '本页目录' },
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色主题',
        darkModeSwitchTitle: '切换到深色主题',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '最后更新',
        sidebarMenuLabel: '菜单',
        langMenuLabel: '切换语言',
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        editLink: {
          pattern: 'https://github.com/rsclaw-ai/rsclaw-ai.github.io/edit/main/:path',
          text: '在 GitHub 上编辑此页',
        },
        nav: [
          { text: '文档', link: '/docs/getting-started' },
          { text: 'API', link: '/api/' },
          { text: 'CLI', link: '/cli/' },
          { text: '下载', link: '/download' },
          { text: '交流群', link: '/community' },
        ],
        sidebar: {
          '/docs/': [
            {
              text: '入门',
              items: [
                { text: '快速开始', link: '/docs/getting-started' },
                { text: '安装指南', link: '/docs/installation' },
                { text: '从 OpenClaw 迁移', link: '/docs/migration' },
              ],
            },
            {
              text: '配置',
              items: [
                { text: '配置参考', link: '/docs/configuration' },
                { text: '渠道配置', link: '/docs/channels' },
                { text: '模型提供商', link: '/docs/model-providers' },
              ],
            },
            {
              text: '功能',
              items: [
                { text: '工具系统', link: '/docs/tools' },
                { text: '安全设置', link: '/docs/security' },
                { text: '命令系统', link: '/docs/commands' },
                { text: '桌面自动化', link: '/docs/desktop' },
              ],
            },
            {
              text: '高级功能',
              items: [
                { text: '智能体管理', link: '/docs/agents' },
                { text: '记忆系统', link: '/docs/memory' },
                { text: 'Skills 系统', link: '/docs/skills' },
                { text: '插件管理', link: '/docs/plugins' },
                { text: '定时任务', link: '/docs/cron' },
                { text: 'Webhook', link: '/docs/webhooks' },
              ],
            },
            {
              text: '帮助',
              items: [
                { text: '故障排查', link: '/docs/troubleshooting' },
                { text: '常见问题 FAQ', link: '/docs/faq' },
                { text: '桌面版手册', link: '/docs/help/desktop' },
              ],
            },
          ],
          '/api/': [
            {
              text: 'API 文档',
              items: [
                { text: 'REST API', link: '/api/rest' },
                { text: 'WebSocket', link: '/api/websocket' },
              ],
            },
          ],
          '/cli/': [
            {
              text: 'CLI 文档',
              items: [
                { text: 'CLI 命令', link: '/cli/commands' },
              ],
            },
          ],
        },
      },
    },
    '/en': {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        outline: { label: 'On this page' },
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        returnToTopLabel: 'Back to top',
        lastUpdatedText: 'Last updated',
        sidebarMenuLabel: 'Menu',
        langMenuLabel: 'Switch language',
        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },
        editLink: {
          pattern: 'https://github.com/rsclaw-ai/rsclaw-ai.github.io/edit/main/:path',
          text: 'Edit this page on GitHub',
        },
        nav: [
          { text: 'Docs', link: '/en/docs/getting-started' },
          { text: 'API', link: '/en/api/' },
          { text: 'CLI', link: '/en/cli/' },
          { text: 'Download', link: '/en/download' },
          { text: 'Community', link: '/en/community' },
        ],
        sidebar: {
          '/en/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Quick Start', link: '/en/docs/getting-started' },
                { text: 'Installation', link: '/en/docs/installation' },
                { text: 'Migrate from OpenClaw', link: '/en/docs/migration' },
              ],
            },
            {
              text: 'Configuration',
              items: [
                { text: 'Configuration Reference', link: '/en/docs/configuration' },
                { text: 'Channels', link: '/en/docs/channels' },
                { text: 'Model Providers', link: '/en/docs/model-providers' },
              ],
            },
            {
              text: 'Features',
              items: [
                { text: 'Tools', link: '/en/docs/tools' },
                { text: 'Security', link: '/en/docs/security' },
                { text: 'Commands', link: '/en/docs/commands' },
                { text: 'Desktop Automation', link: '/en/docs/desktop' },
              ],
            },
            {
              text: 'Advanced',
              items: [
                { text: 'Agents', link: '/en/docs/agents' },
                { text: 'Memory', link: '/en/docs/memory' },
                { text: 'Skills', link: '/en/docs/skills' },
                { text: 'Plugins', link: '/en/docs/plugins' },
                { text: 'Cron Jobs', link: '/en/docs/cron' },
                { text: 'Webhooks', link: '/en/docs/webhooks' },
              ],
            },
            {
              text: 'Help',
              items: [
                { text: 'Troubleshooting', link: '/en/docs/troubleshooting' },
                { text: 'FAQ', link: '/en/docs/faq' },
                { text: 'Desktop Manual', link: '/en/docs/help/desktop' },
              ],
            },
          ],
          '/en/api/': [
            {
              text: 'API Reference',
              items: [
                { text: 'REST API', link: '/en/api/rest' },
                { text: 'WebSocket', link: '/en/api/websocket' },
              ],
            },
          ],
          '/en/cli/': [
            {
              text: 'CLI Reference',
              items: [
                { text: 'CLI Commands', link: '/en/cli/commands' },
              ],
            },
          ],
        },
      },
    },
  },
})
