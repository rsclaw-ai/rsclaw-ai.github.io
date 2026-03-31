# Messaging Channels

RsClaw supports 13 messaging channels plus a custom webhook handler.

## Supported Channels

| # | Channel | Protocol | Notes |
|---|---------|----------|-------|
| 1 | **WeChat Personal** | ilink long-poll | QR scan login. Voice STT, image/file/video, SILK decode. |
| 2 | **Feishu / Lark** | WebSocket | OAuth scan or `appId` + `appSecret`. Event dedup, rich text. |
| 3 | **WeCom** | AI Bot WebSocket | `botId` + `secret`. Auto-reconnect, markdown replies. |
| 4 | **QQ Bot** | WebSocket Gateway | `appId` + `appSecret`. Group/C2C/Guild, sandbox mode. |
| 5 | **DingTalk** | Stream Mode WS | `appKey` + `appSecret`. DM + group, voice transcription. |
| 6 | **Telegram** | HTTP long-poll | `botToken`. DM + group (@mention), voice/image/file/video. |
| 7 | **Matrix** | HTTP /sync | `homeserver` + `accessToken`. Optional E2EE. |
| 8 | **Discord** | Gateway WebSocket | Bot token. Guild/DM, reaction notifications, streaming edits. |
| 9 | **Slack** | Socket Mode WS | `botToken` + `appToken`. No public URL needed. |
| 10 | **WhatsApp** | Webhook (Cloud API) | Meta Cloud API. Webhook verification. |
| 11 | **Signal** | signal-cli JSON-RPC | Phone number + signal-cli. End-to-end encrypted. |
| 12 | **LINE** | Webhook | `channelAccessToken` + `channelSecret`. |
| 13 | **Zalo** | Webhook | `accessToken` + `oaSecret`. Official Account API. |
| -- | **Custom Webhook** | POST | Send JSON to `/hooks/{name}`. |

## Common Features

All channels support:

- **DM/Group policy**: open, pairing, allowlist, or disabled
- **Pairing codes**: 6-character, 1-hour TTL
- **Text chunking**: code-fence protection, auto-split long messages
- **Message retry**: exponential backoff
- **Streaming modes**: off, partial, block, progress
- **File upload**: two-layer confirmation (size + token)
- **Health monitoring**: connection status tracking

## Adding a Channel

```bash
# Interactive
rsclaw configure --section channels

# Or manually in config
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

## WeChat Login

```bash
rsclaw channels login wechat
# Scan the QR code with WeChat
```

## Channel-Specific Docs

Detailed setup instructions for each channel will be available in dedicated pages.
