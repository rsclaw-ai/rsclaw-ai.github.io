# 安装指南

## 预编译二进制（推荐）

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
curl -fsSL .../install.sh | bash -s -- --version v2026.4.1-beta

# 安装到自定义目录
curl -fsSL .../install.sh | bash -s -- --prefix /opt/rsclaw/bin
```

### 支持平台

| 平台 | 架构 | 状态 |
|------|------|------|
| macOS | ARM64 (Apple Silicon) | 完全支持 |
| macOS | x86_64 (Intel) | 完全支持 |
| Linux | x86_64 | 完全支持（musl 静态链接） |
| Linux | ARM64 | 完全支持（musl 静态链接） |
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
