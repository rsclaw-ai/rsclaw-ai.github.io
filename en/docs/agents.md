# Agent Management

RsClaw supports creating and managing multiple agents, each with independent identity, configuration, and workspace.

## Create Agent

```bash
# Create a new agent
rsclaw agents create <name>

# Create with model specified
rsclaw agents create <name> --model gpt-4o

# Create with channel binding
rsclaw agents create <name> --channel telegram
```

## List Agents

```bash
rsclaw agents list
```

## Agent Configuration

Each agent's workspace contains:

- **IDENTITY.md** — Agent identity information
- **SOUL.md** — Behavior guidelines and personality
- **USER.md** — User preferences and context
- **AGENTS.md** — Agent collaboration rules

::: tip
After modifying these files, the agent automatically loads the latest configuration on the next conversation — no restart needed.
:::

## Agent Lifecycle

```bash
# Start agent
rsclaw agents start <name>

# Stop agent
rsclaw agents stop <name>

# Restart agent
rsclaw agents restart <name>

# Delete agent
rsclaw agents delete <name>
```

## Multi-Channel Binding

RsClaw supports one agent serving multiple channels simultaneously:

```json5
agents: {
  "main": {
    channels: ["telegram", "wechat", "feishu"],
    model: "claude-sonnet-4",
  }
}
```

## Inter-Agent Collaboration

Through the A2A protocol, agents can collaborate across machines:

```bash
# View remote agents
rsclaw agents list --remote

# Send task to remote agent
rsclaw agents send <name> "Task description"
```

## Next Steps

- [Memory System](/en/docs/memory) — Configure long-term memory
- [Skills System](/en/docs/skills) — Install and use skills
- [Cron Jobs](/en/docs/cron) — Automated task scheduling
