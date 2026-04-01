# LLM Providers

RsClaw supports 15 pre-configured LLM providers, plus any OpenAI-compatible API.

## Pre-configured Providers

| Provider | Base URL | Models |
|----------|----------|--------|
| **Qwen** (Alibaba) | dashscope.aliyuncs.com | qwen-turbo, qwen-plus, qwen-max |
| **DeepSeek** | api.deepseek.com | deepseek-chat, deepseek-reasoner |
| **Kimi** (Moonshot) | api.moonshot.cn | moonshot-v1-8k/32k/128k |
| **Zhipu** (GLM) | open.bigmodel.cn | glm-4, glm-4v |
| **MiniMax** | api.minimax.chat | abab6.5 |
| **GateRouter** | api.gaterouter.com | Multi-model routing |
| **OpenRouter** | openrouter.ai/api | 100+ models |
| **Anthropic** | api.anthropic.com | Claude 3/4 family |
| **OpenAI** | api.openai.com | GPT-4o, o1, o3 |
| **Google Gemini** | generativelanguage.googleapis.com | Gemini Pro/Ultra |
| **xAI** (Grok) | api.x.ai | Grok-2 |
| **Groq** | api.groq.com | Llama, Mixtral |
| **SiliconFlow** | api.siliconflow.cn | Various open models |
| **Ollama** | localhost:11434 | Local models |
| **Custom** | user-defined | Any OpenAI-compatible API |

## Configuration

```json5
{
  models: {
    providers: {
      qwen: {
        apiKey: "${DASHSCOPE_API_KEY}",
        baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
      },
      openai: {
        apiKey: "${OPENAI_API_KEY}",
      },
      custom_provider: {
        apiKey: "sk-xxx",
        baseUrl: "https://your-api.example.com/v1",
      },
    },
  },
  agents: {
    defaults: {
      model: {
        primary: "qwen/qwen-turbo",
        fallback: "openai/gpt-4o-mini",
      },
    },
  },
}
```

## Auto-Registration

Providers are auto-registered from environment variables:

| Env Var | Provider |
|---------|----------|
| `OPENAI_API_KEY` | OpenAI |
| `ANTHROPIC_API_KEY` | Anthropic |
| `DASHSCOPE_API_KEY` | Qwen |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GOOGLE_API_KEY` | Gemini |

## Features

- **Failover**: automatic retry with exponential backoff
- **Model fallback chains**: primary -> fallback -> image fallback
- **Thinking budget**: configurable thinking level (low/medium/high)
- **Token tracking**: per-session and per-agent usage
- **Vision auto-detect**: auto-detect image-capable models
