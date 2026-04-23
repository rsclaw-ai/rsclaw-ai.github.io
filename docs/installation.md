# 安装指南

## 桌面应用（推荐）

桌面版包含 GUI 图形界面 + CLI 命令行，下载即用，无需配置环境。

### 下载安装

前往 [下载页面](/download) 获取适合你平台的安装包：

| 平台 | 格式 | 说明 |
|------|------|------|
| macOS | `.dmg` | 拖入 Applications 文件夹即可 |
| Windows | `.msi` | 双击安装，自动添加 PATH |
| Linux | `.deb` | `sudo dpkg -i rsclaw_*.deb` |

### 安装后首次启动

1. 打开螃蟹 AI 桌面应用
2. 配置 AI 模型提供商（选择通义千问、DeepSeek、OpenAI 等，填入 API Key）
3. 接入消息通道（微信 / 飞书扫码登录，或配置 Telegram、Discord 等）

::: warning Windows 用户
安装时 SmartScreen 可能弹出蓝色警告"Windows 已保护你的电脑"，点击 **"更多信息"** → **"仍要运行"** 即可正常安装。
:::

::: warning macOS 用户
首次打开可能提示"已损坏"，这是因为应用未经 Apple 签名。请在终端执行：
```bash
# 1. 允许任何来源的应用
sudo spctl --master-disable
# 2. 移除隔离属性
sudo xattr -rd com.apple.quarantine /Applications/RsClaw.app
```
:::

---

## CLI 命令行安装

### 一键安装

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash
```

```powershell [Windows]
$env:GITHUB_PROXY="https://gitfast.run"; irm https://app.rsclaw.ai/scripts/install.ps1 | iex
```

:::

选项：

```bash
# 安装指定版本
curl -fsSL .../install.sh | bash -s -- --version v2026.4.13

# 安装到自定义目录
curl -fsSL .../install.sh | bash -s -- --prefix /usr/local/bin
```

### 支持平台

| 平台 | 架构 | 状态 |
|------|------|------|
| macOS | ARM64 (Apple Silicon) | 完全支持 |
| macOS | x86_64 (Intel) | 完全支持 |
| Linux | x86_64 | 完全支持 |
| Linux | ARM64 | 完全支持 |
| Windows | x86_64 | 完全支持 |
| Windows | ARM64 | 完全支持 |

### 手动下载

从 [GitHub Releases](https://gitfast.run/https://github.com/rsclaw-ai/rsclaw/releases/latest) 下载，解压后添加到 PATH。

## 从源码编译

### 前置依赖

- Rust 1.91+（Edition 2024）
- Protobuf 编译器（`protoc`）

```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 安装 protoc
# macOS
brew install protobuf
# Ubuntu/Debian
sudo apt-get install -y protobuf-compiler

# 编译
git clone https://gitfast.run/https://github.com/rsclaw-ai/rsclaw.git
cd rsclaw
cargo build --release
```

二进制文件位于 `./target/release/rsclaw`（约 17MB，已启用 LTO + strip）。

### 可选功能

```bash
# Matrix E2EE 加密支持
cargo build --release --features channel-matrix
```

## 更新

```bash
# 从 GitHub 自动更新
rsclaw update

# 或通过安装脚本重新安装
curl -fsSL .../install.sh | bash

# 或从源码更新
cd /path/to/rsclaw && git pull && cargo build --release
```

## 卸载

```bash
# 删除二进制
sudo rm /usr/local/bin/rsclaw

# 删除数据（可选）
rm -rf ~/.rsclaw
```
