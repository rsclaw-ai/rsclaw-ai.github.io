---
layout: page
title: 下载螃蟹 AI
description: 下载螃蟹 AI（RsClaw）桌面应用或命令行工具
sidebar: false
---

<script setup>
import { ref, onMounted, computed } from 'vue'

const loading = ref(true)
const version = ref('')
const appVersion = ref('')
const allAssets = ref([])
const detectedOS = ref('')
const detectedArch = ref('')
const activeTab = ref('app')
const copiedIdx = ref(-1)

const APP_PLATFORMS = {
  'macos-aarch64': { os: 'macOS', arch: 'Apple Silicon', pattern: 'aarch64-apple-darwin.dmg', icon: '🍎' },
  'macos-x86_64': { os: 'macOS', arch: 'Intel', pattern: 'x86_64-apple-darwin.dmg', icon: '🍎' },
  'windows-x64': { os: 'Windows', arch: 'x86_64', pattern: 'x86_64-pc-windows-msvc.msi', icon: '🪟' },
  'windows-arm64': { os: 'Windows', arch: 'ARM64', pattern: 'aarch64-pc-windows-msvc.msi', icon: '🪟' },
  'linux-x64': { os: 'Linux', arch: 'x86_64', pattern: 'x86_64-unknown-linux-gnu.deb', icon: '🐧' },
  'linux-arm64': { os: 'Linux', arch: 'ARM64', pattern: 'aarch64-unknown-linux-gnu.deb', icon: '🐧' },
}

const CLI_PLATFORMS = {
  'aarch64-apple-darwin': { os: 'macOS', arch: 'Apple Silicon', icon: '🍎' },
  'x86_64-apple-darwin': { os: 'macOS', arch: 'Intel', icon: '🍎' },
  'x86_64-pc-windows-msvc': { os: 'Windows', arch: 'x86_64', icon: '🪟' },
  'aarch64-pc-windows-msvc': { os: 'Windows', arch: 'ARM64', icon: '🪟' },
  'x86_64-unknown-linux-gnu': { os: 'Linux', arch: 'x86_64', icon: '🐧' },
  'aarch64-unknown-linux-gnu': { os: 'Linux', arch: 'ARM64', icon: '🐧' },
}

const INSTALL_CMDS = [
  { label: 'macOS / Linux', lang: 'bash', cmd: 'GITHUB_PROXY=https://gitfast.run curl -fsSL https://app.rsclaw.ai/scripts/install.sh | bash' },
  { label: 'Windows', lang: 'powershell', cmd: '$env:GITHUB_PROXY="https://gitfast.run"; irm https://app.rsclaw.ai/scripts/install.ps1 | iex' },
]
const installTab = ref(0)

const appKey = ref('')
const cliKey = ref('')

const isMacDownload = computed(() => {
  if (detectedOS.value === 'macOS') return true
  return appKey.value?.startsWith('macos')
})
const isWinDownload = computed(() => {
  if (detectedOS.value === 'Windows') return true
  return appKey.value?.startsWith('windows')
})

function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase()
  const p = navigator.platform?.toLowerCase() || ''
  if (ua.includes('mac') || p.includes('mac')) {
    detectedOS.value = 'macOS'
    detectedArch.value = 'ARM64'
    appKey.value = 'macos-aarch64'
    cliKey.value = 'aarch64-apple-darwin'
    installTab.value = 0
  } else if (ua.includes('win')) {
    detectedOS.value = 'Windows'
    const isArm = ua.includes('arm') || ua.includes('aarch64')
    detectedArch.value = isArm ? 'ARM64' : 'x86_64'
    appKey.value = isArm ? 'windows-arm64' : 'windows-x64'  // matches APP_PLATFORMS key
    cliKey.value = isArm ? 'aarch64-pc-windows-msvc' : 'x86_64-pc-windows-msvc'
    installTab.value = 1
  } else if (ua.includes('linux')) {
    detectedOS.value = 'Linux'
    const isArm = ua.includes('aarch64') || ua.includes('arm64')
    detectedArch.value = isArm ? 'ARM64' : 'x86_64'
    appKey.value = isArm ? 'linux-arm64' : 'linux-x64'
    cliKey.value = isArm ? 'aarch64-unknown-linux-gnu' : 'x86_64-unknown-linux-gnu'
    installTab.value = 0
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
    appVersion.value = appRelease?.tag_name || ''
    const assets = [...(cliRelease?.assets || []), ...(appRelease?.assets || [])]
    allAssets.value = assets
  } catch {}
  loading.value = false
}

