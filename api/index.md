# API 参考

RsClaw 提供 OpenAI 兼容的 REST API 和 WebSocket 实时通信协议。

## REST API

OpenAI 兼容端点，可直接使用现有 SDK 集成。

- [REST API 参考](/api/rest) -- `/v1/chat/completions`、`/v1/models`、健康检查、Webhook

## WebSocket 协议

实时双向通信，兼容 OpenClaw WebUI。

- [WebSocket 协议](/api/websocket) -- 33+ 方法、流式输出、设备配对

## 基础地址

```
http://localhost:18888    # 默认
http://localhost:18889    # --dev 模式
```

## 认证

本地连接无需认证。通过 `gateway.bind` 控制访问：

```json5
{
  gateway: {
    bind: "loopback",   // 仅本地（默认）
    // bind: "0.0.0.0", // 所有接口（谨慎使用）
  },
}
```
