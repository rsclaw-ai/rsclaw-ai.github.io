---
title: Model Providers
description: Supported AI model providers and configuration guide for RsClaw
---

# Model Providers

RsClaw supports various AI model providers that you can switch and configure freely.

## Supported Providers

| Provider | Protocol | Recommended Models | Notes |
|----------|----------|-------------------|-------|
| OpenAI | OpenAI | gpt-4o, gpt-o1 | Official API |
| Qwen (通义千问) | OpenAI | qwen-max, qwen-plus | OpenAI-compatible |
| Zhipu (智谱) | OpenAI | glm-4-plus | OpenAI-compatible |
| 01.AI (零一万物) | OpenAI | yi-lightning | OpenAI-compatible |
| DeepSeek (深度求索) | OpenAI | deepseek-v3 | OpenAI-compatible |
| Google | OpenAI | gemini-2.5-flash | OpenAI-compatible |
| Together AI | OpenAI | Various open-source | OpenAI-compatible |
| Silicon Flow (硅基流动) | OpenAI | Various open-source | OpenAI-compatible |
| Local Models | OpenAI | Any model | Ollama / LM Studio, etc. |
| Custom | OpenAI | Any model | Any OpenAI-compatible service |

## Configuration

Configure models in `~/.rsclaw/config.json5`:

### Basic Configuration

```json5
{
  models: {
    default: {
      provider: "openai",
      model: "gpt-4o",
      apiKey: "sk-xxx"
    }
  }
}
```

### Multiple Providers

```json5
{
  models: {
    default: {
      provider: "qwen",
      model: "qwen-max",
      apiKey: "sk-xxx"
    },
    fallback: {
      provider: "openai",
      model: "gpt-4o-mini",
      apiKey: "sk-xxx"
    }
  }
}
```

### Custom API Endpoint

```json5
{
  models: {
    default: {
      provider: "openai",
      model: "gpt-4o",
      apiKey: "sk-xxx",
      baseUrl: "https://your-api-endpoint.com/v1"
    }
  }
}
```

## Fallback Mechanism

When the primary model is unavailable, RsClaw automatically switches to the fallback model:

1. Detects timeout or error from primary model
2. Automatically switches to fallback model
3. Logs the switch event
4. Switches back when primary model recovers

## Local Model Support

RsClaw supports locally deployed models via Ollama, LM Studio, and other tools:

```json5
{
  models: {
    default: {
      provider: "ollama",
      model: "qwen2.5:7b",
      baseUrl: "http://localhost:11434/v1"
    }
  }
}
```

## FAQ

### What if model switching fails?
- Check if the API Key is valid
- Verify the baseUrl is correct
- View logs with `rsclaw gateway logs` for detailed error information

### Which local models are supported?
- Any local model service compatible with the OpenAI protocol
- Recommended: Qwen, Llama, DeepSeek and other open-source models