function findAsset(pattern) { return allAssets.value.find(a => a.name?.includes(pattern)) }
function assetUrl(pattern) { return findAsset(pattern)?.browser_download_url || 'https://github.com/rsclaw-ai/rsclaw/releases/latest' }
function assetSize(pattern) { const a = findAsset(pattern); if (!a?.size) return ''; return `${(a.size / 1024 / 1024).toFixed(1)} MB` }

function copyCmd(idx) {
  navigator.clipboard.writeText(INSTALL_CMDS[idx].cmd).then(() => {
    copiedIdx.value = idx
    setTimeout(() => { copiedIdx.value = -1 }, 2000)
  })
}

onMounted(() => { detectPlatform(); fetchRelease() })
</script>

<style>
.download-page {
  --accent: #f97316;
  --accent-dark: #ea580c;
  --accent-glow: rgba(249, 115, 22, 0.15);
  --dl-surface: var(--vp-c-bg-soft);
  --dl-surface-hover: var(--vp-c-bg-alt);
  --dl-border: var(--vp-c-divider);
  --dl-text-1: var(--vp-c-text-1);
  --dl-text-2: var(--vp-c-text-2);
  --dl-text-3: var(--vp-c-text-3);
}
.download-page .VPDoc { max-width: 100% !important; }
.download-page .vp-doc { max-width: 100% !important; }

.dl-hero {
  text-align: center;
  padding: 80px 24px 60px;
  position: relative;
  overflow: hidden;
}
.dl-hero::before {
  content: '';
  position: absolute;
  top: -120px; left: 50%; transform: translateX(-50%);
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%);
  pointer-events: none;
}
.dl-hero h1 {
  font-size: 48px !important;
  font-weight: 800 !important;
  letter-spacing: -1px;
  margin: 0 0 16px !important;
  padding: 8px 0 !important;
  border: none !important;
  line-height: 1.3 !important;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
.dl-hero .subtitle {
  font-size: 18px;
  color: var(--dl-text-2);
  margin-bottom: 12px;
  font-weight: 400;
}
.dl-hero .version-badge {
  display: inline-block;
  padding: 4px 14px;
  background: rgba(249,115,22,0.1);
  border: 1px solid rgba(249,115,22,0.25);
  border-radius: 20px;
  font-size: 13px;
  color: #f97316;
  font-family: monospace;
  margin-bottom: 40px;
}
.dl-hero .platform-detect {
  font-size: 13px;
  color: var(--dl-text-2);
  margin-bottom: 8px;
}
.dl-hero .platform-detect strong {
  color: var(--dl-text-1);
}

/* Tab switcher */
.dl-tabs {
  display: inline-flex;
  background: var(--dl-surface);
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 32px;
  border: 1px solid var(--dl-border);
}
.dl-tabs button {
  padding: 10px 28px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  background: transparent;
  color: var(--dl-text-2);
}
.dl-tabs button.active {
  background: #f97316;
  color: #fff;
  box-shadow: 0 2px 12px rgba(249,115,22,0.3);
}
.dl-tabs button:not(.active):hover {
  color: var(--dl-text-1);
}

/* Main download button */
.dl-main-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 48px;
  background: linear-gradient(135deg, #f97316, #ea580c);
  color: #fff !important;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none !important;
  box-shadow: 0 4px 24px rgba(249,115,22,0.35), 0 0 0 1px rgba(249,115,22,0.1);
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}
.dl-main-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(249,115,22,0.45), 0 0 0 1px rgba(249,115,22,0.2);
}
.dl-main-btn .btn-icon {
  font-size: 22px;
}
.dl-meta {
  margin-top: 12px;
  font-size: 12px;
  color: var(--dl-text-3);
  font-family: monospace;
}
.dl-meta-sub {
  margin-top: 6px;
  font-size: 13px;
  color: var(--dl-text-2);
}

/* Platform switch */
.dl-switch {
  margin-top: 20px;
  font-size: 13px;
  color: var(--dl-text-3);
}
.dl-switch a {
  color: #f97316 !important;
  text-decoration: none !important;
  cursor: pointer;
}
.dl-switch a:hover { text-decoration: underline !important; }

