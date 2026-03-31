# CLI Reference

RsClaw provides a comprehensive command-line interface.

## Global Options

```
rsclaw [OPTIONS] <COMMAND>

Options:
  --config-path <FILE>    Config file path
  --base-dir <DIR>        Base directory for data
  --dev                   Use dev profile (~/.rsclaw-dev, port 18889)
  --profile <NAME>        Use named profile (~/.rsclaw-<name>)
  --version               Show version
  --help                  Show help
```

## Commands

| Command | Description |
|---------|-------------|
| [`gateway`](/cli/gateway) | Start, stop, restart the gateway |
| [`setup`](/cli/setup) | First-time setup (detects OpenClaw) |
| [`onboard`](/cli/setup) | Interactive setup wizard |
| [`configure`](/cli/configure) | Section-based configuration menu |
| [`doctor`](/cli/doctor) | Health check and auto-fix |
| [`status`](/cli/doctor) | Show gateway status |
| [`channels`](/cli/channels) | Manage messaging channels |
| [`cron`](/cli/cron) | Manage scheduled tasks |
| [`security`](/cli/security) | Security audit |
| [`update`](/cli/update) | Auto-update from GitHub |
| `backup` | Backup configuration and data |
| `restore` | Restore from backup |
| `reset` | Reset to defaults |
| `sessions` | Manage sessions |
| `logs` | View gateway logs |
| `skills` | Install/manage skills |
