#!/bin/bash

# 定义颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 查找所有带有 -std 的子项目（仅一级子目录）
STD_PROJECTS=$(find /Users/bytedance/projects/zijie/aidp-foundation/apps -maxdepth 1 -name "*-std*" -type d)

if [ -z "$STD_PROJECTS" ]; then
    echo -e "${RED}No std projects found!${NC}"
    exit 1
fi

echo -e "${GREEN}Found the following std projects:${NC}"
echo "$STD_PROJECTS"
echo ""

# 启动所有项目
for PROJECT in $STD_PROJECTS; do
    echo -e "${YELLOW}Starting project: $PROJECT${NC}"
    cd "$PROJECT"
    
    # 检查是否有 package.json
    if [ -f "package.json" ]; then
        # 检查是否有 dev 脚本
        if grep -q "\"dev\":" package.json; then
            pnpm run dev &
            echo -e "${GREEN}Started $PROJECT in background${NC}"
        else
            echo -e "${RED}No dev script found in $PROJECT/package.json${NC}"
        fi
    else
        echo -e "${RED}No package.json found in $PROJECT${NC}"
    fi
    echo ""
done

echo -e "${GREEN}All std projects have been started!${NC}"
echo "To stop all projects, run: pkill -f 'pnpm run dev'"