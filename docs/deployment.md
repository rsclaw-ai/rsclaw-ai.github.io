---
description: 官网发布上线流程
---

# 官网发布上线流程

本文档记录 rsclaw.ai 官网的完整发布流程，每次更新文档后按此流程执行。

---

## 前置信息

| 项目 | 值 |
|------|-----|
| 官网源码路径 | `~/git/rsclaw-ai.github.io` |
| 构建工具 | VitePress |
| 生产服务器 | ai-fast（端口 12222）、ai-new（端口 22） |
| 同步脚本 | `~/git/sync_rsclaw_ai.sh` |
| 生产环境地址 | https://rsclaw.ai |
| 本地预览地址 | http://localhost:5173 |

---

## 发布流程（4 步）

### 第 1 步：构建检查

确保本地构建无报错，并在浏览器中检查显示是否正常。

```bash
# 进入官网目录
cd ~/git/rsclaw-ai.github.io

# 构建检查（确保无报错）
npx vitepress build

# 启动本地预览服务器（后台运行）
npx vitepress dev &
```

**检查清单：**
- [ ] `vitepress build` 无报错（0 errors）
- [ ] 打开 http://localhost:5173 检查首页是否正常
- [ ] 检查中文文档侧边栏是否完整（含高级功能/帮助分组）
- [ ] 检查英文文档侧边栏是否完整
- [ ] 随机抽查 2-3 篇文档页面是否正常渲染
- [ ] 检查配置示例格式是否为 JSON5

### 第 2 步：Commit & Push

确认无误后，提交代码并推送到 GitHub。

```bash
cd ~/git/rsclaw-ai.github.io

# 查看改动
git status
git diff

# 提交
git add .
git commit -m "docs: 更新描述"

# 推送
git push origin main
```

**检查清单：**
- [ ] `git status` 确认所有改动已暂存
- [ ] commit message 清晰描述本次更新内容
- [ ] `git push` 成功（无报错）

### 第 3 步：同步到生产服务器

执行同步脚本，将编译后的官网文件推送到两台生产服务器。

```bash
# 执行同步脚本
~/git/sync_rsclaw_ai.sh
```

**检查清单：**
- [ ] ai-fast 服务器同步成功（224+ 文件传输完成）
- [ ] ai-new 服务器同步成功（224+ 文件传输完成）
- [ ] 同步脚本无报错

### 第 4 步：生产环境确认

访问生产环境，确认改动已正确应用。

**检查清单：**
- [ ] https://rsclaw.ai 首页正常加载（HTTP 200）
- [ ] https://rsclaw.ai/docs/getting-started 中文文档正常
- [ ] https://rsclaw.ai/en/docs/getting-started 英文文档正常
- [ ] 本次更新的文档内容已生效
- [ ] 侧边栏分组完整（高级功能/帮助）
- [ ] 中英文文档对应一致

---

## 常见问题

### SSH Key 未加载

如果 push 时报错 `Could not open a connection to your authentication agent`：

```bash
ssh-add ~/.ssh/id_ed25519
```

### Host Key 验证失败

首次连接 GitHub 时可能需要接受 Host Key：

```bash
ssh -T git@github.com
```

### 构建报错

如果 `vitepress build` 报错，检查：
1. 侧边栏配置括号/大括号是否平衡
2. Markdown 文件是否有语法错误
3. 引用的文件路径是否正确

---

## 注意事项

1. **先检查再发布**：务必在本地确认所有页面正常后再 push
2. **commit message 规范**：使用 `docs: 描述` 格式
3. **同步后必验**：每次同步后必须访问生产环境确认
4. **中英文同步**：更新中文文档时，同步更新英文版本
5. **配置示例格式**：所有配置示例使用 JSON5 格式，以 `~/git/rsclaw/examples/default.rsclaw.json5` 为准
