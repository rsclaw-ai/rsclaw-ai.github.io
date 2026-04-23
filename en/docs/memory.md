# Memory System

RsClaw provides a three-layer persistent memory system, natively implemented with redb + tantivy + hnsw_rs, giving agents long-term memory and self-learning capabilities.

## Memory Architecture

```
┌─────────────────────────────────────────┐
│         Session Context (Short-term)     │
│    Full context window of current chat   │
├─────────────────────────────────────────┤
│         Indexed Memory (Mid-term)        │
│  MEMORY.md — Structured index, fast lookup│
├─────────────────────────────────────────┤
│         Vector Memory (Long-term)        │
│ redb + hnsw_rs — Persistent vector DB   │
└─────────────────────────────────────────┘
```

## Memory Operations

Agents automatically use memory tools during conversations:

```bash
# Search memories
rsclaw memory search "user preferences"

# Get specific memory
rsclaw memory get <id>

# Store new memory
rsclaw memory put "User prefers dark mode"

# Delete memory
rsclaw memory delete <id>
```

## Memory Types

| Type | Description | Storage |
|------|-------------|---------|
| **note** | General notes | Vector DB |
| **fact** | Verified factual info | Vector DB + Index |
| **summary** | Session summaries | Vector DB |
| **remember** | User explicitly asked to remember | Vector DB + Index |

## Memory Lifecycle

1. **Auto-store** — Agents automatically identify important information and store it
2. **Auto-index** — High-importance memories are synced to MEMORY.md index
3. **On-demand recall** — Semantic search, automatically recalls relevant memories based on context
4. **Auto-forget** — Low-importance memories gradually decrease in weight over time

::: tip
The memory system runs entirely locally. All data is stored on-device and never uploaded to any remote server.
:::

## Memory Configuration

```json5
memory: {
  // Vector database path
  dbPath: "~/.rsclaw/memory.db",
  // Maximum number of memory entries
  maxEntries: 10000,
  // Auto-index threshold (importance >= 0.7)
  autoIndexThreshold: 0.7,
}
```

## Next Steps

- [Agent Management](/en/docs/agents) — Configure agents
- [Skills System](/en/docs/skills) — Install and use skills