/* All platforms grid */
.dl-section {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
}
.dl-section-title {
  font-size: 24px !important;
  font-weight: 700 !important;
  text-align: center;
  margin: 60px 0 8px !important;
  padding: 0 !important;
  border: none !important;
  color: var(--dl-text-1);
}
.dl-section-subtitle {
  font-size: 16px;
  font-weight: 600;
  color: var(--dl-text-2);
  margin-bottom: 14px;
}
.dl-section-desc {
  text-align: center;
  color: var(--dl-text-2);
  font-size: 14px;
  margin-bottom: 28px;
}
.dl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
  margin: 0 0 16px;
}
.dl-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  background: var(--dl-surface);
  border: 1px solid var(--dl-border);
  border-radius: 12px;
  text-decoration: none !important;
  transition: all 0.2s;
  cursor: pointer;
}
.dl-card:hover {
  border-color: rgba(249,115,22,0.4);
  background: rgba(249,115,22,0.06);
  transform: translateY(-1px);
}
.dl-card.recommended {
  border-color: rgba(249,115,22,0.35);
  background: rgba(249,115,22,0.05);
}
.dl-card-icon {
  font-size: 28px;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dl-surface-hover);
  border-radius: 10px;
}
.dl-card-info { flex: 1; min-width: 0; }
.dl-card-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--dl-text-1);
  margin-bottom: 2px;
}
.dl-card-detail {
  font-size: 11px;
  color: var(--dl-text-3);
  font-family: monospace;
}

/* Install section */
.dl-install {
  max-width: 860px;
  margin: 48px auto 0;
  padding: 0 24px;
}
.dl-install-box {
  background: var(--dl-surface);
  border: 1px solid var(--dl-border);
  border-radius: 14px;
  padding: 28px 32px;
}
.dl-install-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--dl-text-1);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Install tabs */
.dl-install-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 0;
  border-bottom: 1px solid var(--dl-border);
}
.dl-install-tabs button {
  padding: 8px 20px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--dl-text-2);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.dl-install-tabs button.active {
  color: #f97316;
  border-bottom-color: #f97316;
}
.dl-install-tabs button:not(.active):hover {
  color: var(--dl-text-1);
}

/* Install code block */
.dl-code-wrap {
  position: relative;
  margin-top: 0;
}
.dl-code-block {
  background: var(--vp-code-block-bg, var(--dl-surface-hover));
  border-radius: 0 0 10px 10px;
  padding: 18px 52px 18px 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.dl-code-block pre {
  margin: 0 !important;
  padding: 0 !important;
  background: none !important;
  border: none !important;
}
.dl-code-block code {
  font-family: 'SF Mono', 'Fira Code', 'JetBrains Mono', Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  line-height: 1.6;
  color: var(--dl-text-1);
  background: none !important;
  white-space: pre-wrap;
  word-break: break-all;
}
.dl-copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dl-surface);
  border: 1px solid var(--dl-border);
  border-radius: 8px;
  cursor: pointer;
  color: var(--dl-text-2);
  font-size: 15px;
  transition: all 0.2s;
  z-index: 2;
}
.dl-copy-btn:hover {
  background: var(--dl-surface-hover);
  color: var(--dl-text-1);
}
.dl-copy-btn.copied {
  background: rgba(34,197,94,0.15);
  border-color: rgba(34,197,94,0.35);
  color: #16a34a;
}

/* Platform security tips */
.dl-tip {
  max-width: 860px;
  margin: 24px auto 0;
  padding: 0 24px;
}
.dl-tip-box {
  border-radius: 12px;
  padding: 20px 24px;
  font-size: 13px;
  line-height: 1.8;
}
.dl-tip-box code {
  background: var(--dl-surface-hover) !important;
  color: var(--dl-text-1);
  padding: 3px 8px;
  border-radius: 5px;
  font-size: 12px;
  display: inline-block;
  margin: 2px 0;
}

/* macOS tip */
.dl-tip-macos {
  background: rgba(249,115,22,0.06);
  border: 1px solid rgba(249,115,22,0.2);
  color: var(--dl-text-2);
}
.dl-tip-macos .dl-tip-label {
  color: #f97316;
  font-weight: 700;
}
.dl-tip-macos .dl-tip-step {
  display: block;
  margin-top: 8px;
  padding-left: 4px;
}
.dl-tip-macos .dl-tip-step-num {
  color: #f97316;
  font-weight: 600;
  margin-right: 4px;
}

