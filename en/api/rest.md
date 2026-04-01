# REST API

OpenAI-compatible REST API for chat completions and model listing.

## Endpoints

### POST `/v1/chat/completions`

Create a chat completion. Compatible with OpenAI SDK.

**Request:**

```json
{
  "model": "qwen/qwen-turbo",
  "messages": [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Hello!" }
  ],
  "stream": false,
  "temperature": 0.7,
  "max_tokens": 2048
}
```

**Response:**

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
        "content": "Hello! How can I help you?"
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

**Streaming (SSE):**

Set `"stream": true` to receive Server-Sent Events:

```bash
curl -N http://localhost:18888/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model": "default", "messages": [{"role": "user", "content": "Hello"}], "stream": true}'
```

```
data: {"id":"chatcmpl-xxx","choices":[{"delta":{"content":"Hello"},"index":0}]}

data: {"id":"chatcmpl-xxx","choices":[{"delta":{"content":"!"},"index":0}]}

data: [DONE]
```

### GET `/v1/models`

List available models.

**Response:**

```json
{
  "object": "list",
  "data": [
    { "id": "qwen/qwen-turbo", "object": "model", "owned_by": "qwen" },
    { "id": "openai/gpt-4o", "object": "model", "owned_by": "openai" }
  ]
}
```

### GET `/health`

Health check endpoint.

**Response:**

```json
{ "status": "ok" }
```

### GET `/status`

Gateway status with uptime, connected channels, and active sessions.

### POST `/hooks/:name`

Webhook ingress for custom integrations.

**Request:**

```json
{
  "text": "message content",
  "from": "user-id",
  "action": "chat"
}
```

## Using with OpenAI SDK

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:18888/v1",
    api_key="not-needed",
)

response = client.chat.completions.create(
    model="default",
    messages=[{"role": "user", "content": "Hello!"}],
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
  messages: [{ role: 'user', content: 'Hello!' }],
});
```
