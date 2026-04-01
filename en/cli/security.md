# rsclaw security

Security audit and hardening.

## Usage

```bash
rsclaw security audit              # Check for issues
rsclaw security audit --fix        # Auto-fix issues
rsclaw security audit --fix --deep # Deep scan state directory
```

## Checks

- Config file permissions (must not be world-readable)
- Plaintext API keys in config (should use `${VAR}`)
- State file permissions (deep scan)
- Public folder exposure (Windows)
