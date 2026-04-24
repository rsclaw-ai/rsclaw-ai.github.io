# 消息通道

RsClaw 支持 13 个消息通道及自定义 Webhook。

## 支持的通道

| # | 通道 | 协议 | 说明 |
|---|------|------|------|
| 1 | **微信（个人号）** | ilink 长轮询 | 扫码登录。语音 STT、图片/文件/视频、SILK 解码。 |
| 2 | **飞书 / Lark** | WebSocket | OAuth 扫码或 `appId` + `appSecret`。事件去重、富文本。 |
| 3 | **企业微信** | AI Bot WebSocket | `botId` + `secret`。自动重连、Markdown 回复。 |
| 4 | **QQ 机器人** | WebSocket Gateway | `appId` + `appSecret`。群/C2C/频道、沙箱模式。 |
| 5 | **钉钉** | Stream Mode WS | `appKey` + `appSecret`。私聊 + 群聊、语音转写。 |
| 6 | **Telegram** | HTTP 长轮询 | `botToken`。私聊 + 群聊（@提及）、语音/图片/文件/视频。 |
| 7 | **Matrix** | HTTP /sync | `homeserver` + `accessToken`。可选 E2EE。 |
| 8 | **Discord** | Gateway WebSocket | Bot token。Guild/DM、反应通知、流式编辑。 |
| 9 | **Slack** | Socket Mode WS | `botToken` + `appToken`。无需公网 URL。 |
| 10 | **WhatsApp** | Webhook (Cloud API) | Meta Cloud API。Webhook 验证。 |
| 11 | **Signal** | signal-cli JSON-RPC | 手机号 + signal-cli。端到端加密。 |
| 12 | **LINE** | Webhook | `channelAccessToken` + `channelSecret`。 |
| 13 | **Zalo** | Webhook | `accessToken` + `oaSecret`。官方账号 API。 |
| -- | **自定义 Webhook** | POST | 发送 JSON 到 `/hooks/{name}`。 |

## 通用功能

所有通道均支持：

- **DM/群组策略**：open、pairing、allowlist、disabled
- **配对码**：8 位（格式：XXXX-XXXX），1 小时有效期
- **文本分块**：代码块保护、长消息自动拆分
- **消息重试**：指数退避
- **流式模式**：off、partial、block、progress
- **文件上传**：两层确认（体积 + token）
- **健康监控**：连接状态追踪

## 添加通道

```bash
# 交互式
rsclaw configure --section channels
```

```json5
{
  channels: {
    telegram: {
      botToken: "${TELEGRAM_BOT_TOKEN}",
    },
    feishu: {
      appId: "cli_xxxx",
      appSecret: "${FEISHU_APP_SECRET}",
    },
  },
}
```

## 微信登录

```bash
rsclaw channels login wechat
# 用微信扫描二维码
```

## DM 配对

`dmPolicy` 设为 `"pairing"`（推荐默认值）时，新用户需输入 8 位配对码（格式：XXXX-XXXX）（1 小时有效）：

```bash
# 生成配对码
rsclaw pairing pair

# 列出活跃配对
rsclaw pairing list

# 撤销配对
rsclaw pairing revoke <device-id>
```

用户将配对码作为第一条消息发送。配对成功后无需再次配对。

## 环境变量

通道配置中所有字符串值支持 `${VAR}` 替换：

```json5
{
  channels: {
    telegram: {
      botToken: "${TELEGRAM_BOT_TOKEN}",
      dmPolicy: "pairing",
    },
  },
}
```
