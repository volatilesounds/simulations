#!/usr/bin/env node
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, "sim-temp");

// List of files/folders to ignore when copying
const ignoreList = [
  "node_modules",
  "dist",
  ".git",
  ".DS_Store",
  "package-lock.json"
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Recursive copy function with ignore
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    if (ignoreList.includes(item)) continue;

    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Function to run a shell command and log result
function runCommand(cmd, cwd) {
  try {
    execSync(cmd, { stdio: "inherit", cwd });
    console.log(`✔ Command succeeded: ${cmd}`);
  } catch (err) {
    console.error(`❌ Command failed: ${cmd}`);
  }
}

rl.question("Simulation name (must start with sim-): ", (name) => {
  if (!name.startsWith("sim-")) {
    console.error("❌ Name must start with sim-");
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), name);

  // Copy template
  copyDir(templateDir, targetDir);

  // Update package.json
  const pkgPath = path.join(targetDir, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    pkg.name = name;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  }

  console.log(`✔ Simulation created at ${targetDir}`);

  // Run npm install in simulation
  // We need to run 'npm install' before linking the vsounds module because 'npm install' is removing the symlink.
  console.log(`📦 Installing dependencies for simulation...`);
  runCommand("npm install", targetDir);

  // Link vsounds module
  const vsoundsPath = path.resolve(__dirname, "vsounds-module");
  console.log(`🔗 Linking vsounds module...`);  
  runCommand("npm link", vsoundsPath);               // link globally
  runCommand("npm link vsounds", targetDir);         // link in new sim

  const linked = fs.existsSync(path.join(targetDir, "node_modules", "vsounds"));
  console.log(linked ? "✔ vsounds linked successfully" : "❌ vsounds not linked");

  rl.close();
});
