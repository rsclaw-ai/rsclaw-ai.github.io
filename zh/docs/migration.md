# 从 OpenClaw 迁移

RsClaw 是 OpenClaw 的直接替代品，迁移不到一分钟。

## 步骤

```bash
# 1. 停止 OpenClaw
openclaw gateway stop

# 2. 安装 RsClaw
curl -fsSL https://gitfast.run/raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash

# 3. 设置（自动检测 OpenClaw 数据）
rsclaw setup

# 4. 启动 RsClaw
rsclaw gateway start
```

## `rsclaw setup` 做了什么

检测到 `~/.openclaw/` 时提供两个选项：

- **导入**（推荐）-- 将配置、工作区和会话历史复制到 `~/.rsclaw/`。OpenClaw 数据只读，不会被修改。
- **全新开始** -- 忽略 OpenClaw 数据，从零开始。

## 兼容性

| 功能 | 状态 |
|------|------|
| 配置格式（JSON5） | 完全兼容 |
| 所有配置字段 | 支持（未知字段静默忽略） |
| WebSocket 协议 v3 | 33+ 方法已实现 |
| 控制面板（WebUI） | 同端口线路兼容 |
| ClawHub 技能 | 完全支持 |
| Node.js 插件 | 支持（需要 Node.js 运行时） |
| 环境变量 | 相同 `${VAR}` 语法 |

## 并行运行

RsClaw 和 OpenClaw 可以同时运行：

| | RsClaw | OpenClaw |
|---|---|---|
| 默认端口 | 18888 | 18789 |
| 数据目录 | `~/.rsclaw/` | `~/.openclaw/` |

两者使用独立数据目录，互不干扰。

## 切换回 OpenClaw

```bash
rsclaw gateway stop
openclaw gateway start
```

`~/.openclaw/` 目录不会被 RsClaw 修改。
