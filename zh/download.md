# 下载

## 快速安装

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run/https:// \
  curl -fsSL https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash
```

```powershell [Windows]
irm https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

:::

## 预编译二进制

从 [GitHub Releases](https://gitfast.run/https://github.com/rsclaw-ai/rsclaw/releases/latest) 下载最新版本。

| 平台 | 架构 | 文件 |
|------|------|------|
| macOS | ARM64 (Apple Silicon) | `rsclaw-*-aarch64-apple-darwin.tar.gz` |
| macOS | x86_64 (Intel) | `rsclaw-*-x86_64-apple-darwin.tar.gz` |
| Linux | x86_64 | `rsclaw-*-x86_64-unknown-linux-musl.tar.gz` |
| Linux | ARM64 | `rsclaw-*-aarch64-unknown-linux-musl.tar.gz` |
| Windows | x86_64 | `rsclaw-*-x86_64-pc-windows-msvc.zip` |
| Windows | ARM64 | `rsclaw-*-aarch64-pc-windows-msvc.zip` |

## 从源码编译

```bash
# 需要 Rust 1.91+
git clone https://gitfast.run/https://github.com/rsclaw-ai/rsclaw.git
cd rsclaw
cargo build --release
```

## 校验

每个 Release 附带 `SHA256SUMS.txt`:

```bash
sha256sum -c SHA256SUMS.txt
```
