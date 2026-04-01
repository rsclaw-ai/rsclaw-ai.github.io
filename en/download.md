# Download

## Quick Install

::: code-group

```bash [macOS / Linux]
curl -fsSL https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash
```

```powershell [Windows]
irm https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

:::

## Pre-built Binaries

Download the latest release from [GitHub Releases](https://github.com/rsclaw-ai/rsclaw/releases/latest).

| Platform | Architecture | File |
|----------|-------------|------|
| macOS | ARM64 (Apple Silicon) | `rsclaw-*-aarch64-apple-darwin.tar.gz` |
| macOS | x86_64 (Intel) | `rsclaw-*-x86_64-apple-darwin.tar.gz` |
| Linux | x86_64 | `rsclaw-*-x86_64-unknown-linux-musl.tar.gz` |
| Linux | ARM64 | `rsclaw-*-aarch64-unknown-linux-musl.tar.gz` |
| Windows | x86_64 | `rsclaw-*-x86_64-pc-windows-msvc.zip` |
| Windows | ARM64 | `rsclaw-*-aarch64-pc-windows-msvc.zip` |

### Manual Install

```bash
# macOS / Linux
tar xzf rsclaw-*.tar.gz
chmod +x rsclaw
sudo mv rsclaw /usr/local/bin/

# Verify
rsclaw --version
```

```powershell
# Windows
Expand-Archive rsclaw-*.zip -DestinationPath .
.\rsclaw.exe --version
```

## From Source

```bash
# Requires Rust 1.91+
git clone https://github.com/rsclaw-ai/rsclaw.git
cd rsclaw
cargo build --release
# Binary at ./target/release/rsclaw
```

## Verify Checksums

Each release includes `SHA256SUMS.txt`:

```bash
sha256sum -c SHA256SUMS.txt
```
