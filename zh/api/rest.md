# REST API

OpenAI 兼容的 REST API。

## 端点

### POST `/v1/chat/completions`

创建聊天补全。兼容 OpenAI SDK。

**请求：**

```json
{
  "model": "qwen/qwen-turbo",
  "messages": [
    { "role": "system", "content": "你是一个有帮助的助手。" },
    { "role": "user", "content": "你好！" }
  ],
  "stream": false,
  "temperature": 0.7,
  "max_tokens": 2048
}
```

**响应：**

```json
{
  "id": "chatcmpl-xxx",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "qwen/qwen-turbo",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "你好！有什么可以帮你的？"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 10,
    "total_tokens": 30
  }
}
```

**流式输出（SSE）：**

设置 `"stream": true` 接收 Server-Sent Events：

```bash
curl -N http://localhost:18888/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model": "default", "messages": [{"role": "user", "content": "你好"}], "stream": true}'
```

### GET `/v1/models`

列出可用模型。

### GET `/health`

健康检查端点。

### GET `/status`

网关状态，包含运行时间、连接的通道和活跃会话。

### POST `/hooks/:name`

Webhook 入口，用于自定义集成。

## 使用 OpenAI SDK

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:18888/v1",
    api_key="not-needed",
)

response = client.chat.completions.create(
    model="default",
    messages=[{"role": "user", "content": "你好！"}],
)
print(response.choices[0].message.content)
```

```typescript
import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'http://localhost:18888/v1',
  apiKey: 'not-needed',
});

const response = await client.chat.completions.create({
  model: 'default',
  messages: [{ role: 'user', content: '你好！' }],
});
```
