# 下载

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const version = ref('')
const allAssets = ref([])
const detectedOS = ref('')
const detectedArch = ref('')
const activeTab = ref('app')

const APP_PLATFORMS = {
  'macos-aarch64': { os: 'macOS', arch: 'ARM64 (Apple Silicon)', pattern: 'aarch64-apple-darwin.dmg' },
  'macos-x86_64': { os: 'macOS', arch: 'x86_64 (Intel)', pattern: 'x86_64-apple-darwin.dmg' },
  'windows-x64': { os: 'Windows', arch: 'x86_64', pattern: 'x86_64-pc-windows-msvc.msi' },
  'linux-x64': { os: 'Linux', arch: 'x86_64', pattern: 'x86_64-unknown-linux-gnu.deb' },
}

const CLI_PLATFORMS = {
  'aarch64-apple-darwin': { os: 'macOS', arch: 'ARM64 (Apple Silicon)' },
  'x86_64-apple-darwin': { os: 'macOS', arch: 'x86_64 (Intel)' },
  'x86_64-pc-windows-msvc': { os: 'Windows', arch: 'x86_64' },
  'aarch64-pc-windows-msvc': { os: 'Windows', arch: 'ARM64' },
  'x86_64-unknown-linux-gnu': { os: 'Linux', arch: 'x86_64' },
  'aarch64-unknown-linux-gnu': { os: 'Linux', arch: 'ARM64' },
}

const appKey = ref('')
const cliKey = ref('')

function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase()
  const p = navigator.platform?.toLowerCase() || ''
  if (ua.includes('mac') || p.includes('mac')) {
    detectedOS.value = 'macOS'
    detectedArch.value = 'ARM64'
    appKey.value = 'macos-aarch64'
    cliKey.value = 'aarch64-apple-darwin'
  } else if (ua.includes('win')) {
    detectedOS.value = 'Windows'
    const isArm = ua.includes('arm') || ua.includes('aarch64')
    detectedArch.value = isArm ? 'ARM64' : 'x86_64'
    appKey.value = isArm ? 'windows-arm64' : 'windows-x64'
    cliKey.value = isArm ? 'aarch64-pc-windows-msvc' : 'x86_64-pc-windows-msvc'
  } else if (ua.includes('linux')) {
    detectedOS.value = 'Linux'
    const isArm = ua.includes('aarch64') || ua.includes('arm64')
    detectedArch.value = isArm ? 'ARM64' : 'x86_64'
    appKey.value = isArm ? 'linux-arm64' : 'linux-x64'
    cliKey.value = isArm ? 'aarch64-unknown-linux-gnu' : 'x86_64-unknown-linux-gnu'
  }
}

async function fetchRelease() {
  try {
    const resp = await fetch('https://app.rsclaw.ai/api/version')
    const releases = await resp.json()
    const list = Array.isArray(releases) ? releases : [releases]
    const cliRelease = list.find(r => r.tag_name?.startsWith('v') && !r.tag_name?.startsWith('app-'))
    const appRelease = list.find(r => r.tag_name?.startsWith('app-v'))
    version.value = cliRelease?.tag_name || appRelease?.tag_name || ''
    const assets = [...(cliRelease?.assets || []), ...(appRelease?.assets || [])]
    allAssets.value = assets
  } catch {}
  loading.value = false
}

function findAsset(pattern) { return allAssets.value.find(a => a.name?.includes(pattern)) }
function assetUrl(pattern) { return findAsset(pattern)?.browser_download_url || 'https://github.com/rsclaw-ai/rsclaw/releases/latest' }
function assetSize(pattern) { const a = findAsset(pattern); if (!a?.size) return ''; return `${(a.size / 1024 / 1024).toFixed(1)} MB` }

onMounted(() => { detectPlatform(); fetchRelease() })
</script>

<div v-if="loading" style="text-align:center;padding:40px;color:#888">加载中...</div>

