# Skills 系统

Skills 是 RsClaw 的可复用技能模块，智能体可以自动加载和调用，无需每次都重新学习。

## 技能目录结构

```
skills/<slug>/
├── SKILL.md          ← 必需：技能描述和触发条件
├── scripts/          ← 可选：可复用脚本
└── references/       ← 可选：参考资料
```

## SKILL.md 格式

```markdown
---
name: my-skill
description: 技能描述，包含触发条件。当用户需要XXX时自动调用。
---

## 使用说明
1. 第一步操作
2. 第二步操作

## 输入输出示例
输入: 用户请求
输出: 处理结果
```

## 技能管理

```bash
# 列出已安装技能
rsclaw skills list

# 搜索技能市场
rsclaw skills search "数据分析"

# 安装技能
rsclaw skills install <name>

# 查看技能详情
rsclaw skills info <name>
```

## 内置技能

RsClaw 内置以下技能：

- **hackernews** — Hacker News 热帖查询
- **bilibili** — B站热门内容
- **arxiv** — 学术论文搜索
- **wikipedia** — 维基百科查询
- **github-trending** — GitHub 热门项目

## 创建自定义技能

```bash
# 创建技能目录
mkdir -p ~/.rsclaw/skills/my-skill

# 编写 SKILL.md
cat > ~/.rsclaw/skills/my-skill/SKILL.md << 'EOF'
---
name: my-custom-skill
description: 我的自定义技能，当用户需要XXX时自动调用。
---

## 使用说明
具体操作步骤...
EOF
```

::: tip 提示
技能会在智能体处理请求时自动匹配加载，无需手动触发。
:::

## 技能自动学习

- 频繁使用的技能自动提升优先级
- 相关技能自动聚类，形成复合能力
- 低效技能自动标记，建议优化

## 下一步

- [插件管理](/docs/plugins) — 扩展功能
- [智能体管理](/docs/agents) — 配置智能体
