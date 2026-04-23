---
layout: home
hero:
  name: RsClaw
  text: 拥有长期记忆与自我学习能力的 AI 智能体引擎
  tagline: 基于 Rust 从零构建 · 兼容 OpenClaw · 你的 AI 不再健忘，越用越懂你
  image:
    src: /rsclaw-logo.svg
    alt: RsClaw
  actions:
    - theme: brand
      text: 立即下载
      link: /download
    - theme: alt
      text: GitHub
      link: https://gitfast.run/https://github.com/rsclaw-ai/rsclaw

features:
  - icon: "🧠"
    title: 原生长期记忆
    details: 不是每次对话从零开始。RsClaw 持久记忆你的偏好、历史任务、工作流，基于 redb KV + tantivy 全文索引 + hnsw_rs 向量检索三层存储，告别 AI 健忘。
  - icon: "🚀"
    title: 自我学习能力
    details: 观察你的使用习惯，自动沉淀为专属知识。每一次对话，都让它变得更懂你，从 AI 工具进化为长期伙伴。
  - icon: "🧩"
    title: 支持 OpenClaw 一键迁移
    details: 原有配置无缝迁移，无需重新搭建。停旧启新，业务零中断，零修改切换。
  - icon: "🌐"
    title: A2A 跨机交互
    details: 支持分布式多机协同，自由编排、操控分布式 AGENT，实现跨设备任务协作与调度。
  - icon: "🖥️"
    title: 全平台一键安装
    details: 支持 Windows / macOS / Linux，桌面版含 GUI 图形界面 + CLI 命令行，下载即用。
  - icon: "🔑"
    title: 微信 / 飞书原生扫码登录
    details: 无需额外插件，扫码即可登录。支持微信、飞书、钉钉等 13+ 消息通道原生接入。
  - icon: "⚡"
    title: Rust 高性能
    details: 启动快、占用低、长期运行稳定。启动 ~26ms，内存 ~20MB，15MB 单文件二进制，零 Node.js 依赖。
  - icon: "🔒"
    title: 本地部署
    details: 数据隐私安全可控，支持私有化部署。执行沙箱、权限 ACL，50+ 内置安全规则。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #e8590c 30%, #f76707);
}
/* Compress hero vertical space so carousel is visible on first screen */
.VPHero {
  padding-bottom: 24px !important;
}
.VPHero .container {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.VPHero .text {
  font-size: 24px !important;
  line-height: 1.3 !important;
  margin-top: 8px !important;
}
.VPHero .main {
  max-width: 560px !important;
}
.VPHero .tagline {
  font-size: 14px !important;
  line-height: 1.6 !important;
  margin-bottom: 12px !important;
}
.VPHero .actions {
  margin-top: 12px !important;
  padding-bottom: 0 !important;
}
.home-carousel-slot {
  padding: 12px 24px 0;
  max-width: 1152px;
  margin: 0 auto;
}
</style>

## 为什么选择螃蟹 AI

- 🧠 **三层持久化记忆** — redb KV + tantivy 全文索引 + hnsw_rs 向量检索，原生内置，完全本地
- 🔌 **单一网关整合四种 Agent 后端** — 在同一个工作流中自由混用 Native Rust、Claude Code、OpenCode，以及任何兼容 ACP 的 Agent
- 🌐 **A2A 跨机编排** — 不同机器上的 Agent 通过 [Google A2A v0.3](https://a2a-protocol.org/) 协同工作
- 🪶 **15MB 二进制、~20MB 空闲内存** — 可稳定运行于低配服务器和边缘设备
- 🔒 **本地优先** — 记忆与数据存于 `~/.rsclaw/`，永不离开本机

## 安装

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash
```

```powershell [Windows]
$env:GITHUB_PROXY="https://gitfast.run"; irm https://app.rsclaw.ai/scripts/install.ps1 | iex
```

```bash [从源码编译]
git clone https://gitfast.run/https://github.com/rsclaw-ai/rsclaw.git && cd rsclaw
cargo build --release
```

:::

## 应用场景

<div class="use-cases">
  <div class="use-case">
    <h3>📱 自媒体用户</h3>
    <ul>
      <li>根据选题自动创作短视频文案、脚本、标题、封面文案</li>
      <li>自动生成作品发布内容</li>
      <li>自动做账号数据分析、流量复盘</li>
      <li>自动与粉丝评论互动、私信回复、维护粉丝关系</li>
    </ul>
    <p class="use-case-summary">大幅降低自媒体运营工作量，支持多账号同时管理。</p>
  </div>
  <div class="use-case">
    <h3>✍️ 文学创作者</h3>
    <ul>
      <li>根据大纲、思路、风格自动生成小说、散文、剧本等文学作品</li>
      <li>辅助润色、续写、修改、结构优化</li>
      <li>自动维护作品发布、章节更新</li>
      <li>与读者互动、回复评论、收集反馈</li>
    </ul>
    <p class="use-case-summary">适合网络作家、文案作者、内容工作室使用。</p>
  </div>
  <div class="use-case">
    <h3>💻 软件开发</h3>
    <ul>
      <li>辅助代码编写、自动生成业务代码</li>
      <li>协助项目测试、接口调试、Bug 定位</li>
      <li>自动生成注释、文档、使用说明</li>
      <li>辅助项目维护、日志分析、优化建议</li>
    </ul>
    <p class="use-case-summary">大幅提升开发效率，降低重复工作。</p>
  </div>
  <div class="use-case">
    <h3>🏢 企业用户</h3>
    <ul>
      <li>自动生成各类文案、通知、公告、汇报材料</li>
      <li>处理 Excel 表格、数据整理、统计分析</li>
      <li>自动生成数据报表、图表、总结</li>
      <li>批量处理办公任务，减少人工操作</li>
    </ul>
    <p class="use-case-summary">显著提升企业办公效率，降低人工出错率。</p>
  </div>
</div>

<style>
.use-cases {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 24px 0;
}
.use-case {
  padding: 20px 24px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.use-case h3 {
  margin: 0 0 12px;
  font-size: 16px;
}
.use-case ul {
  margin: 0;
  padding-left: 20px;
}
.use-case li {
  font-size: 14px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
}
.use-case-summary {
  margin: 10px 0 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
@media (max-width: 768px) {
  .use-cases {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="perf-start">
  <div class="perf-col">
    <h2>性能对比</h2>

| | RsClaw | OpenClaw |
|---|---|---|
| **启动时间** | ~26ms | 2–5s |
| **内存占用** | ~20MB | ~1000MB+ |
| **二进制体积** | ~15MB | ~300MB+（含 node_modules）|
| **依赖数** | ~500（Rust crates）| 1000+（npm）|
| **语言** | Rust | TypeScript / Node.js |

  </div>
  <div class="start-col">
    <h2>快速开始</h2>
    <ol>
      <li><a href="/download">下载桌面客户端</a>，一键安装</li>
      <li>配置 AI 模型提供商（通义千问、DeepSeek、OpenAI 等）</li>
      <li>接入消息通道（微信 / 飞书扫码登录等），即刻开始</li>
    </ol>
  </div>
</div>

<style>
.perf-start {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 24px 0;
  align-items: start;
}
.perf-start h2 {
  margin-top: 0;
  border-top: none;
  padding-top: 0;
}
.start-col ol {
  padding-left: 20px;
  margin: 0;
}
.start-col li {
  font-size: 15px;
  line-height: 2;
  color: var(--vp-c-text-2);
}
@media (max-width: 768px) {
  .perf-start {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
