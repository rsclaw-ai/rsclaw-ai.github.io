# CLI 命令参考

## 全局选项

```
rsclaw [选项] <命令>

选项：
  --config-path <FILE>    配置文件路径
  --base-dir <DIR>        数据基础目录
  --dev                   开发模式（~/.rsclaw-dev，端口 18889）
  --profile <NAME>        命名配置（~/.rsclaw-<name>）
  --version               显示版本
  --help                  显示帮助
```

## 命令列表

| 命令 | 说明 |
|------|------|
| `gateway` | 启动、停止、重启网关 |
| `setup` | 首次设置（检测 OpenClaw） |
| `onboard` | 交互式设置向导 |
| `configure` | 分区配置菜单 |
| `doctor` | 健康检查与自动修复 |
| `status` | 查看网关状态 |
| `channels` | 管理消息通道 |
| `cron` | 管理定时任务 |
| `security` | 安全审计 |
| `update` | 从 GitHub 自动更新 |
| `backup` | 备份配置和数据 |
| `restore` | 从备份恢复 |
| `reset` | 重置为默认 |
| `sessions` | 管理会话 |
| `logs` | 查看网关日志 |
| `skills` | 安装/管理技能 |