<div v-if="!loading" style="background:linear-gradient(135deg,#1a1c22,#141618);border:1px solid rgba(249,115,22,0.15);border-radius:16px;padding:32px;margin:20px 0;text-align:center">
  <div style="font-size:12px;color:#4a4858;margin-bottom:6px;letter-spacing:1px">检测到: {{ detectedOS }} {{ detectedArch }}</div>
  <div style="font-size:11px;color:#2e2c3a;margin-bottom:20px;font-family:monospace">{{ version }}</div>

  <div style="display:inline-flex;background:#0f1013;border-radius:8px;padding:3px;margin-bottom:20px;border:1px solid rgba(255,255,255,0.05)">
    <button @click="activeTab='app'" :style="{padding:'7px 20px',borderRadius:'6px',border:'none',fontSize:'12px',fontWeight:600,cursor:'pointer',background:activeTab==='app'?'#f97316':'transparent',color:activeTab==='app'?'#fff':'#4a4858'}">
      桌面应用
    </button>
    <button @click="activeTab='cli'" :style="{padding:'7px 20px',borderRadius:'6px',border:'none',fontSize:'12px',fontWeight:600,cursor:'pointer',background:activeTab==='cli'?'#f97316':'transparent',color:activeTab==='cli'?'#fff':'#4a4858'}">
      命令行 (CLI)
    </button>
  </div>

  <div v-if="activeTab==='app' && appKey">
    <a :href="assetUrl(APP_PLATFORMS[appKey]?.pattern)" style="display:inline-block;padding:14px 40px;background:#f97316;color:#fff;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 14px rgba(249,115,22,0.3)">
      下载 {{ detectedOS }} 桌面版
    </a>
    <div style="margin-top:8px;font-size:10px;color:#2e2c3a;font-family:monospace">{{ APP_PLATFORMS[appKey]?.pattern }} &middot; {{ assetSize(APP_PLATFORMS[appKey]?.pattern) }}</div>
    <div style="margin-top:4px;font-size:11px;color:#4a4858">含 GUI 图形界面 + CLI 命令行</div>
  </div>

  <div v-if="activeTab==='cli' && cliKey">
    <a :href="assetUrl(cliKey)" style="display:inline-block;padding:14px 40px;background:#f97316;color:#fff;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;box-shadow:0 4px 14px rgba(249,115,22,0.3)">
      下载 {{ detectedOS }} CLI
    </a>
    <div style="margin-top:8px;font-size:10px;color:#2e2c3a;font-family:monospace">rsclaw-{{ version }}-{{ cliKey }} &middot; {{ assetSize(cliKey) }}</div>
  </div>

  <div style="margin-top:14px;font-size:11px;color:#4a4858">
    不是你的平台？<a href="#all-downloads" style="color:#f97316">查看所有下载</a>
    &nbsp;&middot;&nbsp;
    <span v-if="detectedOS==='macOS'">
      <a v-if="appKey==='macos-aarch64'" @click.prevent="appKey='macos-x86_64';cliKey='x86_64-apple-darwin'" href="#" style="color:#f97316">切换到 Intel 版本</a>
      <a v-else @click.prevent="appKey='macos-aarch64';cliKey='aarch64-apple-darwin'" href="#" style="color:#f97316">切换到 Apple Silicon 版本</a>
    </span>
  </div>
</div>

::: tip macOS 用户提示
首次打开桌面版可能提示"已损坏"，这是因为应用未经 Apple 签名。请在终端执行：
```bash
xattr -cr /Applications/RsClaw.app
```
或右键点击应用选择"打开"。
:::

## 快速安装 (CLI)

::: code-group

```bash [macOS / Linux]
GITHUB_PROXY=https://gitfast.run \
  curl -fsSL https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.sh | bash
```

```powershell [Windows]
$env:GITHUB_PROXY="https://gitfast.run"; irm https://gitfast.run/https://raw.githubusercontent.com/rsclaw-ai/rsclaw/main/scripts/install.ps1 | iex
```

:::

## 所有下载 {#all-downloads}

### 桌面应用 (GUI + CLI)

<div v-if="!loading && version" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0">
  <a v-for="(info, key) in APP_PLATFORMS" :key="key" :href="assetUrl(info.pattern)"
    style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#141618;border:1px solid rgba(255,255,255,0.055);border-radius:10px;text-decoration:none;transition:border-color 0.12s"
    :style="{ borderColor: key === appKey ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.055)' }">
    <div>
      <div style="font-size:13px;font-weight:600;color:#eceaf4">{{ info.os }} {{ info.arch }}</div>
      <div style="font-size:10px;color:#4a4858;font-family:monospace;margin-top:2px">{{ info.pattern }} &middot; {{ assetSize(info.pattern) }}</div>
    </div>
  </a>
</div>

### CLI 命令行

<div v-if="!loading && version" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0">
  <a v-for="(info, target) in CLI_PLATFORMS" :key="target" :href="assetUrl(target)"
    style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#141618;border:1px solid rgba(255,255,255,0.055);border-radius:10px;text-decoration:none;transition:border-color 0.12s"
    :style="{ borderColor: target === cliKey ? 'rgba(249,115,22,0.3)' : 'rgba(255,255,255,0.055)' }">
    <div>
      <div style="font-size:13px;font-weight:600;color:#eceaf4">{{ info.os }} {{ info.arch }}</div>
      <div style="font-size:10px;color:#4a4858;font-family:monospace;margin-top:2px">{{ version }} &middot; {{ assetSize(target) }}</div>
    </div>
  </a>
</div>

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
