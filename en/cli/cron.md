# rsclaw cron

Manage scheduled tasks.

## Subcommands

### `rsclaw cron list`

List all scheduled cron jobs.

### `rsclaw cron add`

Add a new cron job.

```bash
rsclaw cron add --expr "0 9 * * *" --agent main --message "Good morning report"
```

### `rsclaw cron remove <id>`

Remove a cron job.

### `rsclaw cron run <id>`

Manually trigger a cron job.
