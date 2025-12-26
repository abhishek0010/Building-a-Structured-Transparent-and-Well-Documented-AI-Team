# AGENTS.md

> Copy to repository root. Works with: Cursor, Roo Code, Kilo Code, Phoenix, Warp, VS Code, Semgrep

## OODA Loop

All work follows Observe → Orient → Decide → Act:

### Observe
- Read the task/issue completely
- Scan relevant files and dependencies
- Note current test status and coverage

### Orient
- Map what exists vs what's needed
- Identify risks, constraints, unknowns
- Decompose into atomic subtasks

### Decide
- Choose approach with lowest risk
- Define scope boundaries (in/out)
- Set acceptance criteria

### Act
- Execute one subtask at a time
- Write tests before implementation (TDD)
- Validate before moving to next task

---

## TDD Cycle

**Red** → Write failing tests that define expected behavior
**Green** → Write minimal code to pass tests
**Blue** → Refactor while keeping tests green

---

## Code Standards

- Minimal, surgical changes over rewrites
- Follow existing patterns in codebase
- Tests proportionate to change complexity
- Update docs when changing behavior

---

## Scope Discipline

- Stay within assigned files/directories
- Do not modify unrelated code
- Escalate when requirements are ambiguous
- Reference `meet-the-team/` for role definitions

---

## Task Completion

Return structured summary:
- Files changed
- Tests run/added
- What was done and why
- Open items or risks
