import fs from "node:fs";
import path from "node:path";
import { exec } from "child_process";

const APPS_DIR = "apps";
const cwd = process.cwd();

// 查找所有 std 项目
const findStdProjects = (dir) => {
  const appsDir = path.join(dir, APPS_DIR);
  return fs
    .readdirSync(appsDir)
    .filter((file) => file.endsWith("-std") || file === "foundation")
    .map((file) => path.join(appsDir, file))
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
  try {
    const projects = findStdProjects(cwd);

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
  } catch (err) {
    console.error("Fatal error:", err);
    process.exit(1);
  }
};

export default main;
