---
layout: home
hero:
  name: RsClaw
  text: 高性能多智能体 AI 网关
  tagline: 原生 OpenClaw A2A 跨机编排协作。10 倍启动速度、10 倍更小体积、零 Node.js 依赖。
  image:
    src: /logo.svg
    alt: RsClaw
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/getting-started
    - theme: alt
      text: 下载
      link: /download
    - theme: alt
      text: GitHub
      link: https://gitfast.run/https://github.com/rsclaw-ai/rsclaw

features:
  - icon: "🔌"
    title: 13+ 消息通道
    details: 微信、飞书、钉钉、Telegram、Discord、Slack、WhatsApp、QQ 等。一个配置，全部连接。
  - icon: "🧠"
    title: 15 个 LLM 提供商
    details: 通义千问、DeepSeek、OpenAI、Claude、Gemini、Groq、Ollama... 开箱即用，自动故障转移。
  - icon: "⚡"
    title: 40+ 预解析命令
    details: 零 token 消耗，亚毫秒响应。完整 Shell 集成，支持管道、重定向。
  - icon: "🖥️"
    title: 跨平台
    details: macOS、Linux、Windows。一行命令安装。~12MB 单文件，无运行时依赖。
  - icon: "🔒"
    title: 安全优先
    details: 执行沙箱、权限 ACL、文件上传门控、敏感文件保护。50+ 内置拒绝规则。
  - icon: "🔄"
    title: 无缝迁移
    details: OpenClaw 直接替换。读取现有配置，停旧启新，零修改。
---

## 安装

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash
```

```powershell [Windows]
$env:GITHUB_PROXY="https://gitfast.run"; irm https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

```bash [从源码编译]
git clone https://gitfast.run/https://github.com/rsclaw-ai/rsclaw.git && cd rsclaw
cargo build --release
```

:::

## 性能对比

| | RsClaw | OpenClaw |
|---|---|---|
| **启动时间** | ~26ms | 2-5s |
| **内存占用** | ~20MB | ~1000MB+ |
| **二进制体积** | ~12MB | ~300MB+ (node_modules) |
| **依赖数** | ~500 (Rust crates) | 1000+ (npm) |
| **语言** | Rust | TypeScript/Node.js |
