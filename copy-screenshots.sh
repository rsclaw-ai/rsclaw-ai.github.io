#!/bin/bash
# 把桌面上的截图复制到网站 public 文件夹
# Run this script in Terminal: bash copy-screenshots.sh

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
DESKTOP="$HOME/Desktop"

echo "📁 目标文件夹: $REPO_DIR/public/"

copy_file() {
  local src="$1"
  local dst="$2"
  if [ -f "$src" ]; then
    cp "$src" "$dst"
    echo "✅ 已复制: $(basename $src) → $(basename $dst)"
  else
    echo "⚠️  未找到: $src"
  fi
}

copy_file "$DESKTOP/1.png"   "$REPO_DIR/public/screenshot-1.png"
copy_file "$DESKTOP/2.png"   "$REPO_DIR/public/screenshot-2.png"
copy_file "$DESKTOP/3.png"   "$REPO_DIR/public/screenshot-3.png"

echo ""
echo "完成！如文件名不同请手动修改脚本或直接把截图重命名后放入 public/ 文件夹。"
