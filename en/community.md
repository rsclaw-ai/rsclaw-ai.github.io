---
layout: page
title: Community
sidebar: false
---

# 🦀 RsClaw Community

Join the RsClaw community to share tips, get help, and stay up to date.

<div class="qr-grid">
  <div class="qr-card">
    <img src="/qr-wechat.jpg" alt="WeChat" />
    <div class="qr-label">WeChat</div>
  </div>
  <div class="qr-card">
    <img src="/qr-feishu.jpg" alt="Feishu" />
    <div class="qr-label">Feishu</div>
  </div>
  <div class="qr-card">
    <img src="/qr-qq.jpg" alt="QQ" />
    <div class="qr-label">QQ</div>
  </div>
  <div class="qr-card">
    <img src="/qr-telegram.jpg" alt="Telegram" />
    <div class="qr-label">Telegram</div>
  </div>
</div>

> If QR codes have expired, join directly 👉 Feishu: [Join Group](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=c55pb98d-6ac1-4421-88f0-53bc198c1c13) ｜ Telegram: [t.me/rsclaw](https://t.me/rsclaw)

<style>
.qr-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 32px 0;
}
.qr-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  transition: box-shadow 0.2s;
}
.qr-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.qr-card img {
  width: 100%;
  max-width: 220px;
  aspect-ratio: 1;
  border-radius: 8px;
  background: #fff;
  padding: 6px;
  object-fit: cover;
}
.qr-label {
  margin-top: 12px;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
@media (max-width: 768px) {
  .qr-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
@media (max-width: 480px) {
  .qr-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
