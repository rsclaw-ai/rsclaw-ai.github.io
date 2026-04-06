# Installation

## Pre-built Binaries (Recommended)

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
curl -fsSL .../install.sh | bash -s -- --version v2026.4.1-beta

# Install to custom directory
curl -fsSL .../install.sh | bash -s -- --prefix /opt/rsclaw/bin
```

### Supported Platforms

| Platform | Architecture | Status |
|----------|-------------|--------|
| macOS | ARM64 (Apple Silicon) | Fully supported |
| macOS | x86_64 (Intel) | Fully supported |
| Linux | x86_64 | Fully supported (musl, static binary) |
| Linux | ARM64 | Fully supported (musl, static binary) |
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

The binary is at `./target/release/rsclaw` (~12MB with LTO + strip).

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
