# Security

RsClaw provides multiple security layers to protect against dangerous operations.

## Exec Safety Rules

Configurable deny/confirm/allow patterns. Enable with:

```json5
{
  tools: {
    exec: { safety: true },
  },
}
```

### Deny Patterns (50+)

Blocked commands include:
- `sudo`, `su`, `rm -rf /`, `dd`, `mkfs`, `shutdown`, `reboot`
- `curl | sh`, `wget | sh` (pipe to shell)
- Read/write to `.ssh/`, `.env`, `.aws/`, `.kube/`, `.gcloud/`
- Access to `openclaw.json`, `rsclaw.json5`, shell history
- `drop database`, `truncate table`

### Confirm Patterns

Require user confirmation:
- `rm -rf`, `git push --force`, `git reset --hard`
- `docker rm`, `docker rmi`, `kubectl delete`

### Allow Override

Whitelist specific commands to override deny rules.

## Read Protection

Blocks access to sensitive files:
- SSH keys (`~/.ssh/`)
- GPG keys (`~/.gnupg/`)
- Cloud credentials (`.aws/`, `.kube/`, `.gcloud/`)
- AI tool configs (`.claude/`, `.opencode/`)
- Shell history (`.bash_history`, `.zsh_history`)
- Database passwords

## Write Sandbox

- Workspace path isolation
- Content scanning for dangerous patterns in scripts
- Blocks writes to system paths

## File Upload Gates

Two-layer confirmation:
1. **Size Gate**: File > 50MB triggers confirmation
2. **Token Gate**: Extracted text > 50,000 chars triggers cost confirmation

Configurable via `/set_upload_size` and `/set_upload_chars`.

## Per-Agent Permissions

- Main agent: `*` (all commands)
- Sub-agents: restricted by configuration

## Security Audit

```bash
# Run security audit
rsclaw security audit

# Auto-fix issues
rsclaw security audit --fix

# Deep scan (check all state file permissions)
rsclaw security audit --fix --deep
```

## Customization

Edit `defaults.toml` in `$base_dir/` to customize:
- Deny patterns
- Confirm patterns
- Allow overrides