/* Windows tip */
.dl-tip-win {
  background: rgba(59,130,246,0.07);
  border: 1px solid rgba(59,130,246,0.22);
  color: var(--dl-text-2);
}
.dl-tip-win .dl-tip-label {
  color: #3b82f6;
  font-weight: 700;
}
.dl-tip-win .dl-tip-detail {
  margin-top: 6px;
  color: var(--dl-text-2);
  font-size: 12px;
}
.dl-tip-win .dl-tip-detail strong {
  color: var(--dl-text-1);
}

/* Footer area */
.dl-footer {
  text-align: center;
  padding: 48px 24px 80px;
  color: var(--dl-text-3);
  font-size: 13px;
}
.dl-footer a {
  color: #f97316 !important;
  text-decoration: none !important;
}

/* Loading */
.dl-loading {
  text-align: center;
  padding: 120px 24px;
  color: var(--dl-text-2);
  font-size: 15px;
}
.dl-loading-spinner {
  display: inline-block;
  width: 32px; height: 32px;
  border: 3px solid rgba(249,115,22,0.15);
  border-top-color: #f97316;
  border-radius: 50%;
  animation: dl-spin 0.8s linear infinite;
  margin-bottom: 16px;
}
@keyframes dl-spin { to { transform: rotate(360deg) } }

@media (max-width: 640px) {
  .dl-hero { padding: 48px 16px 40px; }
  .dl-hero h1 { font-size: 32px !important; }
  .dl-main-btn { padding: 16px 32px; font-size: 16px; }
  .dl-grid { grid-template-columns: 1fr; }
}
</style>

<div class="download-page">

<!-- Loading -->
<div v-if="loading" class="dl-loading">
  <div class="dl-loading-spinner"></div>
  <div>正在获取最新版本...</div>
</div>

<!-- Hero -->
<div v-if="!loading" class="dl-hero">
  <h1>下载螃蟹 AI</h1>
  <div class="subtitle">拥有长期记忆与自我学习能力的 AI 智能体引擎，兼容 OpenClaw 一键迁移</div>
  <div v-if="version" class="version-badge">{{ version }}</div>

  <!-- Tab switcher -->
  <div style="display:block">
    <div class="dl-tabs">
      <button :class="{ active: activeTab === 'app' }" @click="activeTab = 'app'">桌面应用</button>
      <button :class="{ active: activeTab === 'cli' }" @click="activeTab = 'cli'">命令行 CLI</button>
    </div>
  </div>

  <!-- Platform detect -->
  <div v-if="detectedOS" class="platform-detect">
    已检测到你的系统: <strong>{{ detectedOS }} {{ detectedArch }}</strong>
  </div>

  <!-- Main download button -->
  <div v-if="activeTab === 'app' && appKey" style="margin-top: 16px">
    <a :href="assetUrl(APP_PLATFORMS[appKey]?.pattern)" class="dl-main-btn">
      <span class="btn-icon">↓</span>
      下载 {{ detectedOS }} 桌面版
    </a>
    <div class="dl-meta">{{ APP_PLATFORMS[appKey]?.pattern }} · {{ assetSize(APP_PLATFORMS[appKey]?.pattern) }}</div>
    <div class="dl-meta-sub">包含 GUI 图形界面 + CLI 命令行</div>
  </div>

  <div v-if="activeTab === 'cli' && cliKey" style="margin-top: 16px">
    <a :href="assetUrl(cliKey)" class="dl-main-btn">
      <span class="btn-icon">↓</span>
      下载 {{ detectedOS }} CLI
    </a>
    <div class="dl-meta">rsclaw-{{ version }}-{{ cliKey }} · {{ assetSize(cliKey) }}</div>
  </div>

  <!-- Switch / other platforms -->
  <div class="dl-switch">
    <a href="#all-downloads">查看所有平台</a>
    <span v-if="detectedOS === 'macOS'">
      &nbsp;·&nbsp;
      <a v-if="appKey === 'macos-aarch64'" @click.prevent="appKey = 'macos-x86_64'; cliKey = 'x86_64-apple-darwin'">切换到 Intel 版本</a>
      <a v-else @click.prevent="appKey = 'macos-aarch64'; cliKey = 'aarch64-apple-darwin'">切换到 Apple Silicon 版本</a>
    </span>
  </div>
</div>

