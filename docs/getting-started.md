# 快速开始

## 1. 安装

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash
```

```powershell [Windows]
$env:GITHUB_PROXY="https://gitfast.run"; irm https://app.rsclaw.ai/scripts/install.ps1 | iex
```

:::

## 2. 设置

```bash
# 首次设置（检测 OpenClaw 数据并提供导入）
rsclaw setup
```

然后运行交互式向导：

```bash
# 配置提供商、模型和第一个通道
rsclaw onboard
```

## 3. 从 OpenClaw 迁移（可选）

如果已有 OpenClaw 安装，一条命令完成迁移：

```bash
rsclaw migrate
```

自动迁移内容：
- 配置文件（路径自动重写，端口改为 18888）
- 所有 agent 的 workspace 文件（IDENTITY.md、SOUL.md、USER.md 等）
- 长期记忆（MEMORY.md + memory/*.md 拆分写入向量数据库，按需召回）
- 已安装技能（10+ skills 直接复制）
- 会话历史（JSONL 导入）

::: tip 配置对比
OpenClaw 每个 agent 只能绑定一个 channel（通过 bindings），rsclaw 每个 agent 可以同时服务多个 channel，配置更简洁。迁移后运行 `rsclaw configure` 按需调整。
:::

## 4. 启动网关

```bash
rsclaw gateway start
```

## 5. 验证

```bash
rsclaw status
rsclaw doctor
```

## 6. 连接通道

```bash
rsclaw configure --section channels

# 或直接扫码登录
rsclaw channels login wechat   # 微信扫码
rsclaw channels login feishu   # 飞书扫码
```

## 下一步

- [安装选项](/docs/installation) -- 全平台、源码编译、交叉编译
- [配置参考](/docs/configuration) -- JSON5 配置文件
- [消息通道](/docs/channels) -- 接入微信、Telegram、Discord 等
- [LLM 提供商](/docs/providers) -- 配置通义千问、DeepSeek、OpenAI 等
- [CLI 参考](/cli/) -- 全部命令和选项
