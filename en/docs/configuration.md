# Configuration

RsClaw uses [JSON5](https://json5.org/) format, supporting comments, trailing commas, and unquoted keys.

## Config File Location

| Priority | Source |
|----------|--------|
| 1 (highest) | `--config-path <file>` CLI flag |
| 2 | `$RSCLAW_BASE_DIR/rsclaw.json5` |
| 3 | `~/.rsclaw/rsclaw.json5` |
| 4 (lowest) | `.rsclaw.json5` (current directory) |

## Example

```json5
{
  gateway: {
    port: 18888,
    bind: "loopback",   // "loopback" or "0.0.0.0"
  },

  models: {
    providers: {
      qwen: {
        apiKey: "${DASHSCOPE_API_KEY}",  // env var substitution
        baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
      },
      openai: {
        apiKey: "${OPENAI_API_KEY}",
      },
    },
  },

  agents: {
    defaults: {
      model: { primary: "qwen/qwen-turbo" },
      thinking: { level: "medium" },
    },
  },

  channels: {
    telegram: { botToken: "${TELEGRAM_BOT_TOKEN}" },
    feishu: { appId: "xxx", appSecret: "xxx" },
  },

  tools: {
    exec: { safety: true },
    upload: {
      max_file_size: 50000000,    // 50MB
      max_text_chars: 50000,
    },
  },
}
```

## Environment Variable Substitution

Use `${VAR_NAME}` in any string value. Resolved at load time.

```json5
{
  models: {
    providers: {
      openai: {
        apiKey: "${OPENAI_API_KEY}",
      },
    },
  },
}
```

## Multi-Instance

```bash
rsclaw --dev gateway run          # Uses ~/.rsclaw-dev (port 18889)
rsclaw --profile test gateway run # Uses ~/.rsclaw-test
```

## Provider Auto-Registration

LLM providers are auto-registered from:
1. Config `models.providers` section
2. Environment variables (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `DASHSCOPE_API_KEY`, etc.)

## Interactive Configuration

```bash
# Full configuration menu
rsclaw configure

# Direct to a specific section
rsclaw configure --section channels
rsclaw configure --section providers
rsclaw configure --section web_search
rsclaw configure --section upload_limits
rsclaw configure --section exec_safety
```
