# 下载

<script setup>
import { ref, onMounted } from 'vue'

const platform = ref('')
const arch = ref('')
const loading = ref(true)
const version = ref('')
const downloadUrl = ref('')
const allAssets = ref([])

const PLATFORMS = {
  'aarch64-apple-darwin': { os: 'macOS', arch: 'ARM64 (Apple Silicon)', ext: '.tar.gz', icon: '' },
  'x86_64-apple-darwin': { os: 'macOS', arch: 'x86_64 (Intel)', ext: '.tar.gz', icon: '' },
  'x86_64-pc-windows-msvc': { os: 'Windows', arch: 'x86_64', ext: '.zip', icon: '' },
  'aarch64-pc-windows-msvc': { os: 'Windows', arch: 'ARM64', ext: '.zip', icon: '' },
  'x86_64-unknown-linux-musl': { os: 'Linux', arch: 'x86_64', ext: '.tar.gz', icon: '' },
  'aarch64-unknown-linux-musl': { os: 'Linux', arch: 'ARM64', ext: '.tar.gz', icon: '' },
}

function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase()
  const p = navigator.platform?.toLowerCase() || ''
  if (ua.includes('mac') || p.includes('mac')) {
    platform.value = 'macOS'
    // Apple Silicon detection
    arch.value = (p.includes('arm') || navigator.userAgent.includes('ARM') || (window.screen?.width > 0 && /Mac/.test(navigator.platform))) ? 'aarch64-apple-darwin' : 'x86_64-apple-darwin'
    // Default to ARM for modern Macs
    if (!p.includes('arm') && !navigator.userAgent.includes('ARM')) arch.value = 'aarch64-apple-darwin'
  } else if (ua.includes('win')) {
    platform.value = 'Windows'
    arch.value = ua.includes('arm') || ua.includes('aarch64') ? 'aarch64-pc-windows-msvc' : 'x86_64-pc-windows-msvc'
  } else if (ua.includes('linux')) {
    platform.value = 'Linux'
    arch.value = ua.includes('aarch64') || ua.includes('arm64') ? 'aarch64-unknown-linux-musl' : 'x86_64-unknown-linux-musl'
  }
}

async function fetchRelease() {
  try {
    let data
    try {
      const resp = await fetch('https://app.rsclaw.ai/api/version', { signal: AbortSignal.timeout(5000) })
      if (resp.ok) data = await resp.json()
    } catch {}
    if (!data?.tag_name) {
      const resp = await fetch('https://api.github.com/repos/rsclaw-ai/rsclaw/releases/latest')
      data = await resp.json()
    }
    version.value = data.tag_name || ''
    const assets = data.assets || []
    allAssets.value = assets
    // Find matching asset for detected platform
    if (arch.value) {
      const match = assets.find(a => a.name?.includes(arch.value))
      if (match) downloadUrl.value = match.browser_download_url
    }
  } catch {}
  loading.value = false
}

function getAssetUrl(target) {
  const a = allAssets.value.find(a => a.name?.includes(target))
  return a?.browser_download_url || `https://github.com/rsclaw-ai/rsclaw/releases/latest`
}

function getAssetSize(target) {
  const a = allAssets.value.find(a => a.name?.includes(target))
  if (!a?.size) return ''
  return `${(a.size / 1024 / 1024).toFixed(1)} MB`
}

onMounted(() => {
  detectPlatform()
  fetchRelease()
})
</script>

<div v-if="loading" style="text-align:center;padding:40px;color:#888">
  Loading...
</div>

<div v-if="!loading && downloadUrl" style="background:linear-gradient(135deg,#1a1c22,#141618);border:1px solid rgba(249,115,22,0.2);border-radius:16px;padding:32px;margin:20px 0;text-align:center">
  <div style="font-size:14px;color:#9896a4;margin-bottom:8px">
    {{ PLATFORMS[arch]?.icon }} {{ PLATFORMS[arch]?.os }} {{ PLATFORMS[arch]?.arch }}
  </div>
  <div style="font-size:11px;color:#4a4858;margin-bottom:16px;font-family:monospace">
    {{ version }} &middot; {{ getAssetSize(arch) }}
  </div>
  <a :href="downloadUrl" style="display:inline-block;padding:12px 32px;background:#f97316;color:#fff;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 14px rgba(249,115,22,0.3)">
    Download for {{ PLATFORMS[arch]?.os }}
  </a>
  <div style="margin-top:12px;font-size:11px;color:#4a4858">
    Not your platform? <a href="#all-platforms" style="color:#f97316">See all downloads</a>
  </div>
</div>

## Quick Install

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash
```

```powershell [Windows]
$env:GITHUB_PROXY="https://gitfast.run"; irm https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

:::

## All Platforms {#all-platforms}

<div v-if="!loading && version" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0">
  <a v-for="(info, target) in PLATFORMS" :key="target" :href="getAssetUrl(target)"
    style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#141618;border:1px solid rgba(255,255,255,0.055);border-radius:10px;text-decoration:none;transition:border-color 0.12s"
    :style="{ borderColor: target === arch ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.055)' }">
    <div>
      <div style="font-size:13px;font-weight:600;color:#eceaf4">{{ info.os }} {{ info.arch }}</div>
      <div style="font-size:10px;color:#4a4858;font-family:monospace;margin-top:2px">{{ version }} &middot; {{ getAssetSize(target) }}</div>
    </div>
  </a>
</div>

<div v-if="loading || !version">

| Platform | Arch | File |
|------|------|------|
| macOS | ARM64 (Apple Silicon) | `rsclaw-*-aarch64-apple-darwin.tar.gz` |
| macOS | x86_64 (Intel) | `rsclaw-*-x86_64-apple-darwin.tar.gz` |
| Linux | x86_64 | `rsclaw-*-x86_64-unknown-linux-musl.tar.gz` |
| Linux | ARM64 | `rsclaw-*-aarch64-unknown-linux-musl.tar.gz` |
| Windows | x86_64 | `rsclaw-*-x86_64-pc-windows-msvc.zip` |
| Windows | ARM64 | `rsclaw-*-aarch64-pc-windows-msvc.zip` |

</div>

## Build from Source

```bash
# Requires Rust 1.91+
git clone https://gitfast.run/https://github.com/rsclaw-ai/rsclaw.git
cd rsclaw
cargo build --release
```

## Verify

Each release includes `SHA256SUMS.txt`:

```bash
sha256sum -c SHA256SUMS.txt
```
