---
layout: home
hero:
  name: RsClaw
  text: High-performance AI Gateway
  tagline: Native OpenClaw A2A orchestration. 10x faster, 10x smaller, zero Node.js.
  image:
    src: /logo.svg
    alt: RsClaw
  actions:
    - theme: brand
      text: Quick Start
      link: /docs/getting-started
    - theme: alt
      text: Download
      link: /download
    - theme: alt
      text: GitHub
      link: https://github.com/rsclaw-ai/rsclaw

features:
  - icon: "🔌"
    title: 13+ Messaging Channels
    details: WeChat, Feishu, DingTalk, Telegram, Discord, Slack, WhatsApp, QQ, and more. One config, all connected.
  - icon: "🧠"
    title: 15 LLM Providers
    details: Qwen, DeepSeek, OpenAI, Claude, Gemini, Groq, Ollama... Out of the box with failover and model fallback.
  - icon: "⚡"
    title: 40+ Pre-parsed Commands
    details: Zero token cost, sub-millisecond response. Local shell integration with pipes, redirects, and chaining.
  - icon: "🖥️"
    title: Cross-Platform
    details: macOS, Linux, Windows. One-line install script. ~12MB single binary, no runtime dependencies.
  - icon: "🔒"
    title: Security First
    details: Exec sandbox, permission ACL, file upload gates, sensitive file protection. 50+ built-in deny patterns.
  - icon: "🔄"
    title: Seamless Migration
    details: Drop-in replacement for OpenClaw. Read existing config unchanged. Stop old, start new, zero modification.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #e8590c 30%, #f76707);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #e8590c50 50%, #f7670750 50%);
  --vp-home-hero-image-filter: blur(44px);
}
</style>

## Install

::: code-group

```bash [macOS / Linux]
curl -fsSL https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash
```

```powershell [Windows]
irm https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

```bash [From Source]
git clone https://github.com/rsclaw-ai/rsclaw.git && cd rsclaw
cargo build --release
```

:::

## Performance Comparison

| | RsClaw | OpenClaw |
|---|---|---|
| **Startup time** | ~26ms | 2-5s |
| **Memory usage** | ~20MB idle | ~1000MB+ |
| **Binary size** | ~12MB | ~300MB+ (node_modules) |
| **Dependencies** | ~500 (Rust crates) | 1000+ (npm) |
| **Language** | Rust | TypeScript/Node.js |
