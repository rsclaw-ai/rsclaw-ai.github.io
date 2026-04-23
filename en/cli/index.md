# CLI Reference

RsClaw ships as a single self-contained binary `rsclaw`. The tables below are generated from the latest `rsclaw --help` output.

## Global Options

```
rsclaw [OPTIONS] <COMMAND>

Options:
      --dev                 Isolate state to ~/.rsclaw-dev, port offset applied
      --profile <NAME>      Isolate state to ~/.rsclaw-<NAME>
      --base-dir <PATH>     Override the base directory (default: ~/.rsclaw).
                            Takes precedence over --dev and --profile
      --config-path <PATH>  Override the config file path (default: auto-detected)
      --no-color            Disable ANSI colour output
      --json                Machine-readable JSON output (disables styling)
      --container <NAME>    Run inside a container (Podman/Docker)
      --log-level <LEVEL>   Override the global log level
                            (trace, debug, info, warn, error)
  -h, --help                Print help
  -V, --version             Print version
```

> Run `rsclaw <COMMAND> --help` for full flag details of any subcommand, or use `rsclaw completion <shell>` to generate shell-completion scripts.

## Setup & Configuration

| Command | Description |
|---------|-------------|
| `setup` | Initialise config and workspace (non-interactive) |
| `onboard` | Interactive onboarding wizard |
| `configure` | Interactive configuration wizard |
| `config` | Config management sub-commands |
| `doctor` | Diagnose and optionally fix configuration issues |
| `migrate` | Migrate data from OpenClaw to rsclaw |

## Runtime & Monitoring

| Command | Description |
|---------|-------------|
| [`gateway`](/en/cli/gateway) | Gateway lifecycle (start / stop / restart / run) |
| `daemon` | Legacy gateway alias |
| `status` | Show overall status |
| `health` | Health check |
| `logs` | Tail gateway logs |
| `tui` | Terminal UI |
| `tray` | System tray icon (requires `--features tray`) |
| `dashboard` | Open the Control UI dashboard in a browser |

## Core Resources

| Command | Description |
|---------|-------------|
| `agents` | Agent management sub-commands |
| `agent` | Agent management via ACP |
| `agent-turn` | Run a single agent turn (openclaw-compatible) |
| `models` | Model (LLM provider) management |
| `skills` | Skill management |
| `plugins` | Plugin management |
| `memory` | Memory management |
| `sessions` | Session management |
| `hooks` | Webhook hook management |
| `secrets` | Secrets management |
| `tools` | External tool management (chromium, ffmpeg, etc.) |

## Channels & Pairing

| Command | Description |
|---------|-------------|
| [`channels`](/en/cli/channels) | Channel management (Telegram / Feishu / WeChat / Discord, …) |
| `message` | Send, read, and manage messages across chat channels |
| `pairing` | DM pairing management |
| `devices` | Device pairing and token management |
| `directory` | Contact/group ID lookup via the gateway directory API |
| `qr` | Generate iOS pairing QR code |

## Automation & Tasks

| Command | Description |
|---------|-------------|
| [`cron`](/en/cli/cron) | Cron job management |
| `webhooks` | Webhook helpers |
| `approvals` | Manage exec approvals |

## Security & Sandbox

| Command | Description |
|---------|-------------|
| [`security`](/en/cli/security) | Security audit |
| `sandbox` | Sandbox management |

## System Maintenance

| Command | Description |
|---------|-------------|
| [`update`](/en/cli/update) | Update rsclaw binary |
| `upgrade` | Alias for `update` |
| `backup` | Backup management |
| `reset` | Reset state |
| `uninstall` | Uninstall service and remove data |
| `system` | System utilities |
| `completion` | Generate shell completion scripts |

## Protocols & Networking

| Command | Description |
|---------|-------------|
| `acp` | ACP protocol commands — control coding agents |
| `dns` | DNS helpers for Tailscale wide-area discovery |

## Documentation

| Command | Description |
|---------|-------------|
| `docs` | Search live documentation |
| `help` | Print help for any command |
