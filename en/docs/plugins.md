# Plugin Management

RsClaw supports extending core functionality through plugins, adding new capabilities without modifying source code.

## Install Plugins

```bash
# Install a plugin
rsclaw plugins install <name>

# Install from local path
rsclaw plugins install --local ./path/to/plugin

# List installed plugins
rsclaw plugins list

# View plugin details
rsclaw plugins info <name>
```

## Manage Plugins

```bash
# Enable plugin
rsclaw plugins enable <name>

# Disable plugin
rsclaw plugins disable <name>

# Uninstall plugin
rsclaw plugins uninstall <name>

# Update plugin
rsclaw plugins update <name>
```

## Plugin Configuration

Configure plugins in `rsclaw.json5`:

```json5
plugins: {
  "my-plugin": {
    enabled: true,
    settings: {
      option1: "value1",
      option2: 42,
    }
  }
}
```

## Plugin Marketplace

```bash
# Search marketplace
rsclaw plugins search "keyword"

# Browse trending plugins
rsclaw plugins trending
```

## Developing Custom Plugins

A plugin is a Rust crate implementing the `Plugin` trait:

```rust
use rsclaw_plugin::{Plugin, PluginContext};

struct MyPlugin;

impl Plugin for MyPlugin {
    fn name(&self) -> &str {
        "my-plugin"
    }

    fn version(&self) -> &str {
        "0.1.0"
    }

    fn initialize(&self, ctx: &PluginContext) -> Result<(), Error> {
        // Initialization logic
        Ok(())
    }

    fn handle(&self, request: &Request) -> Result<Response, Error> {
        // Handle request
        Ok(Response::Ok)
    }
}
```

::: tip
For plugin development docs and examples, see the `examples/plugin/` directory in the GitHub repository.
:::

## Next Steps

- [Skills System](/en/docs/skills) — Reusable skills
- [Cron Jobs](/en/docs/cron) — Automated task scheduling
