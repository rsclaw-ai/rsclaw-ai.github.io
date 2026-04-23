# 常见问题 FAQ

## 安装与启动

### RsClaw 支持哪些操作系统？

RsClaw 支持 macOS、Linux 和 Windows。Windows 需要 PowerShell 7+。

### 如何升级 RsClaw？

```bash
rsclaw update
```

### 如何卸载 RsClaw？

```bash
# 停止 Gateway
rsclaw gateway stop

# 运行卸载脚本
rsclaw uninstall
```

## 模型配置

### 支持哪些模型提供商？

RsClaw 兼容所有 OpenAI API 格式的提供商，包括：
- OpenAI (GPT-4o, o1 等)
- Anthropic (Claude 系列)
- 通义千问 (Qwen 系列)
- DeepSeek
- Ollama (本地模型)
- 以及其他 OpenAI 兼容 API

### 如何配置本地模型？

```json5
models: {
  providers: {
    ollama: {
      baseUrl: "http://localhost:11434/v1",
      apiKey: "ollama",
    }
  }
}
```

## 渠道接入

### 支持哪些消息渠道？

Telegram、Discord、Slack、微信、飞书、QQ、钉钉、WhatsApp 等。

### 一个智能体能绑定多个渠道吗？

可以。RsClaw 支持一个智能体同时服务多个渠道，配置比 OpenClaw 更简洁。

## 智能体协作

### 什么是 A2A 协议？

A2A (Agent-to-Agent) 是 RsClaw 的跨机智能体协作协议，允许不同机器上的智能体互相通信和协作。

### 如何创建子智能体？

```bash
rsclaw agents create <name>
```

或通过对话让主智能体自动创建：
> "帮我创建一个负责内容运营的智能体"

## 记忆系统

### 记忆数据存在哪里？

完全本地化存储，位于 `~/.rsclaw/memory.db`，不会上传到任何远程服务器。

### 记忆会过期吗？

低重要性的记忆会随时间自动降低权重，但不会自动删除。你可以手动管理记忆。

## 性能问题

### RsClaw 占用多少内存？

- Gateway 基础占用：约 50-100MB
- 每个智能体：约 20-50MB
- Chrome 浏览器自动化：根据系统内存自动限制实例数

### 如何优化性能？

1. 减少并发智能体数量
2. 使用较小的模型处理简单任务
3. 定期清理不需要的记忆

## 其他

### 如何从 OpenClaw 迁移？

```bash
rsclaw migrate
```

自动迁移配置、智能体、记忆、技能和会话历史。

### RsClaw 是开源的吗？

是的，代码托管在 GitHub：https://github.com/rsclaw-ai/rsclaw

### 如何获取帮助？

- [文档](/docs/getting-started)
- [故障排查](/docs/troubleshooting)
- [GitHub Issues](https://github.com/rsclaw-ai/rsclaw/issues)
- [社区交流](/community)
