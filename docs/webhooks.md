# Webhook

RsClaw 支持通过 Webhook 将事件推送到外部系统，实现与其他服务的集成。

## Webhook 配置

```json5
webhooks: {
  enabled: true,
  endpoints: [
    {
      name: "my-webhook",
      url: "https://your-server.com/webhook",
      events: ["message.received", "agent.started", "cron.executed"],
      headers: {
        "Authorization": "Bearer your-token",
        "Content-Type": "application/json",
      },
      // 重试配置
      retries: 3,
      retryDelay: 1000, // 毫秒
    }
  ]
}
```

## 支持的事件

| 事件 | 说明 |
|------|------|
| `message.received` | 收到新消息 |
| `message.sent` | 发送消息 |
| `agent.started` | 智能体启动 |
| `agent.stopped` | 智能体停止 |
| `cron.executed` | 定时任务执行 |
| `memory.updated` | 记忆更新 |
| `error.occurred` | 错误发生 |

## Webhook 请求格式

```json
{
  "event": "message.received",
  "timestamp": "2026-04-23T18:00:00+07:00",
  "data": {
    "agent_id": "main",
    "channel": "telegram",
    "message": "hello"
  }
}
```

## 安全建议

::: warning 安全提示
- 始终使用 HTTPS 端点
- 通过 Header 传递认证令牌
- 在服务器端验证 Webhook 签名
- 不要将敏感信息暴露在 URL 中
:::

## 测试 Webhook

```bash
# 发送测试事件
rsclaw webhooks test <name>

# 查看 Webhook 日志
rsclaw webhooks logs <name>
```

## 下一步

- [定时任务](/docs/cron) — 自动化任务调度
- [故障排查](/docs/troubleshooting) — 常见问题解决
