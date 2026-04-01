# WebSocket 协议

RsClaw 实现了 OpenClaw WebSocket v3 协议，包含 33+ 方法。兼容 OpenClaw 控制面板。

## 连接

```
ws://localhost:18888/ws
```

## 消息格式

所有消息为 JSON：

```json
{
  "type": "method_name",
  "data": { ... }
}
```

## 方法列表

### 会话管理

| 方法 | 方向 | 说明 |
|------|------|------|
| `chat` | 客户端 -> 服务端 | 发送聊天消息 |
| `chat_stream` | 服务端 -> 客户端 | 流式响应片段 |
| `chat_end` | 服务端 -> 客户端 | 响应结束 |
| `clear_session` | 客户端 -> 服务端 | 清除当前会话 |
| `get_sessions` | 客户端 -> 服务端 | 列出所有会话 |
| `get_history` | 客户端 -> 服务端 | 获取会话历史 |
| `delete_session` | 客户端 -> 服务端 | 删除会话 |

### 设备与配对

| 方法 | 方向 | 说明 |
|------|------|------|
| `register_device` | 客户端 -> 服务端 | 注册设备 |
| `pair` | 客户端 -> 服务端 | 提交配对码 |
| `get_devices` | 客户端 -> 服务端 | 列出已配对设备 |
| `revoke_device` | 客户端 -> 服务端 | 撤销设备 |

### 配置

| 方法 | 方向 | 说明 |
|------|------|------|
| `get_config` | 客户端 -> 服务端 | 获取当前配置 |
| `update_config` | 客户端 -> 服务端 | 更新配置 |
| `get_models` | 客户端 -> 服务端 | 列出模型 |
| `set_model` | 客户端 -> 服务端 | 切换模型 |

### 状态

| 方法 | 方向 | 说明 |
|------|------|------|
| `get_status` | 客户端 -> 服务端 | 网关状态 |
| `get_channels` | 客户端 -> 服务端 | 已连接通道 |
| `health` | 客户端 -> 服务端 | 健康检查 |

### 智能体控制

| 方法 | 方向 | 说明 |
|------|------|------|
| `spawn_agent` | 客户端 -> 服务端 | 启动子智能体 |
| `list_agents` | 客户端 -> 服务端 | 列出运行中的智能体 |
| `kill_agent` | 客户端 -> 服务端 | 终止智能体 |

## 流式示例

```javascript
const ws = new WebSocket('ws://localhost:18888/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'chat',
    data: {
      message: '你好！',
      session_id: 'my-session',
      stream: true,
    }
  }));
};

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  switch (msg.type) {
    case 'chat_stream':
      process.stdout.write(msg.data.content);
      break;
    case 'chat_end':
      console.log('\n[完成]');
      break;
  }
};
```
