# Part 3: Build the Battle Page

## 🎯 Goal

Create the main page with a title, two username input fields, and a battle button that will trigger the contribution comparison.

## Step 1: Set Up the Page Structure

Replace the contents of `src/pages/index.astro` with the basic structure. Ask Copilot:

> **💬 Copilot Prompt:**
>
> Replace the content of `src/pages/index.astro` with a battle page for "Mona Mayhem - GitHub Contribution Battle Arena". Create:
> 1. Proper HTML with charset, viewport meta, and title "Mona Mayhem - GitHub Contribution Battle!"
> 2. Import the Google Font "Press Start 2P" for a retro gaming look
> 3. A container div with:
>    - An h1 title "MONA MAYHEM"
>    - A subtitle paragraph "⚔️ GitHub Contribution Battle Arena ⚔️"
>    - An input section with two input groups (Player 1 and Player 2 username inputs with placeholders "octocat" and "torvalds")
>    - A "⚡ BATTLE! ⚡" button
>    - An empty results div with id="results"
> 4. Basic dark theme CSS: dark background (#0a0a1a), green text (#5fed83), the Press Start 2P font
> 5. Basic styling for inputs (dark background, green border) and the button

Don't add any JavaScript yet — we'll handle that in the next step.

## Step 2: Style the Inputs

The basic page should now be visible. Let's make the inputs look more arcade-like:

> **💬 Copilot Prompt:**
>
> Improve the CSS for the input fields and button in index.astro:
> - Inputs: Use the retro font, dark background (#1a1a2e), green border (#5fed83), green text, with a subtle glow effect (box-shadow). On focus, change border to purple (#8a2be2) with a stronger glow and slight scale.
> - Button: Gradient background from green to purple, dark text, uppercase, with a 3D pressed effect using box-shadow (0 5px 0 #3d9e5c). On hover, reverse the gradient and scale up slightly. On active (click), remove the depth shadow to simulate pressing down.
> - Button disabled state: gray background, no animation.

## Step 3: Verify the Layout

Check your page at `http://localhost:4321`. You should see:
- The "MONA MAYHEM" title
- Two username inputs labeled "Player 1" and "Player 2"
- A glowing "⚡ BATTLE! ⚡" button
- Dark background with green text

The button won't do anything yet — that comes next!

## ✅ Checkpoint

- [ ] Page displays at `http://localhost:4321`
- [ ] Title "MONA MAYHEM" is visible with the retro font
- [ ] Two username input fields with placeholders
- [ ] Battle button with gradient styling
- [ ] Dark theme with green (#5fed83) and purple (#8a2be2) accent colors

> [!TIP]
> In Astro, `.astro` files combine HTML, CSS, and JavaScript in a single component. CSS in `<style>` tags is scoped by default. Use `<style is:global>` if you want styles to apply everywhere. JavaScript in `<script>` tags runs in the browser.

👉 **[Continue to Part 4: Contribution Graph →](04-contribution-graph.md)**
