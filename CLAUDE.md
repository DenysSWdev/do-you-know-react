# Claude Code

Read [AGENTS.md](./AGENTS.md) first — shared instructions apply to all agents in this repo.

## Claude-specific

- **Skills:** canonical location is `.agents/skills/`; Claude discovers them via `.claude/skills/` (symlink).
- **Subagents:** add definitions under `.claude/agents/`.
- **Permissions & hooks:** `.claude/settings.json` (use `.claude/settings.local.json` for personal overrides — gitignored).
- **MCP servers:** add a root `.mcp.json` when you configure Claude MCP integrations.
