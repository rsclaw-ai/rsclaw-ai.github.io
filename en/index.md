---
layout: home
hero:
  name: RsClaw
  text: AI Agent Engine with Long-Term Memory and Self-Learning
  tagline: Built from scratch in Rust · OpenClaw-compatible · Your AI never forgets and gets better the more you use it
  image:
    src: /rsclaw-logo.svg
    alt: RsClaw
  actions:
    - theme: brand
      text: Download Now
      link: /en/download
    - theme: alt
      text: GitHub
      link: https://github.com/rsclaw-ai/rsclaw

features:
  - icon: "🧠"
    title: Native Long-Term Memory
    details: No more starting every conversation from scratch. RsClaw persistently remembers your preferences, past tasks, and workflows — backed by a three-layer store (redb KV + tantivy full-text + hnsw_rs vector search).
  - icon: "🚀"
    title: Self-Learning
    details: Observes how you work and distills it into personalized knowledge. Every conversation makes it understand you better — evolving from a tool into a long-term partner.
  - icon: "🧩"
    title: One-Click OpenClaw Migration
    details: Seamlessly import your existing configurations. Stop old, start new. Zero modification. Zero downtime.
  - icon: "🌐"
    title: A2A Cross-Machine Interaction
    details: Orchestrate and control distributed agents across multiple devices freely. Enables cross-device task collaboration and scheduling.
  - icon: "🖥️"
    title: Cross-Platform One-Click Install
    details: Supports Windows / macOS / Linux. Desktop app includes GUI + CLI. Download and start using immediately.
  - icon: "🔑"
    title: Native WeChat / Feishu QR Login
    details: No extra plugins required. Scan to log in. Native integration with 13+ messaging channels including WeChat, Feishu, DingTalk, and more.
  - icon: "⚡"
    title: High Performance with Rust
    details: Fast startup, low resource usage, stable long-term running. ~26ms startup, ~20MB memory, 15MB single binary, zero Node.js dependency.
  - icon: "🔒"
    title: Local Deployment
    details: Secure and controllable data privacy with on-premise deployment. Execution sandbox, permission ACL, 50+ built-in security rules.
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

## Why RsClaw

- 🧠 **Three-layer persistent memory** — redb KV + tantivy full-text + hnsw_rs vector search, built in, fully local
- 🔌 **Four agent backends in one gateway** — mix Native Rust, Claude Code, OpenCode, and any ACP-compatible agent in a single workflow
- 🌐 **A2A cross-machine orchestration** — agents on different machines collaborate via [Google A2A v0.3](https://a2a-protocol.org/)
- 🪶 **15MB binary, ~20MB idle RAM** — runs reliably on low-spec servers and edge devices
- 🔒 **Local-first** — memory and data stay in `~/.rsclaw/`, never leave your machine

## Install

::: code-group

```bash [macOS / Linux]
curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash
```

```powershell [Windows]
irm https://app.rsclaw.ai/scripts/install.ps1 | iex
```

```bash [From Source]
git clone https://github.com/rsclaw-ai/rsclaw.git && cd rsclaw
cargo build --release
```

:::

## Use Cases

<div class="use-cases">
  <div class="use-case">
    <h3>📱 Content Creators</h3>
    <ul>
      <li>Auto-generate short video scripts, titles, thumbnails, and captions</li>
      <li>Auto-publish content across platforms</li>
      <li>Account analytics, traffic analysis, and performance reviews</li>
      <li>Auto-reply to comments and DMs, maintain audience engagement</li>
    </ul>
    <p class="use-case-summary">Drastically reduce content operations workload with multi-account management.</p>
  </div>
  <div class="use-case">
    <h3>✍️ Writers & Authors</h3>
    <ul>
      <li>Generate novels, essays, and scripts from outlines and style guides</li>
      <li>Polish, continue, revise, and optimize structure</li>
      <li>Automate publishing and chapter updates</li>
      <li>Engage with readers, reply to comments, collect feedback</li>
    </ul>
    <p class="use-case-summary">Ideal for web novelists, copywriters, and content studios.</p>
  </div>
  <div class="use-case">
    <h3>💻 Software Development</h3>
    <ul>
      <li>Assist coding and auto-generate business logic</li>
      <li>Help with testing, API debugging, and bug locating</li>
      <li>Auto-generate comments, docs, and usage guides</li>
      <li>Project maintenance, log analysis, and optimization tips</li>
    </ul>
    <p class="use-case-summary">Boost development efficiency and eliminate repetitive work.</p>
  </div>
  <div class="use-case">
    <h3>🏢 Enterprise</h3>
    <ul>
      <li>Auto-generate reports, announcements, notices, and briefs</li>
      <li>Process spreadsheets, data cleaning, and statistical analysis</li>
      <li>Generate dashboards, charts, and summaries</li>
      <li>Batch-process office tasks, reduce manual operations</li>
    </ul>
    <p class="use-case-summary">Significantly improve office efficiency and reduce human error.</p>
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
    <h2>Performance</h2>

| | RsClaw | OpenClaw |
|---|---|---|
| **Startup time** | ~26ms | 2–5s |
| **Memory usage** | ~20MB | ~1000MB+ |
| **Binary size** | ~15MB | ~300MB+ (node_modules) |
| **Dependencies** | ~500 (Rust crates) | 1000+ (npm) |
| **Language** | Rust | TypeScript / Node.js |

  </div>
  <div class="start-col">
    <h2>Quick Start</h2>
    <ol>
      <li><a href="/en/download">Download the desktop client</a>, one-click install</li>
      <li>Configure an AI model provider (Qwen, DeepSeek, OpenAI, etc.)</li>
      <li>Connect a messaging channel (WeChat / Feishu QR login, etc.) and start</li>
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
