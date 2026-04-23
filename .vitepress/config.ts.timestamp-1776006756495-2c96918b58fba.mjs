// .vitepress/config.ts
import { defineConfig } from "file:///sessions/laughing-wizardly-hypatia/mnt/rsclaw-ai.github.io/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "RsClaw",
  description: "High-performance AI gateway with native OpenClaw A2A orchestration",
  lang: "zh-CN",
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ["meta", { name: "theme-color", content: "#e8590c" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "RsClaw" }],
    ["meta", { property: "og:title", content: "RsClaw - High-performance AI Gateway" }],
    ["meta", { property: "og:description", content: "High-performance AI gateway with native OpenClaw A2A orchestration." }]
  ],
  locales: {
    root: {
      label: "\u4E2D\u6587",
      lang: "zh-CN",
      themeConfig: {
        outline: { label: "\u672C\u9875\u76EE\u5F55" },
        darkModeSwitchLabel: "\u5916\u89C2",
        returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
        lastUpdatedText: "\u6700\u540E\u66F4\u65B0",
        nav: [
          { text: "\u6587\u6863", link: "/docs/getting-started" },
          { text: "API", link: "/api/" },
          { text: "CLI", link: "/cli/" },
          { text: "\u4E0B\u8F7D", link: "/download" }
        ],
        sidebar: {
          "/docs/": [
            {
              text: "\u5165\u95E8",
              items: [
                { text: "\u5FEB\u901F\u5F00\u59CB", link: "/docs/getting-started" },
                { text: "\u5B89\u88C5\u6307\u5357", link: "/docs/installation" },
                { text: "OpenClaw \u8FC1\u79FB", link: "/docs/migration" }
              ]
            },
            {
              text: "\u914D\u7F6E",
              items: [
                { text: "\u914D\u7F6E\u53C2\u8003", link: "/docs/configuration" },
                { text: "\u6D88\u606F\u901A\u9053", link: "/docs/channels" },
                { text: "LLM \u63D0\u4F9B\u5546", link: "/docs/providers" }
              ]
            },
            {
              text: "\u529F\u80FD",
              items: [
                { text: "\u5185\u7F6E\u5DE5\u5177", link: "/docs/tools" },
                { text: "\u5B89\u5168\u673A\u5236", link: "/docs/security" },
                { text: "\u9884\u89E3\u6790\u547D\u4EE4", link: "/docs/commands" }
              ]
            }
          ],
          "/api/": [
            {
              text: "API",
              items: [
                { text: "\u6982\u89C8", link: "/api/" },
                { text: "REST API", link: "/api/rest" },
                { text: "WebSocket", link: "/api/websocket" }
              ]
            }
          ],
          "/cli/": [
            {
              text: "CLI \u53C2\u8003",
              items: [
                { text: "\u6982\u89C8", link: "/cli/" }
              ]
            }
          ]
        }
      }
    },
    en: {
      label: "English",
      lang: "en-US",
      themeConfig: {
        nav: [
          { text: "Docs", link: "/en/docs/getting-started" },
          { text: "API", link: "/en/api/" },
          { text: "CLI", link: "/en/cli/" },
          { text: "Download", link: "/en/download" }
        ],
        sidebar: {
          "/en/docs/": [
            {
              text: "Getting Started",
              items: [
                { text: "Quick Start", link: "/en/docs/getting-started" },
                { text: "Installation", link: "/en/docs/installation" },
                { text: "Migration from OpenClaw", link: "/en/docs/migration" }
              ]
            },
            {
              text: "Configuration",
              items: [
                { text: "Config Reference", link: "/en/docs/configuration" },
                { text: "Channels", link: "/en/docs/channels" },
                { text: "LLM Providers", link: "/en/docs/providers" }
              ]
            },
            {
              text: "Features",
              items: [
                { text: "Built-in Tools", link: "/en/docs/tools" },
                { text: "Security", link: "/en/docs/security" },
                { text: "Pre-parsed Commands", link: "/en/docs/commands" }
              ]
            }
          ],
          "/en/api/": [
            {
              text: "API Reference",
              items: [
                { text: "Overview", link: "/en/api/" },
                { text: "REST API", link: "/en/api/rest" },
                { text: "WebSocket Protocol", link: "/en/api/websocket" }
              ]
            }
          ],
          "/en/cli/": [
            {
              text: "CLI Reference",
              items: [
                { text: "Overview", link: "/en/cli/" },
                { text: "gateway", link: "/en/cli/gateway" },
                { text: "setup / onboard", link: "/en/cli/setup" },
                { text: "configure", link: "/en/cli/configure" },
                { text: "doctor", link: "/en/cli/doctor" },
                { text: "channels", link: "/en/cli/channels" },
                { text: "cron", link: "/en/cli/cron" },
                { text: "security", link: "/en/cli/security" },
                { text: "update", link: "/en/cli/update" }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    logo: "/rsclaw-logo.svg",
    siteTitle: "RsClaw",
    socialLinks: [
      { icon: "github", link: "https://github.com/rsclaw-ai/rsclaw" }
    ],
    search: {
      provider: "local"
    },
    footer: {
      message: "Released under AGPL-3.0 License",
      copyright: "Copyright 2026 RsClaw Contributors"
    },
    editLink: {
      pattern: "https://github.com/rsclaw-ai/rsclaw-ai.github.io/edit/main/:path",
      text: "Edit this page on GitHub"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvbGF1Z2hpbmctd2l6YXJkbHktaHlwYXRpYS9tbnQvcnNjbGF3LWFpLmdpdGh1Yi5pby8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvc2Vzc2lvbnMvbGF1Z2hpbmctd2l6YXJkbHktaHlwYXRpYS9tbnQvcnNjbGF3LWFpLmdpdGh1Yi5pby8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vc2Vzc2lvbnMvbGF1Z2hpbmctd2l6YXJkbHktaHlwYXRpYS9tbnQvcnNjbGF3LWFpLmdpdGh1Yi5pby8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6ICdSc0NsYXcnLFxuICBkZXNjcmlwdGlvbjogJ0hpZ2gtcGVyZm9ybWFuY2UgQUkgZ2F0ZXdheSB3aXRoIG5hdGl2ZSBPcGVuQ2xhdyBBMkEgb3JjaGVzdHJhdGlvbicsXG4gIGxhbmc6ICd6aC1DTicsXG4gIGNsZWFuVXJsczogdHJ1ZSxcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxuXG4gIGhlYWQ6IFtcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjZTg1OTBjJyB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6ICd3ZWJzaXRlJyB9XSxcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6c2l0ZV9uYW1lJywgY29udGVudDogJ1JzQ2xhdycgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogJ1JzQ2xhdyAtIEhpZ2gtcGVyZm9ybWFuY2UgQUkgR2F0ZXdheScgfV0sXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogJ0hpZ2gtcGVyZm9ybWFuY2UgQUkgZ2F0ZXdheSB3aXRoIG5hdGl2ZSBPcGVuQ2xhdyBBMkEgb3JjaGVzdHJhdGlvbi4nIH1dLFxuICBdLFxuXG4gIGxvY2FsZXM6IHtcbiAgICByb290OiB7XG4gICAgICBsYWJlbDogJ1x1NEUyRFx1NjU4NycsXG4gICAgICBsYW5nOiAnemgtQ04nLFxuICAgICAgdGhlbWVDb25maWc6IHtcbiAgICAgICAgb3V0bGluZTogeyBsYWJlbDogJ1x1NjcyQ1x1OTg3NVx1NzZFRVx1NUY1NScgfSxcbiAgICAgICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NTkxNlx1ODlDMicsXG4gICAgICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnLFxuICAgICAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjAnLFxuICAgICAgICBuYXY6IFtcbiAgICAgICAgICB7IHRleHQ6ICdcdTY1ODdcdTY4NjMnLCBsaW5rOiAnL2RvY3MvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0FQSScsIGxpbms6ICcvYXBpLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDTEknLCBsaW5rOiAnL2NsaS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU0RTBCXHU4RjdEJywgbGluazogJy9kb3dubG9hZCcgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgICcvZG9jcy8nOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTUxNjVcdTk1RTgnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsIGxpbms6ICcvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU1Qjg5XHU4OEM1XHU2MzA3XHU1MzU3JywgbGluazogJy9kb2NzL2luc3RhbGxhdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPcGVuQ2xhdyBcdThGQzFcdTc5RkInLCBsaW5rOiAnL2RvY3MvbWlncmF0aW9uJyB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnXHU5MTREXHU3RjZFJyxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTkxNERcdTdGNkVcdTUzQzJcdTgwMDMnLCBsaW5rOiAnL2RvY3MvY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTZEODhcdTYwNkZcdTkwMUFcdTkwNTMnLCBsaW5rOiAnL2RvY3MvY2hhbm5lbHMnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTExNIFx1NjNEMFx1NEY5Qlx1NTU0NicsIGxpbms6ICcvZG9jcy9wcm92aWRlcnMnIH0sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdcdTUyOUZcdTgwRkQnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTE4NVx1N0Y2RVx1NURFNVx1NTE3NycsIGxpbms6ICcvZG9jcy90b29scycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTVCODlcdTUxNjhcdTY3M0FcdTUyMzYnLCBsaW5rOiAnL2RvY3Mvc2VjdXJpdHknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU5ODg0XHU4OUUzXHU2NzkwXHU1NDdEXHU0RUU0JywgbGluazogJy9kb2NzL2NvbW1hbmRzJyB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgJy9hcGkvJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQVBJJyxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdcdTY5ODJcdTg5QzgnLCBsaW5rOiAnL2FwaS8nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUkVTVCBBUEknLCBsaW5rOiAnL2FwaS9yZXN0JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1dlYlNvY2tldCcsIGxpbms6ICcvYXBpL3dlYnNvY2tldCcgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgICcvY2xpLyc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0NMSSBcdTUzQzJcdTgwMDMnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1x1Njk4Mlx1ODlDOCcsIGxpbms6ICcvY2xpLycgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVuOiB7XG4gICAgICBsYWJlbDogJ0VuZ2xpc2gnLFxuICAgICAgbGFuZzogJ2VuLVVTJyxcbiAgICAgIHRoZW1lQ29uZmlnOiB7XG4gICAgICAgIG5hdjogW1xuICAgICAgICAgIHsgdGV4dDogJ0RvY3MnLCBsaW5rOiAnL2VuL2RvY3MvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0FQSScsIGxpbms6ICcvZW4vYXBpLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDTEknLCBsaW5rOiAnL2VuL2NsaS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRG93bmxvYWQnLCBsaW5rOiAnL2VuL2Rvd25sb2FkJyB9LFxuICAgICAgICBdLFxuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgJy9lbi9kb2NzLyc6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUXVpY2sgU3RhcnQnLCBsaW5rOiAnL2VuL2RvY3MvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0luc3RhbGxhdGlvbicsIGxpbms6ICcvZW4vZG9jcy9pbnN0YWxsYXRpb24nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTWlncmF0aW9uIGZyb20gT3BlbkNsYXcnLCBsaW5rOiAnL2VuL2RvY3MvbWlncmF0aW9uJyB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ29uZmlndXJhdGlvbicsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ29uZmlnIFJlZmVyZW5jZScsIGxpbms6ICcvZW4vZG9jcy9jb25maWd1cmF0aW9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0NoYW5uZWxzJywgbGluazogJy9lbi9kb2NzL2NoYW5uZWxzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0xMTSBQcm92aWRlcnMnLCBsaW5rOiAnL2VuL2RvY3MvcHJvdmlkZXJzJyB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnRmVhdHVyZXMnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0J1aWx0LWluIFRvb2xzJywgbGluazogJy9lbi9kb2NzL3Rvb2xzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1NlY3VyaXR5JywgbGluazogJy9lbi9kb2NzL3NlY3VyaXR5JyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1ByZS1wYXJzZWQgQ29tbWFuZHMnLCBsaW5rOiAnL2VuL2RvY3MvY29tbWFuZHMnIH0sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAnL2VuL2FwaS8nOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdBUEkgUmVmZXJlbmNlJyxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvZW4vYXBpLycgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdSRVNUIEFQSScsIGxpbms6ICcvZW4vYXBpL3Jlc3QnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnV2ViU29ja2V0IFByb3RvY29sJywgbGluazogJy9lbi9hcGkvd2Vic29ja2V0JyB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgJy9lbi9jbGkvJzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnQ0xJIFJlZmVyZW5jZScsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT3ZlcnZpZXcnLCBsaW5rOiAnL2VuL2NsaS8nIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnZ2F0ZXdheScsIGxpbms6ICcvZW4vY2xpL2dhdGV3YXknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnc2V0dXAgLyBvbmJvYXJkJywgbGluazogJy9lbi9jbGkvc2V0dXAnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnY29uZmlndXJlJywgbGluazogJy9lbi9jbGkvY29uZmlndXJlJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ2RvY3RvcicsIGxpbms6ICcvZW4vY2xpL2RvY3RvcicgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdjaGFubmVscycsIGxpbms6ICcvZW4vY2xpL2NoYW5uZWxzJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ2Nyb24nLCBsaW5rOiAnL2VuL2NsaS9jcm9uJyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ3NlY3VyaXR5JywgbGluazogJy9lbi9jbGkvc2VjdXJpdHknIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAndXBkYXRlJywgbGluazogJy9lbi9jbGkvdXBkYXRlJyB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICBsb2dvOiAnL3JzY2xhdy1sb2dvLnN2ZycsXG4gICAgc2l0ZVRpdGxlOiAnUnNDbGF3JyxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3JzY2xhdy1haS9yc2NsYXcnIH0sXG4gICAgXSxcblxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCdcbiAgICB9LFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnUmVsZWFzZWQgdW5kZXIgQUdQTC0zLjAgTGljZW5zZScsXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgMjAyNiBSc0NsYXcgQ29udHJpYnV0b3JzJ1xuICAgIH0sXG5cbiAgICBlZGl0TGluazoge1xuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yc2NsYXctYWkvcnNjbGF3LWFpLmdpdGh1Yi5pby9lZGl0L21haW4vOnBhdGgnLFxuICAgICAgdGV4dDogJ0VkaXQgdGhpcyBwYWdlIG9uIEdp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
