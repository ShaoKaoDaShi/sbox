import fs from "node:fs";
import path from "node:path";
import { exec } from "child_process";

const APPS_DIR = "/Users/bytedance/projects/zijie/aidp-foundation/apps";

// 查找所有 std 项目
const findStdProjects = (dir) => {
  return fs
    .readdirSync(dir)
    .filter((file) => file.includes("std"))
    .map((file) => path.join(dir, file))
    .filter((filePath) => {
      try {
        return fs.statSync(filePath).isDirectory();
      } catch (err) {
        console.error(`Error accessing ${filePath}: ${err.message}`);
        return false;
      }
    });
};

const main = () => {
  const projects = findStdProjects(APPS_DIR);

  console.log("Found std projects:", projects);

  // 启动每个项目
  projects.forEach((project) => {
    console.log(`Starting ${project}...`);
    exec("pnpm run dev", { cwd: project }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting ${project}: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  });
};

export default main;
