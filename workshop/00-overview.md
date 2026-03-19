# 🎮 Mona Mayhem — GitHub Copilot Workshop

---

> **Duration:** ~1 hour  
> **Level:** Intermediate  
> **Stack:** Astro / Node.js / TypeScript

Build a retro arcade GitHub contribution comparison app — **Mona Mayhem** — while learning the full spectrum of GitHub Copilot workflows. The workshop supports **two tracks**: a VS Code experience and a GitHub Copilot CLI experience.

---

## 🎯 Choose Your Track

- **VS Code track** — stay inside the editor and practice Chat, Plan Mode, Agent Mode, background agents, and the built-in review loop.
- **CLI track** — stay in the terminal and practice `copilot`, `@file` context, `/plan`, autonomous edits, `/fleet`, `/delegate`, and `/review`.

Follow the track that matches your preferred workflow.

---

## 📋 Quick Checklist

Before you begin, verify:

- [ ] GitHub Copilot is enabled for your account
- [ ] Node.js installed
- [ ] Git installed and configured
- [ ] Your browser and terminal are both ready

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (no pending updates)
- [ ] Signed in to the **GitHub Copilot** extension
- [ ] Chat panel open and Agent ready
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI installed and available as `copilot`
- [ ] Authenticated in the CLI with `/login`
- [ ] Comfortable using slash commands like `/help`, `/plan`, and `/review`
<!-- track:cli:end -->

> 💡 **Tip:** Use the DevContainer for a pre-configured environment if you want a fast start in VS Code.

---

## 🧠 What You'll Learn

| # | Skill | Description |
|---|-------|-------------|
| 1 | **Context Engineering** | Teach Copilot about your codebase with instructions, references, and clear constraints |
| 2 | **Plan First** | Draft architecture before implementation |
| 3 | **Agentic Implementation** | Let Copilot carry out multi-step coding work with your supervision |
| 4 | **Iterative Design** | Use Copilot to transform visuals and refine interaction details |
| 5 | **Parallel Workflows** | Split work across agents, sessions, or delegated tasks |

<!-- track:vscode:start -->
### VS Code Feature Focus

- **Chat + Ask mode** for exploration
- **Plan Mode** for architecture and design prompts
- **Agent Mode** for multi-file implementation
- **Background and cloud agents** for parallel polish
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Copilot CLI Feature Focus

- **Interactive CLI sessions** with `copilot`
- **`/plan` and Shift+Tab** for structured planning
- **Autonomous edits** with inline approvals and `/diff`
- **`/fleet`, `/delegate`, and `/review`** for parallelism and quality gates
<!-- track:cli:end -->

---

## 📚 Lab Parts

| Part | Title | Description |
|------|-------|-------------|
| [**01**](01-setup.md) | Setup & Context Engineering | Create your repo, prepare your environment, and give Copilot the right context |
| [**02**](02-plan-and-scaffold.md) | Plan & Scaffold | Design the API and page architecture before you implement |
| [**03**](03-agent-mode.md) | Build the Game | Wire up the battle page and contribution graphs with agentic help |
| [**04**](04-design-vibes.md) | Design-First Theming | Turn the scaffold into a retro arcade experience |
| [**05**](05-polish.md) | Polish & Parallel Work | Use multi-agent workflows to improve UX, resilience, and quality |
| [**06**](06-bonus.md) | Bonus & Extensions | Explore open-ended features, sharing workflows, and extra experiments |

---

## 💡 Pro Tips

1. **Keep the browser open** — watch live updates as you code.
2. **Commit often** — save clean checkpoints while you iterate.
3. **Refine the plan before implementation** — better plans lead to better results.
4. **Review Copilot's changes** — use the diff view or CLI review tools instead of accepting blindly.

<!-- track:vscode:start -->
5. **Use checkpoints and Undo** in chat if an iteration goes off track.
<!-- track:vscode:end -->

<!-- track:cli:start -->
5. **Use `/session`, `/context`, and `/share file`** when you want to inspect or preserve your work.
<!-- track:cli:end -->
