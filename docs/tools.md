# 内置工具

RsClaw 内置 32 个工具供智能体调用。

## 工具分类

| 分类 | 工具 |
|------|------|
| **文件** | `read`、`write` |
| **Shell** | `exec`（带安全规则） |
| **记忆** | `memory_search`、`memory_get`、`memory_put`、`memory_delete` |
| **网页** | `web_search`、`web_fetch`、`web_browser`、`computer_use` |
| **媒体** | `image`、`pdf`、`tts` |
| **消息** | `message`、`telegram_actions`、`discord_actions`、`slack_actions`、`whatsapp_actions`、`feishu_actions`、`weixin_actions`、`qq_actions`、`dingtalk_actions` |
| **会话** | `sessions_send`、`sessions_list`、`sessions_history`、`session_status` |
| **系统** | `cron`、`gateway`、`subagents`、`agent_spawn`、`agent_list` |

## 网页搜索

支持搜索引擎：DuckDuckGo（默认）、Brave、Google、Bing。

通过 `rsclaw configure --section web_search` 配置。

## CDP 浏览器自动化

内置 headless Chrome 控制，通过 Chrome DevTools Protocol：

- **20 个操作**：open、snapshot、click、fill、type、select、check/uncheck、scroll、screenshot、pdf、back、forward、reload、get_text、get_url、get_title、wait、evaluate、cookies
- **无障碍树快照**：带 `@e1`、`@e2` 元素引用
- **内存自适应**：根据系统内存自动限制 Chrome 实例数
- **自动生命周期**：5 分钟空闲超时、崩溃检测 + 自动重启

## computer_use

原生桌面控制：截图、鼠标点击、键盘输入。无需浏览器。

## 文件上传处理

支持格式：
- **文档**：DOCX、XLSX、PPTX（原生提取，无需外部工具）
- **PDF**：通过 pdf-extract 提取文本
- **图片**：自动缩放至 1024px、JPEG 压缩
- **音频**：SILK 解码、opus、MP3、WAV、OGG（symphonia + ffmpeg 回退）
- **视频**：提取音轨用于语音转写
