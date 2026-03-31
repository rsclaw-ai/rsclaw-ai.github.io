# 安全机制

RsClaw 提供多层安全防护。

## 执行安全规则

可配置的 deny/confirm/allow 模式。启用方式：

```json5
{
  tools: {
    exec: { safety: true },
  },
}
```

### 拒绝模式（50+）

被阻止的命令包括：
- `sudo`、`su`、`rm -rf /`、`dd`、`mkfs`、`shutdown`、`reboot`
- `curl | sh`、`wget | sh`（管道到 shell）
- 读写 `.ssh/`、`.env`、`.aws/`、`.kube/`、`.gcloud/`
- 访问 `openclaw.json`、`rsclaw.json5`、shell 历史
- `drop database`、`truncate table`

### 确认模式

需要用户确认：
- `rm -rf`、`git push --force`、`git reset --hard`
- `docker rm`、`docker rmi`、`kubectl delete`

### 允许覆盖

白名单指定命令以覆盖拒绝规则。

## 读取保护

阻止访问敏感文件：
- SSH 密钥（`~/.ssh/`）
- GPG 密钥（`~/.gnupg/`）
- 云凭证（`.aws/`、`.kube/`、`.gcloud/`）
- AI 工具配置（`.claude/`、`.opencode/`）
- Shell 历史（`.bash_history`、`.zsh_history`）
- 数据库密码

## 写入沙箱

- 工作区路径隔离
- 脚本内容危险模式扫描
- 阻止写入系统路径

## 文件上传门控

两层确认：
1. **体积门**：文件 > 50MB 触发确认
2. **Token 门**：提取文本 > 50,000 字符触发消耗确认

通过 `/set_upload_size` 和 `/set_upload_chars` 配置。

## 每智能体权限

- 主智能体：`*`（所有命令）
- 子智能体：按配置限制

## 安全审计

```bash
# 运行安全审计
rsclaw security audit

# 自动修复
rsclaw security audit --fix

# 深度扫描
rsclaw security audit --fix --deep
```

## 自定义

编辑 `$base_dir/` 下的 `defaults.toml` 来自定义：
- 拒绝模式
- 确认模式
- 允许覆盖
