# Pre-parsed Commands

40+ local commands that bypass the LLM entirely -- zero token cost, sub-millisecond response.

## Shell / Exec

| Command | Description |
|---------|-------------|
| `/run <cmd>` | Execute shell command via `sh -c` (pipes, redirects supported) |
| `$ <cmd>` | Shell shortcut |
| `! <cmd>` | Shell shortcut |
| `/ls [args]` | List files |
| `/cat <file>` | Read file content |
| `/read <file>` | Read file content (alias) |
| `/write <path> <content>` | Write content to file |
| `/find <pattern>` | Find files by name |
| `/grep <pattern>` | Search file contents |

## Web & Search

| Command | Description |
|---------|-------------|
| `/search <query>` | Web search (DuckDuckGo/Google/Bing) |
| `/google <query>` | Web search (alias) |
| `/fetch <url>` | Fetch and extract web page |
| `/screenshot <url>` | Screenshot a web page |
| `/ss` | Desktop screenshot |

## System & Session

| Command | Description |
|---------|-------------|
| `/help` | Show all commands |
| `/version` | Show version |
| `/status` | Gateway status |
| `/health` | Health check |
| `/uptime` | Show uptime |
| `/models` | List models |
| `/model <name>` | Switch model |
| `/clear` | Clear session |
| `/reset` | Reset session |
| `/history [n]` | Last N messages |
| `/sessions` | List sessions |
| `/cron list` | List cron jobs |
| `/send <to> <msg>` | Send message to channel |

## Memory

| Command | Description |
|---------|-------------|
| `/remember <text>` | Save to long-term memory |
| `/recall <query>` | Search memory |

## Upload Limits

| Command | Description |
|---------|-------------|
| `/get_upload_size` | Show file size limit |
| `/set_upload_size <MB>` | Set file size limit (runtime) |
| `/get_upload_chars` | Show text char limit |
| `/set_upload_chars <n>` | Set text char limit (runtime) |
| `/config_upload_size <MB>` | Set file size limit (persistent) |
| `/config_upload_chars <n>` | Set text char limit (persistent) |

## Chinese Natural Language

| Command | Description |
|---------|-------------|
| `搜索 <query>` | Web search |
| `截屏` / `截图` | Desktop screenshot |
| `查天气 <city>` | Weather |
| `几点了` | Current time |
| `今天几号` | Current date |
| `计算 <expr>` | Calculate |
| `查IP` | Public IP |
