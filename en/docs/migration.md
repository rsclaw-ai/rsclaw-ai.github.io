# Migration from OpenClaw

RsClaw is a drop-in replacement for OpenClaw. Migration takes under a minute.

## Steps

```bash
# 1. Stop OpenClaw
openclaw gateway stop

# 2. Install RsClaw
curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash

# 3. Setup (auto-detects OpenClaw data)
rsclaw setup

# 4. Start RsClaw
rsclaw gateway start
```

## What `rsclaw setup` Does

When it detects an existing OpenClaw installation (`~/.openclaw/`), it offers:

- **Import** (recommended) -- copies config, workspace, and session history into `~/.rsclaw/`. OpenClaw data is read-only, never modified.
- **Fresh** -- starts clean, ignores OpenClaw data.

## Compatibility

| Feature | Status |
|---------|--------|
| Config format (JSON5) | Fully compatible |
| All config fields | Supported (unknown fields silently ignored) |
| WebSocket protocol v3 | 33+ methods implemented |
| Control Panel (WebUI) | Wire-compatible at same port |
| ClawHub skills | Fully supported |
| Node.js plugins | Supported (requires Node.js runtime) |
| Environment variables | Same `${VAR}` syntax |

## Running Side by Side

RsClaw and OpenClaw can run simultaneously:

| | RsClaw | OpenClaw |
|---|---|---|
| Default port | 18888 | 18789 |
| Data directory | `~/.rsclaw/` | `~/.openclaw/` |

They use separate data directories and never interfere.

## Switching Back

```bash
rsclaw gateway stop
openclaw gateway start
```

Your `~/.openclaw/` directory is never modified by RsClaw.
