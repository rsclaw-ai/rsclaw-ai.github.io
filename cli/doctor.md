# rsclaw doctor

Health check and auto-fix.

## Usage

```bash
rsclaw doctor          # Check only
rsclaw doctor --fix    # Auto-fix issues
```

## Checks

1. Config file exists and is valid
2. LLM provider connectivity
3. Gateway process running
4. Config file permissions (Unix)
5. Agent/model configuration
