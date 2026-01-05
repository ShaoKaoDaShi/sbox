# sbox - Shell脚本效率工具箱

一个为提高工作效率而设计的命令行工具集合，集成了多种实用的Shell脚本操作。

## 功能特性

### 🚀 快速启动所有std项目
```bash
sbox run-all-std
```
自动查找并启动当前目录下所有以`-std`结尾的项目和foundation项目，使用pnpm run dev命令启动。

### 🧹 批量删除node_modules
```bash
sbox rm-all-node-modules
```
递归查找并删除当前目录下所有的node_modules文件夹，释放磁盘空间。

### 🛑 停止所有pnpm dev进程
```bash
sbox stop-all-pnpm-dev
```
快速停止所有正在运行的pnpm dev进程，适用于开发环境清理。

### 📦 创建新项目
```bash
sbox create <project-name>
```
快速创建新项目（需自行实现模板下载逻辑）。

## 安装方式

### 全局安装
```bash
npm install -g skds-sbox
```

### 本地使用
```bash
npx skds-sbox <command>
```

## 使用示例

### 启动所有std项目
```bash
sbox run-all-std
```

### 清理所有node_modules
```bash
sbox rm-all-node-modules
```

### 停止所有pnpm dev进程
```bash
sbox stop-all-pnpm-dev
```

## 技术栈

- **Node.js**: 运行环境
- **Commander.js**: 命令行框架
- **zx**: Shell脚本执行工具
- **chalk**: 命令行美化
- **ora**: 加载动画
- **inquirer**: 交互式命令行

## 项目结构

```
shell-scripts/
├── bin/
│   └── cli.js          # 主命令行入口
├── src/
│   ├── run-all-std.js  # 启动所有std项目
│   ├── rm-all-node_modules.js  # 删除所有node_modules
│   ├── stop-all-pnpm-dev.js    # 停止所有pnpm dev进程
│   └── run-all-std.sh  # 备用Shell脚本
└── package.json        # 项目配置
```

## 开发说明

### 本地开发
```bash
# 克隆项目
git clone <repository-url>
cd shell-scripts

# 安装依赖
pnpm install

# 本地测试
node bin/cli.js <command>

# 链接到全局
npm link
```

### 发布到npm
```bash
# 登录npm
npm login

# 发布
npm publish
```

## 许可证

ISC License

## 作者

skds
