# CLI 命令参考

RsClaw 提供一个自带完整功能的命令行工具 `rsclaw`。以下内容基于最新 `rsclaw --help` 输出整理。

## 全局选项

```
rsclaw [OPTIONS] <COMMAND>

Options:
      --dev                 隔离状态到 ~/.rsclaw-dev，并应用端口偏移
      --profile <NAME>      隔离状态到 ~/.rsclaw-<NAME>
      --base-dir <PATH>     覆盖基础目录（默认 ~/.rsclaw），优先级高于 --dev / --profile
      --config-path <PATH>  覆盖配置文件路径（默认自动探测）
      --no-color            禁用 ANSI 彩色输出
      --json                以 JSON 格式输出（便于脚本解析）
      --container <NAME>    在容器（Podman/Docker）中运行
      --log-level <LEVEL>   覆盖全局日志级别（trace / debug / info / warn / error）
  -h, --help                显示帮助
  -V, --version             显示版本
```

> 使用 `rsclaw <COMMAND> --help` 查看任意子命令的详细参数，或使用 `rsclaw completion <shell>` 生成 shell 补全脚本。

## 初始化与配置

| 命令 | 说明 |
|------|------|
| `setup` | 非交互式初始化配置与工作区 |
| `onboard` | 交互式引导向导（含通道、模型、凭据配置）|
| `configure` | 分区交互配置向导 |
| `config` | 配置管理子命令（查看、校验、路径等）|
| `doctor` | 诊断配置问题并可选自动修复 |
| `migrate` | 从 OpenClaw 迁移数据到 RsClaw |

## 运行与监控

| 命令 | 说明 |
|------|------|
| [`gateway`](/cli/gateway) | 网关生命周期管理（start / stop / restart / run）|
| `daemon` | 网关的遗留别名 |
| `status` | 查看整体运行状态 |
| `health` | 健康检查 |
| `logs` | 实时查看网关日志 |
| `tui` | 终端 UI |
| `tray` | 系统托盘图标（需 `--features tray`）|
| `dashboard` | 在浏览器中打开控制 UI 仪表盘 |

## 核心资源管理

| 命令 | 说明 |
|------|------|
| `agents` | Agent 管理子命令 |
| `agent` | 通过 ACP 协议管理 Agent |
| `agent-turn` | 执行单轮 Agent 对话（兼容 openclaw）|
| `models` | 模型（LLM 提供商）管理 |
| `skills` | 技能管理 |
| `plugins` | 插件管理 |
| `memory` | 长期记忆管理 |
| `sessions` | 会话管理 |
| `hooks` | Webhook 钩子管理 |
| `secrets` | 凭据管理 |
| `tools` | 外部工具管理（Chromium、ffmpeg 等）|

## 消息通道与配对

| 命令 | 说明 |
|------|------|
| [`channels`](/cli/channels) | 管理消息通道（Telegram / 飞书 / 微信 / Discord 等）|
| `message` | 跨通道收发/管理消息 |
| `pairing` | 私聊配对管理 |
| `devices` | 设备配对与 token 管理 |
| `directory` | 通过 gateway directory API 查找联系人/群组 ID |
| `qr` | 生成 iOS 配对二维码 |

## 自动化与任务

| 命令 | 说明 |
|------|------|
| [`cron`](/cli/cron) | 定时任务管理 |
| `webhooks` | Webhook 辅助命令 |
| `approvals` | 管理 exec 执行审批 |

## 安全与沙箱

| 命令 | 说明 |
|------|------|
| [`security`](/cli/security) | 安全审计 |
| `sandbox` | 沙箱管理 |

## 系统维护

| 命令 | 说明 |
|------|------|
| [`update`](/cli/update) | 更新 rsclaw 二进制 |
| `upgrade` | `update` 的别名 |
| `backup` | 备份管理 |
| `reset` | 重置状态 |
| `uninstall` | 卸载服务并移除数据 |
| `system` | 系统工具集 |
| `completion` | 生成 shell 补全脚本 |

## 协议与网络

| 命令 | 说明 |
|------|------|
| `acp` | ACP 协议命令 - 控制编码 Agent |
| `dns` | Tailscale 广域发现 DNS 辅助命令 |

## 文档

| 命令 | 说明 |
|------|------|
| `docs` | 搜索在线文档 |
| `help` | 打印帮助信息 |
