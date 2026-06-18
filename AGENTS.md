# Agent instructions

This file gives coding agents (Cursor, Claude Code, etc.) project-specific
guidance. Read it when working in this repository.

## Repository layout

```text
AGENTS.md              # shared instructions (this file)
CLAUDE.md              # Claude Code overlay — read AGENTS.md first
.agents/skills/        # canonical shared skills (Agent Skills standard)
.claude/               # Claude-only: settings, subagents; skills → .agents/skills
.cursor/rules/         # Cursor-only scoped rules (.mdc)
.cursor/mcp.json       # Cursor MCP servers
```

Put cross-tool workflows in `.agents/skills/`. Keep tool-specific config in `.claude/` or `.cursor/`.

## Custom directives

Some files contain `@`-tags in comments. These are **project-defined signals** —
not official ESLint, JSDoc, or language standards. When you see one, look it up
below and follow its instructions before making other changes to that file.

### How to handle any directive

1. Find the tag in the **Registry** section below.
2. Follow the **When encountered** steps exactly.
3. If the tag lists doc links, use them to verify accuracy — do not rely on memory alone.
4. If the directive is unclear or the docs have changed significantly, ask the user before large edits.

---

## Registry

### `@agent-maintain`

**Purpose:** Keep inline documentation in config files accurate and up to date.

**When encountered** (e.g. in `eslint.config.js`, `prettier.config.js`):

1. Read the comment block below the tag and the reference comments in the file.
2. Check the listed official doc links against the **current** config (imports, presets, options).
3. Update any description that is wrong: renamed APIs, removed options, new defaults, or outdated best practices.
4. Update the `Last reviewed against:` line with the current package major versions and date (`YYYY-MM`, e.g. `2026-06`).
5. Do **not** change the actual config values unless the user asked — this directive is about **comments only**.
6. If you update comments, mention what changed, which docs you checked, and the new `Last reviewed against` date.

---

## Adding new directives

Use this template when introducing a new tag:

```markdown
### `@agent-your-name`

**Purpose:** One sentence — what problem this directive solves.

**When encountered:**

1. Step-by-step instructions for the agent.
2. Keep steps concrete and actionable.

**Currently used in:**

| File | Notes |
|------|-------|
| `path/to/file` | Optional context |
```

Then add the tag in the target file:

```js
/**
 * @agent-your-name
 * See AGENTS.md for instructions.
 */
```
