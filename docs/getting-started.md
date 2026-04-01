# 快速开始

## 1. 安装

```bash
# macOS / Linux
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash

# Windows (PowerShell)
$env:GITHUB_PROXY="https://gitfast.run"; irm https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

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

## 3. 启动网关

```bash
rsclaw gateway start
```

## 4. 验证

```bash
rsclaw status
rsclaw doctor
```

## 5. 连接通道

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
