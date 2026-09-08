import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (relativePath) =>
  JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));

test("client and package versions stay synchronized", () => {
  const codex = readJson(".codex-plugin/plugin.json");
  const claude = readJson(".claude-plugin/plugin.json");
  const pkg = readJson("package.json");

  assert.equal(codex.name, "telcel");
  assert.equal(claude.name, "telcel");
  assert.equal(codex.version, claude.version);
  assert.equal(codex.version, pkg.version);
  assert.deepEqual(claude.dependencies, ["messages@package-manager"]);
});

test("manifest artwork and skill entrypoint are payload files", () => {
  const codex = readJson(".codex-plugin/plugin.json");
  for (const field of ["composerIcon", "logo"]) {
    const relative = codex.interface[field].replace(/^\.\//, "");
    const stat = fs.statSync(path.join(root, relative));
    assert.ok(stat.isFile());
    assert.ok(stat.size > 0);
  }

  const skill = fs.readFileSync(path.join(root, "skills/telcel/SKILL.md"), "utf8");
  assert.match(skill, /^---\nname: telcel\n/m);
  assert.ok(!skill.includes("[TODO:"));
});

test("repository payload contains no obvious secret or account snapshot", () => {
  const checked = [
    "README.md",
    "AGENTS.md",
    "skills/telcel/SKILL.md",
    ".codex-plugin/plugin.json",
    ".claude-plugin/plugin.json",
  ];
  const combined = checked
    .map((relative) => fs.readFileSync(path.join(root, relative), "utf8"))
    .join("\n");

  assert.doesNotMatch(combined, /\b\d{10}\b/);
  assert.doesNotMatch(combined, /(?:password|contrase(?:n|ñ)a|otp)\s*[:=]\s*\S+/i);
});
