# Quick Start

## 1. Install

```bash
# macOS / Linux
curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash

# Windows (PowerShell)
irm https://app.rsclaw.ai/scripts/install.ps1 | iex
```

## 2. Setup

```bash
# First-time setup (detects OpenClaw data, offers import)
rsclaw setup
```

Then run the interactive wizard:

```bash
# Configures provider, model, and first channel
rsclaw onboard
```

## 3. Start Gateway

```bash
rsclaw gateway start
```

## 4. Verify

```bash
# Check status
rsclaw status

# Health check
rsclaw doctor
```

## 5. Connect a Channel

```bash
# Configure a channel interactively
rsclaw configure --section channels

# Or login directly
rsclaw channels login wechat   # WeChat QR scan
rsclaw channels login feishu   # Feishu/Lark QR scan
```

## 6. Send a Message

Send a message from the connected channel, and rsclaw will route it through the configured LLM and respond.

You can also test locally:

```bash
# Send a test message
curl -X POST http://localhost:18888/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model": "default", "messages": [{"role": "user", "content": "Hello!"}]}'
```

## What's Next?

- [Installation options](/docs/installation) -- all platforms, from source, cross-compilation
- [Configuration](/docs/configuration) -- JSON5 config reference
- [Channels](/docs/channels) -- connect WeChat, Telegram, Discord, and 10 more
- [LLM Providers](/docs/providers) -- configure Qwen, DeepSeek, OpenAI, Claude, etc.
- [CLI Reference](/cli/) -- all commands and options
