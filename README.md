# Advanced Multi-Agent AI Framework

> A structured, production-ready multi-agent framework for coordinating specialized AI modes using clear contracts, deterministic execution, and traceable task flows.

## Quick Start

**[→ Get Started in 5 Minutes](templates/quick-start.md)** — Choose your IDE and follow the setup guide.

```bash
git clone https://github.com/Mnehmos/Advanced-Multi-Agent-AI-Framework.git
cd Advanced-Multi-Agent-AI-Framework
```

## Supported Tools

| IDE / Tool | Template | Description |
|------------|----------|-------------|
| **Any IDE** | [AGENTS.md](templates/universal/AGENTS.md) | Universal agent instructions (works everywhere) |
| **Roo Code** | [custom_modes.yaml](templates/custom_modes.yaml) | Full multi-mode configuration |
| **Claude Code** | [CLAUDE.md](templates/claude-code/CLAUDE.md) | Claude Code system instructions |
| **Cursor** | [_global.mdc](templates/cursor/rules/_global.mdc) | Cursor rules in MDC format |
| **GitHub Copilot** | [copilot-instructions.md](templates/copilot/copilot-instructions.md) | Copilot custom instructions |

**Full Setup Guide:** [templates/quick-start.md](templates/quick-start.md)

## Core Concepts

### Multi-Agent Coordination
Specialized agents work together through an Orchestrator that delegates tasks to the right specialist:

| Role | Purpose |
|------|---------|
| **Orchestrator** | Project management, task delegation, workflow coordination |
| **Architect** | System design, ADRs, technical contracts |
| **Planner** | Requirements, task maps, backlog management |
| **Code** | Implementation, refactoring, optimization |
| **Debug** | Root cause analysis, diagnostics |

### TDD Workflow (Red → Green → Blue)
- **Red Phase**: Write failing tests first
- **Green Phase**: Minimal implementation to pass tests
- **Blue Phase**: Refactor while keeping tests green

### Boomerang Task Returns
Every delegated task returns with structured results: status, files changed, tests run, and summary. This ensures traceability and auditability.

## Templates

All configuration templates are in [`templates/`](templates/):

| File | Purpose |
|------|---------|
| [custom_modes.yaml](templates/custom_modes.yaml) | Mode definitions for Roo Code |
| [custom-instructions-for-all-modes.md](templates/custom-instructions-for-all-modes.md) | Shared agent instructions |
| [slash-commands.yaml](templates/slash-commands.yaml) | Slash command definitions |
| [enhance-prompt-template.md](templates/enhance-prompt-template.md) | Prompt enhancement patterns |

## Meet the Team

Detailed profiles for each AI specialist in [`meet-the-team/`](meet-the-team/):

[Orchestrator](meet-the-team/orchestrator.md) · [Architect](meet-the-team/architect.md) · [Planner](meet-the-team/planner.md) · [Code](meet-the-team/code.md) · [Debug](meet-the-team/debug.md) · [Ask](meet-the-team/ask.md) · [Deep Research](meet-the-team/deep-research-agent.md) · [Memory](meet-the-team/memory.md)

## Slash Commands

Standardized commands for common workflows in [`slash-commands/`](slash-commands/):

`/plan` · `/build` · `/test` · `/review` · `/debug` · `/refactor` · `/docs` · [View All →](slash-commands/README.md)

## Key Features

- **Scoped Edits**: Agents operate within assigned workspace paths and file patterns
- **Deterministic Workflows**: Inspectable steps, atomic tool execution
- **Platform Agnostic**: Works with Roo Code, Claude Code, Cursor, Copilot, or custom runtimes
- **Token Efficient**: Context-aware, minimal-diff editing patterns
- **Extensible**: Add custom modes, slash commands, and templates

## Requirements

Any agentic runtime supporting:
- Multiple modes/roles with distinct instructions
- Atomic tool execution
- File-scoped deterministic edits

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- ⭐ Star this repo if useful
- 🐛 Open issues for bugs or suggestions
- 🔀 PRs welcome for templates, docs, and examples

## License

[MIT License](LICENSE) — Open source for professional and commercial use.

### Acknowledgments

- [Prompt Engineering Sources](https://mnehmos.github.io/Prompt-Engineering/sources.html) (20+ research papers)
- Vincent Shing Hin Chong — [Language Construct Modeling](https://osf.io/q6cyp/)
- Multi-agent AI research community
