# Installation

## Desktop App (Recommended)

The desktop app includes GUI + CLI, ready to use out of the box with no environment setup.

### Download & Install

Visit the [Download page](/en/download) to get the installer for your platform:

| Platform | Format | Notes |
|----------|--------|-------|
| macOS | `.dmg` | Drag to Applications folder |
| Windows | `.msi` | Double-click to install, auto-adds to PATH |
| Linux | `.deb` | `sudo dpkg -i rsclaw_*.deb` |

### First Launch

1. Open the RsClaw desktop app
2. Configure an AI model provider (select Qwen, DeepSeek, OpenAI, etc. and enter API Key)
3. Connect a messaging channel (WeChat / Feishu QR login, or configure Telegram, Discord, etc.)

::: warning Windows Users
SmartScreen may show a blue "Windows protected your PC" warning. Click **"More info"** → **"Run anyway"** to proceed.
:::

::: warning macOS Users
The app is not Apple-signed yet. If macOS says it's "damaged", run in Terminal:
```bash
# 1. Allow apps from anywhere
sudo spctl --master-disable
# 2. Remove quarantine attribute
sudo xattr -rd com.apple.quarantine /Applications/RsClaw.app
```
:::

---

## CLI Installation

### One-Line Install

::: code-group

```bash [macOS / Linux]
curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash
```

```powershell [Windows]
irm https://app.rsclaw.ai/scripts/install.ps1 | iex
```

:::

Options:

```bash
# Install specific version
curl -fsSL .../install.sh | bash -s -- --version v2026.4.13

# Install to custom directory
curl -fsSL .../install.sh | bash -s -- --prefix /usr/local/bin
```

### Supported Platforms

| Platform | Architecture | Status |
|----------|-------------|--------|
| macOS | ARM64 (Apple Silicon) | Fully supported |
| macOS | x86_64 (Intel) | Fully supported |
| Linux | x86_64 | Fully supported |
| Linux | ARM64 | Fully supported |
| Windows | x86_64 | Fully supported |
| Windows | ARM64 | Fully supported |

### Manual Download

Download from [GitHub Releases](https://github.com/rsclaw-ai/rsclaw/releases/latest), extract, and add to PATH.

## From Source

### Requirements

- Rust 1.91+ (Edition 2024)
- Protobuf compiler (`protoc`)

```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install protoc
# macOS
brew install protobuf
# Ubuntu/Debian
sudo apt-get install -y protobuf-compiler

# Build
git clone https://github.com/rsclaw-ai/rsclaw.git
cd rsclaw
cargo build --release
```

The binary is at `./target/release/rsclaw` (~15MB with LTO + strip).

### Optional Features

```bash
# Matrix E2EE support
cargo build --release --features channel-matrix
```

## Update

```bash
# Auto-update from GitHub
rsclaw update

# Or reinstall via script
curl -fsSL .../install.sh | bash

# Or from source
cd /path/to/rsclaw && git pull && cargo build --release
```

## Uninstall

```bash
# Remove binary
sudo rm /usr/local/bin/rsclaw

# Remove data (optional)
rm -rf ~/.rsclaw
```
