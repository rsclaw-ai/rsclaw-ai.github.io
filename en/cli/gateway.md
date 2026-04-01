# rsclaw gateway

Manage the RsClaw gateway process.

## Subcommands

### `rsclaw gateway start`

Start the gateway as a background daemon.

```bash
rsclaw gateway start
rsclaw --dev gateway start    # dev mode (port 18889)
```

### `rsclaw gateway stop`

Stop the running gateway.

```bash
rsclaw gateway stop
```

### `rsclaw gateway run`

Run the gateway in the foreground (for debugging).

```bash
rsclaw gateway run
RUST_LOG=rsclaw=debug rsclaw gateway run
```

### `rsclaw gateway restart`

Restart the gateway (stop + start).

```bash
rsclaw gateway restart
```

### `rsclaw gateway status`

Show gateway status, PID, uptime, and connected channels.

```bash
rsclaw gateway status
```
