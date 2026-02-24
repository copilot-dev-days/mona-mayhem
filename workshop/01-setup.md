# Part 1: Setup & Context Engineering

---

In this part you'll set up your development environment **and** teach Copilot about the codebase — so every future prompt starts with the right context.

## Section 1: Initial Setup

### Step 1: Create Your Repository

1. Open [github.com/copilot-dev-days/mona-mayhem](https://github.com/copilot-dev-days/mona-mayhem)
2. Click **Use this template** → **Create a new repository**
3. Name it `my-mona-mayhem` and set visibility to **Public**

### Step 2: Enable GitHub Pages

1. Go to your new repository's **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**

### Step 3: Clone & Open in VS Code

1. Open VS Code and run **Git: Clone** → **Clone from GitHub**
2. Select your `my-mona-mayhem` repository
3. When prompted, install the **recommended extensions**

### Step 4: Run the Setup Agent

1. Open the **Chat** panel and type:

   ```
   /setup
   ```

2. The agent will detect your environment, install dependencies, and start the dev server automatically.

> ✅ **App is running in your browser!**

## Section 2: Context Engineering

Context engineering is how you teach AI about your codebase. The better the context, the better every future response will be.

### Task 1: Generate Workspace Instructions

1. Open the Command Palette and run:

   ```
   Chat: Generate Workspace Instructions File
   ```

2. Review the generated file — it's probably too detailed.
3. In Copilot Chat, follow up with:

   > "Compress down by half and add a mandatory development checklist (lint, build, test) to the top"

4. **Commit** the instructions file.

> **Result:** All future Copilot requests now have a basic map of your workspace baked in.

### Task 2: Background Agents

**Local background agent:**

1. In the Chat panel, click **+** → **New background agent**
2. Enter the prompt:

   > "Add linting rules for unused vars and improve code style; fix any errors"

3. When it finishes, **Review and Apply** the changes, then delete the session.

**Cloud agent:**

1. Start another background agent with:

   > "Make the README more engaging as a landing page"

> **Result:** Linting rules added, errors fixed, README improved — all without leaving your editor.

### Task 3: Explore the Project

Open **Copilot Chat** in **Ask mode** and try these prompts:

- `"Explain the architecture of this project"`
- `"What does the API route do?"`
- `"How does the contribution graph rendering work?"`

> 💡 Use **@workspace** to give Copilot project-wide context for more accurate answers.

## ✅ Part 1 Complete

You've learned how to:

- **Set up** a dev environment with the `/setup` agent
- **Generate workspace instructions** so Copilot understands your project
- **Use background and cloud agents** to automate housekeeping tasks
- **Explore a codebase** using Ask mode and `@workspace`
