# Skills System

Skills are reusable skill modules in RsClaw that agents can automatically load and invoke without relearning each time.

## Skill Directory Structure

```
skills/<slug>/
├── SKILL.md          ← Required: Skill description and triggers
├── scripts/          ← Optional: Reusable helper scripts
└── references/       ← Optional: Reference documentation
```

## SKILL.md Format

```markdown
---
name: my-skill
description: Skill description with trigger conditions. Auto-invoked when user needs XXX.
---

## Usage
1. Step one
2. Step two

## Input/Output Example
Input: User request
Output: Processing result
```

## Skill Management

```bash
# List installed skills
rsclaw skills list

# Search skill marketplace
rsclaw skills search "data analysis"

# Install a skill
rsclaw skills install <name>

# View skill details
rsclaw skills info <name>
```

## Built-in Skills

RsClaw comes with these skills:

- **hackernews** — Hacker News trending posts
- **bilibili** — Bilibili trending content
- **arxiv** — Academic paper search
- **wikipedia** — Wikipedia lookup
- **github-trending** — GitHub trending projects

## Creating Custom Skills

```bash
# Create skill directory
mkdir -p ~/.rsclaw/skills/my-skill

# Write SKILL.md
cat > ~/.rsclaw/skills/my-skill/SKILL.md << 'EOF'
---
name: my-custom-skill
description: My custom skill, auto-invoked when user needs XXX.
---

## Usage
Detailed steps...
EOF
```

::: tip
Skills are automatically matched and loaded when agents process requests — no manual triggering needed.
:::

## Next Steps

- [Plugin Management](/en/docs/plugins) — Extend functionality
- [Agent Management](/en/docs/agents) — Configure agents
