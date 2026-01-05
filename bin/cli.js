#!/usr/bin/env node
import { program } from "commander";
import runAllStd from "../src/run-all-std.js";
import rmAllNodeModules from "../src/rm-all-node_modules.js";
import stopAllPnpmDev from "../src/stop-all-pnpm-dev.js";

program
  .version("1.0.0")
  .description("一个简单的 CLI 工具")
  .command("create <project-name>") // 定义一个子命令
  .description("创建新项目")
  .action((projectName) => {
    console.log(`正在创建项目: ${projectName}`);
    // 这里可以加入下载模板或生成文件等逻辑
  });

program
  .command("run-all-std")
  .description("运行所有 std 项目")
  .action(() => {
    console.log("正在运行所有 std 项目...");
    runAllStd();
    // 这里可以加入运行所有 std 项目的逻辑
  });

program
  .command("rm-all-node_modules")
  .description("删除所有项目中的 node_modules 目录")
  .action(() => {
    console.log("正在删除所有项目中的 node_modules 目录...");
    rmAllNodeModules();
    // 这里可以加入删除所有项目中的 node_modules 目录的逻辑
  });

program
  .command("stop-all-pnpm-dev")
  .description("停止所有正在运行的 pnpm dev 进程")
  .action(() => {
    console.log("正在停止所有正在运行的 pnpm dev 进程...");
    stopAllPnpmDev();
    // 这里可以加入停止所有正在运行的 pnpm dev 进程的逻辑
  });

program.parse(process.argv); // 解析命令行参数
