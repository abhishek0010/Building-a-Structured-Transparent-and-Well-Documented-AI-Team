# Quick Start: IDE Templates

Choose your tool and copy the template to your project.

---

## Claude Code (Anthropic CLI)

```bash
cp templates/claude-code/CLAUDE.md ./CLAUDE.md
```

Or place in `.claude/CLAUDE.md` for project scope.

---

## Cursor

```bash
mkdir -p .cursor/rules
cp templates/cursor/rules/_global.mdc .cursor/rules/
```

Alternative: Use `templates/universal/AGENTS.md` at repo root.

---

## GitHub Copilot

```bash
mkdir -p .github
cp templates/copilot/copilot-instructions.md .github/
```

---

## Roo Code / Kilo Code

Use directly:
- `templates/custom_modes.yaml` → `.roo/custom_modes.yaml`
- `templates/custom-instructions-for-all-modes.md` → Global instructions

Full multi-mode orchestration with parallel execution.

---

## Other Tools (VS Code, Warp, Phoenix, Semgrep)

```bash
cp templates/universal/AGENTS.md ./AGENTS.md
```

Universal format, no special syntax.

---

## OODA Loop (All Templates)

Every template uses the same core logic:

1. **Observe**: Read task, scan files, note status
2. **Orient**: Map state, identify risks, decompose
3. **Decide**: Choose approach, define scope, set criteria
4. **Act**: Execute TDD, validate, complete

---

## Upgrade Path

**Single-agent** (Claude Code, Cursor, Copilot)
↓ Self-apply multi-agent patterns via OODA
↓ Graduate to structured delegation

**Multi-agent** (Roo Code, Kilo Code)
↓ Full mode separation with `custom_modes.yaml`
↓ Parallel execution with scope isolation
↓ Boomerang protocol for task tracking
