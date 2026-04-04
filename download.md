# Download

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const version = ref('')
const allAssets = ref([])
const detectedOS = ref('')
const detectedArch = ref('')
const activeTab = ref('app')

// GUI App packages
const APP_PLATFORMS = {
  'macos-aarch64': { os: 'macOS', arch: 'ARM64 (Apple Silicon)', pattern: 'aarch64.dmg', icon: '\uD83D\uDDA5' },
  'macos-x86_64': { os: 'macOS', arch: 'x86_64 (Intel)', pattern: 'x86_64.dmg', icon: '\uD83D\uDDA5' },
  'windows-x64': { os: 'Windows', arch: 'x86_64', pattern: 'x64-setup.exe', icon: '\uD83D\uDDA5' },
  'windows-arm64': { os: 'Windows', arch: 'ARM64', pattern: 'arm64-setup.exe', icon: '\uD83D\uDDA5' },
  'linux-x64': { os: 'Linux', arch: 'x86_64', pattern: 'amd64.AppImage', icon: '\uD83D\uDDA5' },
  'linux-arm64': { os: 'Linux', arch: 'ARM64', pattern: 'arm64.AppImage', icon: '\uD83D\uDDA5' },
}

// CLI binaries
const CLI_PLATFORMS = {
  'aarch64-apple-darwin': { os: 'macOS', arch: 'ARM64 (Apple Silicon)', icon: '\u2318' },
  'x86_64-apple-darwin': { os: 'macOS', arch: 'x86_64 (Intel)', icon: '\u2318' },
  'x86_64-pc-windows-msvc': { os: 'Windows', arch: 'x86_64', icon: '>' },
  'aarch64-pc-windows-msvc': { os: 'Windows', arch: 'ARM64', icon: '>' },
  'x86_64-unknown-linux-musl': { os: 'Linux', arch: 'x86_64', icon: '$' },
  'aarch64-unknown-linux-musl': { os: 'Linux', arch: 'ARM64', icon: '$' },
}

const appKey = ref('')
const cliKey = ref('')

function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase()
  const p = navigator.platform?.toLowerCase() || ''
  if (ua.includes('mac') || p.includes('mac')) {
    detectedOS.value = 'macOS'
    detectedArch.value = 'aarch64' // default ARM for modern Macs
    appKey.value = 'macos-aarch64'
    cliKey.value = 'aarch64-apple-darwin'
  } else if (ua.includes('win')) {
    detectedOS.value = 'Windows'
    detectedArch.value = ua.includes('arm') ? 'arm64' : 'x64'
    appKey.value = detectedArch.value === 'arm64' ? 'windows-arm64' : 'windows-x64'
    cliKey.value = detectedArch.value === 'arm64' ? 'aarch64-pc-windows-msvc' : 'x86_64-pc-windows-msvc'
  } else if (ua.includes('linux')) {
    detectedOS.value = 'Linux'
    detectedArch.value = (ua.includes('aarch64') || ua.includes('arm64')) ? 'arm64' : 'x64'
    appKey.value = detectedArch.value === 'arm64' ? 'linux-arm64' : 'linux-x64'
    cliKey.value = detectedArch.value === 'arm64' ? 'aarch64-unknown-linux-musl' : 'x86_64-unknown-linux-musl'
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
    allAssets.value = data.assets || []
  } catch {}
  loading.value = false
}

function findAsset(pattern) {
  return allAssets.value.find(a => a.name?.includes(pattern))
}
function assetUrl(pattern) {
  return findAsset(pattern)?.browser_download_url || 'https://github.com/rsclaw-ai/rsclaw/releases/latest'
}
function assetSize(pattern) {
  const a = findAsset(pattern)
  if (!a?.size) return ''
  return `${(a.size / 1024 / 1024).toFixed(1)} MB`
}

onMounted(() => {
  detectPlatform()
  fetchRelease()
})
</script>

<div v-if="loading" style="text-align:center;padding:40px;color:#888">Loading...</div>

