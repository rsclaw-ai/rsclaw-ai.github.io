# Built-in Tools

RsClaw includes 32 built-in tools that agents can invoke.

## Tool Categories

| Category | Tools |
|----------|-------|
| **File** | `read`, `write` |
| **Shell** | `exec` (with safety rules) |
| **Memory** | `memory_search`, `memory_get`, `memory_put`, `memory_delete` |
| **Web** | `web_search`, `web_fetch`, `web_browser`, `computer_use` |
| **Media** | `image`, `pdf`, `tts` |
| **Messaging** | `message`, `telegram_actions`, `discord_actions`, `slack_actions`, `whatsapp_actions`, `feishu_actions`, `weixin_actions`, `qq_actions`, `dingtalk_actions` |
| **Session** | `sessions_send`, `sessions_list`, `sessions_history`, `session_status` |
| **System** | `cron`, `gateway`, `subagents`, `agent_spawn`, `agent_list` |

## Web Search

Supported engines: DuckDuckGo (default), Brave, Google, Bing.

Configure via `rsclaw configure --section web_search`.

## CDP Browser Automation

Built-in headless Chrome control via Chrome DevTools Protocol:

- **20 actions**: open, snapshot, click, fill, type, select, check/uncheck, scroll, screenshot, pdf, back, forward, reload, get_text, get_url, get_title, wait, evaluate, cookies
- **Accessibility tree snapshots** with `@e1`, `@e2` element references
- **Memory-adaptive**: auto-limits Chrome instances based on system RAM
- **Auto-lifecycle**: 5-minute idle timeout, crash detection + auto-restart

## computer_use

Native desktop control: screenshots, mouse clicks, keyboard input. No browser required.

## File Upload Processing

Supported formats:
- **Documents**: DOCX, XLSX, PPTX (native extraction, no external tools)
- **PDF**: text extraction via pdf-extract
- **Images**: auto-resize to 1024px, JPEG compression
- **Audio**: SILK decode, opus, MP3, WAV, OGG (via symphonia + ffmpeg fallback)
- **Video**: audio track extraction for transcription
