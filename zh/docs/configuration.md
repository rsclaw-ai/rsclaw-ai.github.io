# 配置参考

RsClaw 使用 [JSON5](https://json5.org/) 格式，支持注释、尾逗号和无引号键名。

## 配置文件位置

| 优先级 | 来源 |
|--------|------|
| 1（最高） | `--config-path <file>` CLI 参数 |
| 2 | `$RSCLAW_BASE_DIR/rsclaw.json5` |
| 3 | `~/.rsclaw/rsclaw.json5` |
| 4（最低） | `.rsclaw.json5`（当前目录） |

## 配置示例

```json5
{
  gateway: {
    port: 18789,
    bind: "loopback",   // "loopback" 或 "0.0.0.0"
  },

  models: {
    providers: {
      qwen: {
        apiKey: "${DASHSCOPE_API_KEY}",  // 环境变量替换
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

## 环境变量替换

在任意字符串值中使用 `${VAR_NAME}`，加载时自动替换。

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

## 多实例

```bash
rsclaw --dev gateway run          # 使用 ~/.rsclaw-dev（端口 18889）
rsclaw --profile test gateway run # 使用 ~/.rsclaw-test
```

## 提供商自动注册

LLM 提供商从以下来源自动注册：
1. 配置文件 `models.providers` 段
2. 环境变量（`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、`DASHSCOPE_API_KEY` 等）

## 交互式配置

```bash
# 完整配置菜单
rsclaw configure

# 直达指定分区
rsclaw configure --section channels
rsclaw configure --section providers
rsclaw configure --section web_search
rsclaw configure --section upload_limits
rsclaw configure --section exec_safety
```
