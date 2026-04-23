# 插件管理

RsClaw 支持通过插件扩展核心功能，无需修改源码即可添加新能力。

## 插件安装

```bash
# 安装插件
rsclaw plugins install <name>

# 从本地安装
rsclaw plugins install --local ./path/to/plugin

# 列出已安装插件
rsclaw plugins list

# 查看插件详情
rsclaw plugins info <name>
```

## 插件管理

```bash
# 启用插件
rsclaw plugins enable <name>

# 禁用插件
rsclaw plugins disable <name>

# 卸载插件
rsclaw plugins uninstall <name>

# 更新插件
rsclaw plugins update <name>
```

## 插件配置

插件配置在 `rsclaw.json5` 中：

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

## 插件市场

```bash
# 搜索插件市场
rsclaw plugins search "关键词"

# 浏览热门插件
rsclaw plugins trending
```

## 开发自定义插件

插件是一个 Rust crate，实现 `Plugin` trait：

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
        // 初始化逻辑
        Ok(())
    }

    fn handle(&self, request: &Request) -> Result<Response, Error> {
        // 处理请求
        Ok(Response::Ok)
    }
}
```

::: tip 提示
插件开发文档和示例请参考 GitHub 仓库中的 `examples/plugin/` 目录。
:::

## 下一步

- [Skills 系统](/docs/skills) — 可复用技能
- [定时任务](/docs/cron) — 自动化任务调度
