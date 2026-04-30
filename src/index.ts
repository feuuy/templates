#!/usr/bin/env node
import * as p from "@clack/prompts";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import color from "picocolors";

const TEMPLATES = {
  "content-site": "feuuy/templates/content-site",
} as const;

type TemplateKey = keyof typeof TEMPLATES;

async function main() {
  console.log("");
  p.intro(color.bgCyan(color.black("create-feuy-app ")));

  // --- Gather user input ---

  const projectName = await p.text({
    message: "What is your project name?",
    placeholder: "my-new-site",
    validate(value) {
      if (!value) return "Project name is required.";
      if (!/^[a-z0-9-]+$/.test(value))
        return "Use only lowercase letters, numbers, and hyphens.";
    },
  });
  if (p.isCancel(projectName)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const template = await p.select({
    message: "Which template would you like to use?",
    options: [
      {
        value: "content-site",
        label: "Content site",
        hint: "Blog, company website, docs — Next.js + Payload",
      },
    ],
  });
  if (p.isCancel(template)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const packageManager = await p.select({
    message: "Which package manager?",
    options: [
      { value: "pnpm", label: "pnpm", hint: "recommended" },
      { value: "npm", label: "npm" },
      { value: "bun", label: "bun" },
    ],
  });
  if (p.isCancel(packageManager)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const installDeps = await p.confirm({
    message: "Install dependencies now?",
    initialValue: true,
  });
  if (p.isCancel(installDeps)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  // --- Scaffold the project ---

  const targetDir = path.resolve(process.cwd(), projectName as string);

  if (existsSync(targetDir)) {
    p.cancel(`Directory "${projectName}" already exists.`);
    process.exit(1);
  }

  await mkdir(targetDir, { recursive: true });

  const s = p.spinner();
  const repoPath = TEMPLATES[template as TemplateKey];

  // Download template via tiged (no git history, clean copy)
  s.start("Downloading template...");
  try {
    execSync(`npx tiged ${repoPath} ${targetDir} --force`, { stdio: "pipe" });
    s.stop("Template downloaded.");
  } catch (err) {
    s.stop("Failed to download template.");
    p.cancel(String(err));
    process.exit(1);
  }

  // Rename package.json "name" field to match project name
  const pkgPath = path.join(targetDir, "package.json");
  if (existsSync(pkgPath)) {
    const raw = await readFile(pkgPath, "utf-8");
    const pkg = JSON.parse(raw);
    pkg.name = projectName;
    await writeFile(pkgPath, JSON.stringify(pkg, null, 2));
  }

  // Optionally install dependencies
  if (installDeps) {
    s.start(`Installing dependencies with ${packageManager}...`);
    try {
      execSync(`${packageManager} install`, { cwd: targetDir, stdio: "pipe" });
      s.stop("Dependencies installed.");
    } catch {
      s.stop("Install failed — run it manually.");
    }
  }

  // --- Done! ---

  p.outro(
    `${color.green("✔")} Project ready! Next steps:\n\n` +
      `  ${color.cyan("cd")} ${projectName}\n` +
      `  ${color.cyan("cp")} .env.example .env.local\n` +
      `  ${color.cyan(packageManager + " run dev")}`,
  );
}

main().catch(console.error);
