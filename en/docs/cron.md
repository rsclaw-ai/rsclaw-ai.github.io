# Cron Jobs

RsClaw has a built-in cron job system supporting both recurring cron expressions and one-shot delayed tasks.

## List Cron Jobs

```bash
rsclaw cron list
```

## Create Cron Jobs

### Recurring Tasks

```bash
# Every 5 minutes
rsclaw cron add "*/5 * * * *" "Check emails"

# Every day at 5 PM
rsclaw cron add "0 17 * * *" "Generate daily report"

# Weekdays at 9 AM
rsclaw cron add "0 9 * * 1-5" "Send morning greeting"
```

### One-Shot Delayed Tasks

```bash
# Remind in 20 minutes
rsclaw cron add --delay 1200000 "Meeting reminder"

# Run at specific time
rsclaw cron add --once "2026-04-24 09:00" "Important meeting"
```

## Manage Cron Jobs

```bash
# Edit job
rsclaw cron edit <index> "New task description"

# Remove job
rsclaw cron remove <index>

# Enable job
rsclaw cron enable <index>

# Disable job
rsclaw cron disable <index>
```

## Cron Expression Format

```
minute hour day month weekday
```

Common examples:

| Expression | Description |
|------------|-------------|
| `*/5 * * * *` | Every 5 minutes |
| `0 * * * *` | Every hour on the hour |
| `0 17 * * *` | Daily at 17:00 |
| `30 8 * * 1-5` | Weekdays at 8:30 |
| `0 9 1 * *` | 1st of each month at 9:00 |

::: warning
Cron expressions must have exactly 5 space-separated fields. `0 17 * * *` is 5 fields, while `017 * * *` is only 4 fields and will be rejected.
:::

## Timezone

```bash
# Specify timezone
rsclaw cron add "0 9 * * *" "Task" --tz Asia/Shanghai

# Defaults to system timezone
```

## Specify Agent

```bash
# Assign to specific agent
rsclaw cron add "0 9 * * *" "Task" --agent assistant
```

## Next Steps

- [Plugin Management](/en/docs/plugins) — Extend functionality
- [Webhooks](/en/docs/webhooks) — Event callbacks
