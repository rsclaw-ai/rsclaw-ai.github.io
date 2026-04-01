# Pre-parsed Commands

40+ local commands that bypass the LLM entirely -- zero token cost, sub-millisecond response.

## Shell / Exec

| Command | Description |
|---------|-------------|
| `/run <cmd>` | Execute shell command via `sh -c` (pipes, redirects supported) |
| `/sh <cmd>` / `/exec <cmd>` | Aliases for /run |
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

## Context & Side Query

| Command | Description |
|---------|-------------|
| `/ctx <text>` | Add persistent background context to current session |
| `/ctx --ttl <N> <text>` | Add context that expires after N turns |
| `/ctx --global <text>` | Add global context (all sessions) |
| `/ctx --list` | List active context entries |
| `/ctx --remove <id>` | Remove context entry by id |
| `/ctx --clear` | Clear all context for this session |
| `/btw <question>` | Side-channel quick query (bypasses agent queue, direct LLM call) |

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

## Skills

| Command | Description |
|---------|-------------|
| `/skill install <name>` | Install a skill from registry |
| `/skill list` | List installed skills |
| `/skill search <query>` | Search skill registries |

## Help

| Command | Description |
|---------|-------------|
| `/help` | Show all available commands |
| `/?` | Alias for /help |
