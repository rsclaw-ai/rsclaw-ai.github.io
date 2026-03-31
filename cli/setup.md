# rsclaw setup / onboard

## `rsclaw setup`

First-time setup. Detects existing OpenClaw installation and offers import.

```bash
rsclaw setup
```

- Detects `~/.openclaw/` data
- Offers Import (copy) or Fresh start
- Creates `~/.rsclaw/rsclaw.json5`

## `rsclaw onboard`

Interactive setup wizard with step-by-step prompts.

```bash
rsclaw onboard
```

Steps:
1. Select LLM provider
2. Enter API key
3. Choose model
4. Configure first channel
5. Start gateway
