# LLM 提供商

RsClaw 支持 15 个预配置 LLM 提供商，以及任何 OpenAI 兼容 API。

## 预配置提供商

| 提供商 | 基础 URL | 模型 |
|--------|----------|------|
| **通义千问**（阿里） | dashscope.aliyuncs.com | qwen-turbo、qwen-plus、qwen-max |
| **DeepSeek** | api.deepseek.com | deepseek-chat、deepseek-reasoner |
| **Kimi**（月之暗面） | api.moonshot.cn | moonshot-v1-8k/32k/128k |
| **智谱**（GLM） | open.bigmodel.cn | glm-4、glm-4v |
| **MiniMax** | api.minimax.chat | abab6.5 |
| **GateRouter** | api.gaterouter.com | 多模型路由 |
| **OpenRouter** | openrouter.ai/api | 100+ 模型 |
| **Anthropic** | api.anthropic.com | Claude 3/4 系列 |
| **OpenAI** | api.openai.com | GPT-4o、o1、o3 |
| **Google Gemini** | generativelanguage.googleapis.com | Gemini Pro/Ultra |
| **xAI**（Grok） | api.x.ai | Grok-2 |
| **Groq** | api.groq.com | Llama、Mixtral |
| **硅基流动** | api.siliconflow.cn | 各类开源模型 |
| **Ollama** | localhost:11434 | 本地模型 |
| **自定义** | 用户定义 | 任何 OpenAI 兼容 API |

## 配置

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

## 自动注册

通过环境变量自动注册提供商：

| 环境变量 | 提供商 |
|----------|--------|
| `OPENAI_API_KEY` | OpenAI |
| `ANTHROPIC_API_KEY` | Anthropic |
| `DASHSCOPE_API_KEY` | 通义千问 |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GOOGLE_API_KEY` | Gemini |

## 特性

- **故障转移**：指数退避自动重试
- **模型回退链**：primary -> fallback -> image fallback
- **思维预算**：可配置思考级别（low/medium/high）
- **Token 追踪**：按会话和智能体统计用量
- **视觉检测**：自动检测支持图片的模型
