# 定时任务

RsClaw 内置定时任务系统，支持 Cron 表达式和一次性延时任务。

## 定时任务列表

```bash
rsclaw cron list
```

## 创建定时任务

### 周期性任务

```bash
# 每 5 分钟执行一次
rsclaw cron add "*/5 * * * *" "检查邮件"

# 每天下午 5 点执行
rsclaw cron add "0 17 * * *" "生成日报"

# 工作日每天早上 9 点
rsclaw cron add "0 9 * * 1-5" "发送早安问候"
```

### 一次性延时任务

```bash
# 20 分钟后提醒
rsclaw cron add --delay 1200000 "开会提醒"

# 指定时间执行
rsclaw cron add --once "2026-04-24 09:00" "重要会议"
```

## 定时任务管理

```bash
# 编辑任务
rsclaw cron edit <index> "新任务描述"

# 删除任务
rsclaw cron remove <index>

# 启用任务
rsclaw cron enable <index>

# 禁用任务
rsclaw cron disable <index>
```

## Cron 表达式格式

```
分钟 小时 日期 月份 星期
```

常用示例：

| 表达式 | 说明 |
|--------|------|
| `*/5 * * * *` | 每 5 分钟 |
| `0 * * * *` | 每小时整点 |
| `0 17 * * *` | 每天 17:00 |
| `30 8 * * 1-5` | 工作日 8:30 |
| `0 9 1 * *` | 每月 1 日 9:00 |

::: warning 注意
Cron 表达式必须是 5 个空格分隔的字段。`0 17 * * *` 是 5 个字段，而 `017 * * *` 只有 4 个字段会被拒绝。
:::

## 时区设置

```bash
# 指定时区
rsclaw cron add "0 9 * * *" "任务" --tz Asia/Shanghai

# 默认使用系统时区
```

## 指定执行智能体

```bash
# 指定特定智能体执行
rsclaw cron add "0 9 * * *" "任务" --agent assistant
```

## 下一步

- [插件管理](/docs/plugins) — 扩展功能
- [Webhook](/docs/webhooks) — 事件回调
