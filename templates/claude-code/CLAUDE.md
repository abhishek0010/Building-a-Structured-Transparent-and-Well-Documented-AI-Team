# CLAUDE.md

> Copy to repository root or `.claude/CLAUDE.md`. Uses @imports for context.

@README.md

## OODA Loop

Every task follows: **Observe → Orient → Decide → Act**

### Observe
- Read task completely before acting
- @package.json for dependencies
- Scan test status: `npm test` / `pytest`

### Orient  
- Map current state vs goal state
- Identify: risks, unknowns, dependencies
- Break into atomic subtasks

### Decide
- Choose lowest-risk approach
- Define scope: what's in, what's out
- Set clear acceptance criteria

### Act
- One subtask at a time
- TDD: failing test → implementation → refactor
- Validate before proceeding

---

## TDD Phases

**Red**: Write failing test defining expected behavior
**Green**: Minimal code to pass
**Blue**: Refactor while green

---

## Commands

```bash
# Build
npm run build

# Test
npm test

# Lint
npm run lint
```

---

## Scope Rules

- Stay within assigned files
- No unrelated modifications
- Escalate ambiguous requirements
- @meet-the-team/orchestrator.md for delegation patterns

---

## Multi-Agent Pattern (Self-Apply)

For complex work, cycle through mindsets:

1. **Orchestrator**: Decompose, assign scope, define criteria
2. **Implementer**: Execute within scope, TDD
3. **Reviewer**: Verify criteria met, check for scope creep

---

## Completion Format

```
Files: [list]
Tests: [commands run, results]
Summary: [what/why]
Risks: [open items]
```
