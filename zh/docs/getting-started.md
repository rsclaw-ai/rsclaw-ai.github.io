# 快速开始

## 1. 安装

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash

# Windows (PowerShell)
irm https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

## 2. 设置

```bash
# 交互式设置向导
rsclaw onboard
```

从 OpenClaw 迁移:

```bash
# 自动检测 OpenClaw 数据并提供导入
rsclaw setup
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

# 或直接登录微信
rsclaw channels login wechat
```

## 下一步

- [安装选项](/zh/docs/installation) -- 全平台、源码编译、交叉编译
- [配置参考](/zh/docs/configuration) -- JSON5 配置文件
- [消息通道](/zh/docs/channels) -- 接入微信、Telegram、Discord 等
- [LLM 提供商](/zh/docs/providers) -- 配置通义千问、DeepSeek、OpenAI 等
- [CLI 参考](/zh/cli/) -- 全部命令和选项