<!-- macOS Security Tip (dynamic) -->
<div v-if="!loading && isMacDownload" class="dl-tip">
  <div class="dl-tip-box dl-tip-macos">
    <span class="dl-tip-label">macOS 安装提示</span> — 首次打开桌面版可能提示"已损坏"，这是因为应用未经 Apple 签名。请在终端依次执行：
    <span class="dl-tip-step">
      <span class="dl-tip-step-num">1.</span> 允许任何来源应用：<code>sudo spctl --master-disable</code>
    </span>
    <span class="dl-tip-step">
      <span class="dl-tip-step-num">2.</span> 移除隔离属性：<code>sudo xattr -rd com.apple.quarantine /Applications/RsClaw.app</code>
    </span>
  </div>
</div>

<!-- Windows Security Tip (dynamic) -->
<div v-if="!loading && isWinDownload" class="dl-tip">
  <div class="dl-tip-box dl-tip-win">
    <span class="dl-tip-label">Windows 安装提示</span> — 安装时 Windows Defender SmartScreen 可能弹出"Windows 已保护你的电脑"蓝色警告，提示发布者未知。这是因为安装包尚未购买代码签名证书，软件本身是安全的。
    <div class="dl-tip-detail">
      点击 <strong>"更多信息"</strong> → <strong>"仍要运行"</strong> 即可正常安装。
    </div>
  </div>
</div>

<!-- Quick Install CLI -->
<div v-if="!loading" class="dl-install">
  <div class="dl-install-box">
    <div class="dl-install-title">⚡ 一键安装 CLI</div>
    <div class="dl-install-tabs">
      <button v-for="(item, idx) in INSTALL_CMDS" :key="idx"
        :class="{ active: installTab === idx }"
        @click="installTab = idx">{{ item.label }}</button>
    </div>
    <div class="dl-code-wrap">
      <button class="dl-copy-btn" :class="{ copied: copiedIdx === installTab }"
        @click="copyCmd(installTab)"
        :title="copiedIdx === installTab ? '已复制' : '复制'">
        <span v-if="copiedIdx === installTab">&#10003;</span>
        <span v-else>&#128203;</span>
      </button>
      <div class="dl-code-block">
        <pre><code>{{ INSTALL_CMDS[installTab].cmd }}</code></pre>
      </div>
    </div>
  </div>
</div>

<!-- All Downloads -->
<div v-if="!loading" class="dl-section" id="all-downloads">
  <h2 class="dl-section-title">所有下载</h2>
  <p class="dl-section-desc">选择适合你平台的版本</p>

  <h3 class="dl-section-subtitle">桌面应用 (GUI + CLI)</h3>
  <div class="dl-grid">
    <a v-for="(info, key) in APP_PLATFORMS" :key="key" :href="assetUrl(info.pattern)"
      class="dl-card" :class="{ recommended: key === appKey }">
      <div class="dl-card-icon">{{ info.icon }}</div>
      <div class="dl-card-info">
        <div class="dl-card-title">{{ info.os }} {{ info.arch }}</div>
        <div class="dl-card-detail">{{ info.pattern }} · {{ assetSize(info.pattern) }}</div>
      </div>
    </a>
  </div>

  <h3 class="dl-section-subtitle" style="margin-top:28px">命令行 CLI</h3>
  <div class="dl-grid">
    <a v-for="(info, target) in CLI_PLATFORMS" :key="target" :href="assetUrl(target)"
      class="dl-card" :class="{ recommended: target === cliKey }">
      <div class="dl-card-icon">{{ info.icon }}</div>
      <div class="dl-card-info">
        <div class="dl-card-title">{{ info.os }} {{ info.arch }}</div>
        <div class="dl-card-detail">{{ version }} · {{ assetSize(target) }}</div>
      </div>
    </a>
  </div>
</div>

<!-- Build from source -->
<div v-if="!loading" class="dl-install" style="margin-top:28px">
  <div class="dl-install-box">
    <div class="dl-install-title">🔨 从源码编译</div>
    <div class="dl-code-block" style="border-radius:10px;margin-top:12px">
      <pre><code># 需要 Rust 1.91+
git clone https://gitfast.run/https://github.com/rsclaw-ai/rsclaw.git
cd rsclaw
cargo build --release</code></pre>
    </div>
  </div>
</div>

<!-- Footer -->
<div v-if="!loading" class="dl-footer">
  每个 Release 附带 SHA256 校验文件 ·
  <a href="https://github.com/rsclaw-ai/rsclaw/releases" target="_blank">GitHub Releases</a>
</div>

</div>
