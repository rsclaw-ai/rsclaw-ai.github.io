# 桌面自动化（computer_use）

RsClaw 内置桌面控制能力，智能体可以直接截图、操控鼠标、输入键盘、管理窗口——无需浏览器，原生操控你的桌面。

::: tip 适用场景
- 自动化 GUI 应用操作（微信、Finder、Safari、系统设置等）
- 视觉验证（"窗口出现了吗？""按钮在吗？"）
- 桌面工作流自动化（截图 → 识别 → 点击 → 输入）
- 任何需要与桌面交互的任务
:::

## 支持的操作

### 截图

```json
{ "action": "screenshot" }
```

捕获当前屏幕并返回图片。自动处理 HiDPI 缩放，返回缩放后的 JPEG 以节省 token。

**返回：** 图片 base64 + 分辨率 + 缩放比例

---

### 鼠标移动

```json
{ "action": "mouse_move", "x": 100, "y": 200 }
```

将鼠标光标移动到指定坐标。

---

### 鼠标点击

| 操作 | 参数 | 说明 |
|------|------|------|
| `mouse_click` / `left_click` | `x`, `y`, `button` | 单击，默认左键 |
| `right_click` | `x`, `y` | 右键点击 |
| `middle_click` | `x`, `y` | 中键点击 |
| `double_click` | `x`, `y` | 双击 |
| `triple_click` | `x`, `y` | 三击（通常选中整行文本） |

```json
{ "action": "left_click", "x": 300, "y": 400 }
{ "action": "right_click", "x": 300, "y": 400 }
{ "action": "double_click", "x": 300, "y": 400 }
```

`button` 可选值：`left`（默认）、`right`、`middle`

---

### 拖拽

```json
{ "action": "drag", "x": 100, "y": 100, "to_x": 300, "to_y": 400 }
```

从 `(x, y)` 拖拽到 `(to_x, to_y)`。适用于文件拖放、滑块调整等场景。

---

### 键盘输入

#### 输入文本

```json
{ "action": "type", "text": "Hello World" }
```

模拟键盘逐字输入。自动处理特殊字符（`{`, `}`, `+`, `^`, `%`, `~` 等）。

#### 按键

```json
{ "action": "key", "key": "Enter" }
```

模拟单个按键或组合键：

| 按键 | 示例 |
|------|------|
| 功能键 | `Enter`, `Tab`, `Escape`, `Backspace`, `Delete` |
| 方向键 | `Up`, `Down`, `Left`, `Right` |
| 组合键 | `ctrl+c`, `cmd+v`, `ctrl+shift+s` |
| 导航键 | `Home`, `End`, `PageUp`, `PageDown` |

---

### 长按按键

```json
{ "action": "hold_key", "key": "ctrl", "then": "click" }
```

按住一个键，然后执行操作。常用于快捷键组合：

```json
// 按住 Ctrl 后单击（多选）
{ "action": "hold_key", "key": "ctrl", "then": "click", "x": 200, "y": 300 }

// 按住 Ctrl 后双击
{ "action": "hold_key", "key": "ctrl", "then": "double_click", "x": 200, "y": 300 }
```

`then` 可选值：`click`（默认）、`double_click`、`triple_click`、`right_click`

---

### 滚动

```json
{ "action": "scroll", "direction": "down", "amount": 500 }
```

模拟鼠标滚轮。

| direction | 说明 |
|-----------|------|
| `up` | 向上滚动 |
| `down` | 向下滚动（默认） |
| `left` | 向左滚动 |
| `right` | 向右滚动 |

`amount`：滚动距离（默认 3，最大 1000）

---

### 获取光标位置

```json
{ "action": "cursor_position" }
```

返回当前鼠标光标的 `(x, y)` 坐标。

---

### 获取当前活动窗口

```json
{ "action": "get_active_window" }
```

返回当前前台窗口的标题、应用名称和窗口信息。

---

### 等待

```json
{ "action": "wait", "ms": 2000 }
```

等待指定毫秒数（最大 10000ms）。用于等待页面加载、动画完成等。

## 平台支持

| 平台 | 截图 | 鼠标 | 键盘 | 窗口管理 |
|------|------|------|------|----------|
| macOS | ✅ screencapture | ✅ cliclick | ✅ cliclick | ✅ |
| Linux | ✅ scrot/import | ✅ xdotool | ✅ xdotool | ✅ |
| Windows | ✅ PowerShell | ✅ PowerShell | ✅ PowerShell | ✅ |

## 典型工作流

### 1. 截图 → 识别 → 操作

```
1. screenshot — 获取当前屏幕
2. 分析截图，找到目标元素位置
3. click / type — 执行操作
4. screenshot — 验证结果
```

### 2. 自动化桌面应用

```
1. get_active_window — 确认当前窗口
2. mouse_move + left_click — 点击菜单
3. type — 输入内容
4. key "Enter" — 确认
```

### 3. 文件拖放

```
1. screenshot — 找到源文件和目标位置
2. drag — 从源拖到目标
3. screenshot — 验证结果
```

## 注意事项

::: warning 权限
- **macOS**：首次使用需在「系统设置 → 隐私与安全性 → 辅助功能」中授权终端或 RsClaw
- **Linux**：确保 `cliclick` 或 `xdotool` 已安装
- **Windows**：需要 PowerShell 7+
:::

::: tip 最佳实践
- 每次操作后建议 `screenshot` 确认状态再执行下一步
- 坐标基于截图返回的分辨率，注意 HiDPI 缩放比例
- 避免过快连续操作，必要时使用 `wait` 等待界面响应
- 桌面自动化依赖实时状态（当前窗口、鼠标位置），不适合完全无人值守的长流程
:::
