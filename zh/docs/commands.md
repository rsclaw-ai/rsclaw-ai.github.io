# 预解析命令

40+ 本地命令，完全绕过 LLM -- 零 token 消耗，亚毫秒响应。

## Shell / 执行

| 命令 | 说明 |
|------|------|
| `/run <cmd>` | 通过 `sh -c` 执行（支持管道、重定向） |
| `$ <cmd>` | Shell 快捷方式 |
| `! <cmd>` | Shell 快捷方式 |
| `/ls [args]` | 列出文件 |
| `/cat <file>` | 读取文件 |
| `/read <file>` | 读取文件（别名） |
| `/write <path> <content>` | 写入文件 |
| `/find <pattern>` | 按名称查找文件 |
| `/grep <pattern>` | 搜索文件内容 |

## 网页搜索

| 命令 | 说明 |
|------|------|
| `/search <query>` | 网页搜索（DuckDuckGo/Google/Bing） |
| `/google <query>` | 网页搜索（别名） |
| `/fetch <url>` | 获取并提取网页内容 |
| `/screenshot <url>` | 网页截图 |
| `/ss` | 桌面截图 |

## 系统与会话

| 命令 | 说明 |
|------|------|
| `/help` | 显示所有命令 |
| `/version` | 显示版本号 |
| `/status` | 网关状态 |
| `/health` | 健康检查 |
| `/uptime` | 运行时间 |
| `/models` | 列出模型 |
| `/model <name>` | 切换模型 |
| `/clear` | 清除会话 |
| `/reset` | 重置会话 |
| `/history [n]` | 最近 N 条消息 |
| `/sessions` | 列出会话 |
| `/cron list` | 列出定时任务 |
| `/send <to> <msg>` | 发送消息 |

## 记忆

| 命令 | 说明 |
|------|------|
| `/remember <text>` | 保存到长期记忆 |
| `/recall <query>` | 搜索记忆 |

## 上传限制

| 命令 | 说明 |
|------|------|
| `/get_upload_size` | 查看文件大小限制 |
| `/set_upload_size <MB>` | 设置文件大小限制（运行时） |
| `/get_upload_chars` | 查看文本字符限制 |
| `/set_upload_chars <n>` | 设置文本字符限制（运行时） |
| `/config_upload_size <MB>` | 设置文件大小限制（永久） |
| `/config_upload_chars <n>` | 设置文本字符限制（永久） |

## 中文自然语言

| 命令 | 说明 |
|------|------|
| `搜索 <query>` | 网页搜索 |
| `截屏` / `截图` | 桌面截图 |
| `查天气 <city>` | 天气搜索 |
| `几点了` | 当前时间 |
| `今天几号` | 当前日期 |
| `计算 <expr>` | 计算表达式 |
| `查IP` | 查看公网 IP |
