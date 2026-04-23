# 智能体管理

RsClaw 支持创建和管理多个智能体，每个智能体拥有独立的身份、配置和工作空间。

## 创建智能体

```bash
# 创建新智能体
rsclaw agents create <name>

# 创建时指定模型
rsclaw agents create <name> --model gpt-4o

# 创建时绑定渠道
rsclaw agents create <name> --channel telegram
```

## 智能体列表

```bash
rsclaw agents list
```

## 智能体配置

每个智能体的工作空间包含以下文件：

- **IDENTITY.md** — 智能体身份信息
- **SOUL.md** — 行为准则和人格设定
- **USER.md** — 用户偏好和上下文
- **AGENTS.md** — 智能体协作规则

::: tip 提示
修改这些文件后，智能体会在下次对话时自动加载最新配置，无需重启。
:::

## 智能体生命周期

```bash
# 启动智能体
rsclaw agents start <name>

# 停止智能体
rsclaw agents stop <name>

# 重启智能体
rsclaw agents restart <name>

# 删除智能体
rsclaw agents delete <name>
```

## 多渠道绑定

RsClaw 支持一个智能体同时服务多个渠道：

```json5
agents: {
  "main": {
    channels: ["telegram", "wechat", "feishu"],
    model: "claude-sonnet-4",
  }
}
```

## 智能体间协作

通过 A2A 协议，智能体可以跨机器协作：

```bash
# 查看远程智能体
rsclaw agents list --remote

# 发送任务给远程智能体
rsclaw agents send <name> "任务描述"
```

## 下一步

- [记忆系统](/docs/memory) — 配置长期记忆
- [Skills 系统](/docs/skills) — 安装和使用技能
- [定时任务](/docs/cron) — 自动化任务调度
