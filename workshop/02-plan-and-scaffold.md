# Part 2: Plan & Scaffold

[← Part 1](01-setup.md)

---

Before writing any code, let's use **Plan Mode** to think through the architecture. Planning first helps you design better systems and gives Copilot the context it needs to generate higher-quality code.

## Task 1: Plan the API Architecture

1. Switch to **Plan** mode in Copilot Chat (click the mode selector at the bottom of the chat panel)

2. Enter this prompt:

   ```
   I need to build a server-side API proxy that fetches GitHub contribution data
   for any username. The endpoint is https://github.com/{username}.contribs which
   returns JSON. We need to bypass CORS restrictions. Plan the implementation
   including the route structure, error handling, and caching strategy.
   ```

3. **Review the plan** — this is where Plan mode shines. Don't just accept the first response:
   - Ask for clarifications on anything unclear
   - Suggest changes if something doesn't feel right
   - Iterate until you're satisfied with the approach

4. Once you're happy with the plan, ask Copilot to implement it — switch to **Agent** mode and tell it to go ahead

5. **Result:** You should now have an API route created at:
   ```
   src/pages/api/contributions/[username].ts
   ```

## Task 2: Test the API

1. Make sure your dev server is running, then test the endpoint:

   ```bash
   curl http://localhost:4321/api/contributions/octocat
   ```

2. You should see JSON with contribution data returned

3. Test the error case too — try an invalid username and confirm it returns an appropriate error response

## Task 3: Plan the Battle Page

1. Stay in **Plan** mode and enter this prompt:

   ```
   Now I need the main page. Plan a battle page for "Mona Mayhem - GitHub
   Contribution Battle Arena" with: two username inputs (Player 1 and Player 2),
   a battle button, and a results area. Use a dark theme with the Press Start 2P
   retro gaming font from Google Fonts. Plan the HTML structure, basic styling,
   and how the battle interaction will work.
   ```

2. **Review and iterate** on the plan — ask questions, suggest changes, refine the approach

3. When you're satisfied, switch to **Agent** mode and let Copilot build the page

## Task 4: Verify the Scaffold

1. Open http://localhost:4321 in your browser

2. You should see:
   - The game title
   - Two username input fields (Player 1 and Player 2)
   - A battle button

3. The button won't work yet — that's expected! We haven't wired up the JavaScript logic. That comes next.

---

## ✅ Part 2 Complete!

You've learned how to:

- **Use Plan Mode** to design architecture before writing code
- **Iterate on plans** — ask questions and refine before implementing
- **Switch between Plan and Agent modes** to go from design to implementation
