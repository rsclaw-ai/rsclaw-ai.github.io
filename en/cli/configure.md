# rsclaw configure

Interactive section-based configuration menu.

## Usage

```bash
# Full menu
rsclaw configure

# Direct to section
rsclaw configure --section <SECTION>
```

## Sections

| Section | Description |
|---------|-------------|
| `gateway` | Port, bind address |
| `providers` | LLM provider, API key, model |
| `channels` | Add/remove/configure channels |
| `web_search` | Search provider, API keys |
| `upload_limits` | File size, text chars, vision toggle |
| `exec_safety` | Enable/disable exec safety rules |
