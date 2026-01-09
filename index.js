#!/usr/bin/env node
import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, "sim-temp");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Simulation name (must start with sim-): ", (name) => {
  if (!name.startsWith("sim-")) {
    console.error("❌ Name must start with sim-");
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), name);
  fs.cpSync(templateDir, targetDir, { recursive: true });

  const pkgPath = path.join(targetDir, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

  pkg.name = name;

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  console.log(`✔ Simulation created at ${targetDir}`);
  rl.close();
});
