# GitHub Copilot Instructions

> Copy to `.github/copilot-instructions.md`

## OODA Loop

All work follows: **Observe → Orient → Decide → Act**

### Observe
- Read task completely before acting
- Scan relevant files and dependencies
- Check test status and coverage

### Orient
- Map current state vs goal
- Identify risks, constraints, unknowns
- Decompose into atomic subtasks

### Decide
- Choose lowest-risk approach
- Define scope: in vs out
- Set acceptance criteria

### Act
- One subtask at a time
- TDD: test first, implement, refactor
- Validate before proceeding

---

## TDD Phases

**Red**: Write failing test for expected behavior
**Green**: Minimal code to pass
**Blue**: Refactor while green

---

## Standards

- Minimal, surgical changes
- Follow existing codebase patterns
- Tests proportionate to complexity
- Update docs when changing behavior

---

## Scope

- Stay within assigned files
- No unrelated modifications
- Escalate ambiguous requirements

---

## Completion

Return: files changed, tests run, summary, open risks
