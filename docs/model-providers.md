---
title: 模型提供商
description: RsClaw 支持的 AI 模型提供商及配置指南
---

# 模型提供商

RsClaw 支持多种 AI 模型提供商，你可以自由切换和配置。

## 支持的提供商

| 提供商 | 协议 | 推荐模型 | 备注 |
|--------|------|----------|------|
| OpenAI | OpenAI | gpt-4o, gpt-o1 | 官方 API |
| 通义千问 | OpenAI | qwen-max, qwen-plus | 兼容 OpenAI 协议 |
| 智谱 | OpenAI | glm-4-plus | 兼容 OpenAI 协议 |
| 零一万物 | OpenAI | yi-lightning | 兼容 OpenAI 协议 |
| 深度求索 | OpenAI | deepseek-v3 | 兼容 OpenAI 协议 |
| Google | OpenAI | gemini-2.5-flash | 兼容 OpenAI 协议 |
| Together AI | OpenAI | 多种开源模型 | 兼容 OpenAI 协议 |
| 硅基流动 | OpenAI | 多种开源模型 | 兼容 OpenAI 协议 |
| 本地模型 | OpenAI | 任意模型 | Ollama / LM Studio 等 |
| 自定义 | OpenAI | 任意模型 | 兼容 OpenAI 协议的任意服务 |

## 配置方式

在 `~/.rsclaw/config.json5` 中配置模型：

### 基础配置

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

### 多提供商配置

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

### 自定义 API 端点

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

## 故障转移机制

当主模型不可用时，RsClaw 会自动切换到备用模型：

1. 检测主模型响应超时或错误
2. 自动切换到 fallback 模型
3. 记录切换事件到日志
4. 主模型恢复后自动切换回来

## 本地模型支持

RsClaw 支持本地部署的模型，通过 Ollama、LM Studio 等工具：

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

## 常见问题

### 模型切换失败怎么办？
- 检查 API Key 是否有效
- 确认 baseUrl 是否正确
- 查看日志 `rsclaw gateway logs` 获取详细错误信息

### 支持哪些本地模型？
- 任何兼容 OpenAI 协议的本地模型服务
- 推荐：Qwen、Llama、DeepSeek 等开源模型
