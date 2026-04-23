# 故障排查

## 诊断流程

```bash
# 运行全面诊断
rsclaw doctor

# 查看系统状态
rsclaw status

# 查看日志
rsclaw logs
```

## 常见问题

### Gateway 无法启动

**症状：** `rsclaw gateway start` 报错

**排查步骤：**
1. 检查端口 18888 是否被占用
   ```bash
   lsof -i :18888
   ```
2. 检查配置文件语法
   ```bash
   rsclaw configure --validate
   ```
3. 查看错误日志
   ```bash
   rsclaw logs --tail 50
   ```

### 模型调用失败

**症状：** 智能体回复 "provider rate limited or API key invalid"

**排查步骤：**
1. 检查 API Key 是否正确
   ```bash
   rsclaw configure --section models
   ```
2. 检查 API 配额是否耗尽
3. 检查网络连接
   ```bash
   curl -s https://api.openai.com/v1/models | head -20
   ```
4. 修改配置后记得重启 Gateway
   ```bash
   rsclaw gateway restart
   ```

### 渠道连接失败

**症状：** 微信/Telegram/飞书等渠道无法连接

**排查步骤：**
1. 检查渠道配置
   ```bash
   rsclaw configure --section channels
   ```
2. 重新登录
   ```bash
   rsclaw channels login <channel>
   ```
3. 检查渠道权限设置

### 记忆系统异常

**症状：** 智能体不记得之前的对话

**排查步骤：**
1. 检查记忆数据库是否存在
   ```bash
   ls -la ~/.rsclaw/memory.db
   ```
2. 检查记忆配置
   ```bash
   rsclaw memory status
   ```
3. 重建记忆索引
   ```bash
   rsclaw memory rebuild
   ```

### Skills 不生效

**症状：** 安装的技能没有自动触发

**排查步骤：**
1. 确认技能已正确安装
   ```bash
   rsclaw skills list
   ```
2. 检查 SKILL.md 格式是否正确
3. 检查技能描述是否包含触发关键词
4. 重启智能体使新技能生效

## 日志位置

| 系统 | 日志路径 |
|------|----------|
| Gateway | `~/.rsclaw/logs/gateway.log` |
| 智能体 | `~/.rsclaw/logs/agents/` |
| 渠道 | `~/.rsclaw/logs/channels/` |

## 获取帮助

- [常见问题 FAQ](/docs/faq)
- [GitHub Issues](https://github.com/rsclaw-ai/rsclaw/issues)
- [社区交流](/community)