<!-- Hero download card -->
<div v-if="!loading" style="background:linear-gradient(135deg,#1a1c22,#141618);border:1px solid rgba(249,115,22,0.15);border-radius:16px;padding:32px;margin:20px 0;text-align:center">
  <div style="font-size:12px;color:#4a4858;margin-bottom:6px;letter-spacing:1px;text-transform:uppercase">Detected: {{ detectedOS }} {{ detectedArch }}</div>
  <div style="font-size:11px;color:#2e2c3a;margin-bottom:20px;font-family:monospace">{{ version }}</div>

  <!-- Tab switch -->
  <div style="display:inline-flex;background:#0f1013;border-radius:8px;padding:3px;margin-bottom:20px;border:1px solid rgba(255,255,255,0.05)">
    <button @click="activeTab='app'" :style="{padding:'7px 20px',borderRadius:'6px',border:'none',fontSize:'12px',fontWeight:600,cursor:'pointer',background:activeTab==='app'?'#f97316':'transparent',color:activeTab==='app'?'#fff':'#4a4858'}">
      Desktop App
    </button>
    <button @click="activeTab='cli'" :style="{padding:'7px 20px',borderRadius:'6px',border:'none',fontSize:'12px',fontWeight:600,cursor:'pointer',background:activeTab==='cli'?'#f97316':'transparent',color:activeTab==='cli'?'#fff':'#4a4858'}">
      CLI Only
    </button>
  </div>

  <!-- App download -->
  <div v-if="activeTab==='app' && appKey">
    <a :href="assetUrl(APP_PLATFORMS[appKey]?.pattern)" style="display:inline-block;padding:14px 40px;background:#f97316;color:#fff;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 14px rgba(249,115,22,0.3)">
      Download App for {{ detectedOS }}
    </a>
    <div style="margin-top:8px;font-size:10px;color:#2e2c3a;font-family:monospace">
      {{ APP_PLATFORMS[appKey]?.pattern }} &middot; {{ assetSize(APP_PLATFORMS[appKey]?.pattern) }}
    </div>
    <div style="margin-top:4px;font-size:11px;color:#4a4858">GUI + CLI included</div>
  </div>

  <!-- CLI download -->
  <div v-if="activeTab==='cli' && cliKey">
    <a :href="assetUrl(cliKey)" style="display:inline-block;padding:14px 40px;background:#f97316;color:#fff;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 14px rgba(249,115,22,0.3)">
      Download CLI for {{ detectedOS }}
    </a>
    <div style="margin-top:8px;font-size:10px;color:#2e2c3a;font-family:monospace">
      rsclaw-{{ version }}-{{ cliKey }} &middot; {{ assetSize(cliKey) }}
    </div>
  </div>

  <div style="margin-top:14px;font-size:11px;color:#4a4858">
    Not your platform? <a href="#all-downloads" style="color:#f97316">See all downloads</a>
  </div>
</div>

## Quick Install (CLI)

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash
```

```powershell [Windows]
$env:GITHUB_PROXY="https://gitfast.run"; irm https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

:::

## All Downloads {#all-downloads}

### Desktop App (GUI + CLI)

<div v-if="!loading && version" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0">
  <a v-for="(info, key) in APP_PLATFORMS" :key="key" :href="assetUrl(info.pattern)"
    style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#141618;border:1px solid rgba(255,255,255,0.055);border-radius:10px;text-decoration:none;transition:border-color 0.12s"
    :style="{ borderColor: key === appKey ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.055)' }">
    <div style="font-size:20px;width:28px;text-align:center">{{ info.icon }}</div>
    <div>
      <div style="font-size:13px;font-weight:600;color:#eceaf4">{{ info.os }} {{ info.arch }}</div>
      <div style="font-size:10px;color:#4a4858;font-family:monospace;margin-top:2px">{{ info.pattern }} &middot; {{ assetSize(info.pattern) }}</div>
    </div>
  </a>
</div>

### CLI Binary

<div v-if="!loading && version" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0">
  <a v-for="(info, target) in CLI_PLATFORMS" :key="target" :href="assetUrl(target)"
    style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#141618;border:1px solid rgba(255,255,255,0.055);border-radius:10px;text-decoration:none;transition:border-color 0.12s"
    :style="{ borderColor: target === cliKey ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.055)' }">
    <div style="font-size:16px;width:28px;text-align:center;font-family:monospace;color:#4a4858">{{ info.icon }}</div>
    <div>
      <div style="font-size:13px;font-weight:600;color:#eceaf4">{{ info.os }} {{ info.arch }}</div>
      <div style="font-size:10px;color:#4a4858;font-family:monospace;margin-top:2px">{{ version }} &middot; {{ assetSize(target) }}</div>
    </div>
  </a>
</div>

<div v-if="loading || !version">

| Type | Platform | Arch | File |
|------|------|------|------|
| App | macOS | ARM64 | `RsClaw-*-aarch64.dmg` |
| App | macOS | x86_64 | `RsClaw-*-x86_64.dmg` |
| App | Windows | x86_64 | `RsClaw-*-x64-setup.exe` |
| App | Linux | x86_64 | `RsClaw-*-amd64.AppImage` |
| CLI | macOS | ARM64 | `rsclaw-*-aarch64-apple-darwin.tar.gz` |
| CLI | macOS | x86_64 | `rsclaw-*-x86_64-apple-darwin.tar.gz` |
| CLI | Linux | x86_64 | `rsclaw-*-x86_64-unknown-linux-musl.tar.gz` |
| CLI | Linux | ARM64 | `rsclaw-*-aarch64-unknown-linux-musl.tar.gz` |
| CLI | Windows | x86_64 | `rsclaw-*-x86_64-pc-windows-msvc.zip` |
| CLI | Windows | ARM64 | `rsclaw-*-aarch64-pc-windows-msvc.zip` |

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
