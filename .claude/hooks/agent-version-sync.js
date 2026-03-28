#!/usr/bin/env node
/**
 * PostToolUse hook: fires after Write/Edit on .claude/agents/*.md
 *
 * Owns 100% of versioning for agent files:
 *   1. Reads `change` + `reason` fields left by agentic-architect
 *   2. Determines new version (1.0.0 for new agents, patch-bump for existing)
 *   3. Archives the previous changelog entry to docs/agents/<name>-history.md
 *   4. Rewrites frontmatter: removes change/reason, injects version/created/updated/changelog
 *   5. Keeps docs/agents/AGENTS.md registry in sync
 */

const fs   = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ── Read hook event from stdin ────────────────────────────────────────────────
let event;
try {
  const raw = fs.readFileSync("/dev/stdin", "utf8");
  event = JSON.parse(raw);
} catch {
  process.exit(0);
}

const filePath = event?.tool_input?.file_path ?? "";

if (!filePath || !/\/\.claude\/agents\/[^/]+\.md$/.test(filePath)) process.exit(0);
if (!fs.existsSync(filePath)) process.exit(0);

// ── Resolve paths ─────────────────────────────────────────────────────────────
let repoRoot;
try {
  repoRoot = execSync(`git -C "${path.dirname(filePath)}" rev-parse --show-toplevel`, {
    encoding: "utf8",
  }).trim();
} catch {
  process.exit(0);
}

const agentName   = path.basename(filePath, ".md");
const historyPath = path.join(repoRoot, `docs/agents/${agentName}-history.md`);
const agentsMd    = path.join(repoRoot, "docs/agents/AGENTS.md");
const today       = new Date().toISOString().slice(0, 10);

// ── Parse frontmatter ─────────────────────────────────────────────────────────
// Use regex to match only the FIRST frontmatter block (non-greedy),
// so that --- horizontal rules in the body don't corrupt the split.
let content = fs.readFileSync(filePath, "utf8");
const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
if (!fmMatch) process.exit(0);

let [, front, body] = fmMatch;

const fmGet = (field) => {
  const m = front.match(new RegExp(`^${field}:\\s*(.+)$`, "m"));
  return m ? m[1].trim() : "";
};

// Fields the architect provides
const change = fmGet("change") || "No description provided";
const reason = fmGet("reason") || "No reason provided";

// Existing version metadata (present on modifications, absent on new agents)
const existingVersion = fmGet("version");
const existingCreated = fmGet("created");

// Content identity fields (keep as-is)
const agentModel = fmGet("model");
const agentTools = fmGet("tools");

// ── Determine version ─────────────────────────────────────────────────────────
let registeredVersion = "";
if (fs.existsSync(agentsMd)) {
  for (const line of fs.readFileSync(agentsMd, "utf8").split("\n")) {
    if (line.startsWith(`| ${agentName} |`)) {
      registeredVersion = line.split("|").map((c) => c.trim())[2] ?? "";
      break;
    }
  }
}

const isNewAgent = !registeredVersion;
let newVersion;
let createdDate;

if (isNewAgent) {
  newVersion  = "1.0.0";
  createdDate = today;
} else {
  // Use existingVersion from file if architect set it higher than registered
  const base = existingVersion || registeredVersion;
  if (base !== registeredVersion) {
    // Architect manually set a higher version — respect it
    newVersion = base;
  } else {
    // Auto-bump patch
    const [maj, min, pat] = registeredVersion.split(".");
    newVersion = `${maj}.${min}.${parseInt(pat, 10) + 1}`;
  }
  createdDate = existingCreated || today;
}

// ── Archive previous changelog entry (modifications only) ────────────────────
if (!isNewAgent) {
  const clMatch = front.match(/^(changelog:(?:\n  [^\n]*)*)/m);
  const oldEntry = clMatch ? clMatch[1].replace(/^changelog:\n/, "").trimEnd() : null;

  if (oldEntry) {
    fs.mkdirSync(path.dirname(historyPath), { recursive: true });

    if (fs.existsSync(historyPath)) {
      const lines  = fs.readFileSync(historyPath, "utf8").split("\n");
      const sepIdx = lines.findIndex(l => l === "---");
      const header = lines.slice(0, sepIdx + 1).join("\n");
      const rest   = lines.slice(sepIdx + 1).join("\n");
      fs.writeFileSync(historyPath, `${header}\n\n${oldEntry}\n\n---\n${rest}`);
    } else {
      fs.writeFileSync(
        historyPath,
        `# ${agentName} — Changelog History\n\n` +
        `Older entries are prepended to the top (newest first).\n\n` +
        `---\n\n${oldEntry}\n`
      );
    }
  }
}

// ── Rewrite frontmatter ───────────────────────────────────────────────────────
// Strip all versioning + temp fields that the hook owns
front = front
  .replace(/^change:.*$\n?/m,   "")
  .replace(/^reason:.*$\n?/m,   "")
  .replace(/^version:.*$\n?/m,  "")
  .replace(/^created:.*$\n?/m,  "")
  .replace(/^updated:.*$\n?/m,  "")
  .replace(/^changelog:(?:\n  [^\n]*)*/m, "")
  .replace(/\n{3,}/g, "\n\n")   // collapse extra blank lines
  .trimEnd();

// Build new changelog block
const newChangelog =
  `changelog:\n` +
  `  - version: ${newVersion}\n` +
  `    date: ${today}\n` +
  `    change: ${change}\n` +
  `    reason: ${reason}`;

// Append versioning fields
front =
  `${front}\n` +
  `version: ${newVersion}\n` +
  `created: ${createdDate}\n` +
  `updated: ${today}\n` +
  `${newChangelog}\n`;

fs.writeFileSync(filePath, `---\n${front}\n---\n${body}`);

// ── Sync AGENTS.md registry ───────────────────────────────────────────────────
if (fs.existsSync(agentsMd)) {
  let agentsContent = fs.readFileSync(agentsMd, "utf8");

  agentsContent = agentsContent.replace(/^Last updated: .+$/m, `Last updated: ${today}`);

  const rowRe   = new RegExp(`^\\| ${agentName} \\|.*$`, "m");
  const existing = agentsContent.match(rowRe);

  if (existing) {
    const cols    = existing[0].split("|").map((c) => c.trim());
    const summary = cols[6] ?? "";
    agentsContent = agentsContent.replace(
      rowRe,
      `| ${agentName} | ${newVersion} | ${agentModel} | ${agentTools} | ${today} | ${summary} |`
    );
  } else {
    const descM   = front.match(/^description:\s*(.+?)(?:\.\s|$)/m);
    const summary = descM ? descM[1].slice(0, 80) : agentName;
    agentsContent =
      agentsContent.trimEnd() + "\n" +
      `| ${agentName} | ${newVersion} | ${agentModel} | ${agentTools} | ${today} | ${summary} |\n`;
  }

  fs.writeFileSync(agentsMd, agentsContent);
}

const label = isNewAgent ? "created" : `bumped → ${newVersion}`;
process.stderr.write(`agent-version-sync: ${agentName} ${label}\n`);
