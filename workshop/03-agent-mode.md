# Part 3: Agent Mode — Build the Game

[← Part 2](02-plan-and-scaffold.md)

---

Agent Mode lets Copilot autonomously plan and implement changes across multiple files. Instead of writing code line by line, you describe what you want and Copilot figures out which files to create or modify, then implements everything end to end.

## Task 1: Wire Up the Battle

1. Switch to **Agent** mode in Copilot Chat (select "Agent" from the mode dropdown).

2. Enter this prompt:

   > Add client-side JavaScript to the battle page that:
   > 1. When the Battle button is clicked, gets both usernames from the inputs
   > 2. Validates both are filled (show error if not)
   > 3. Fetches both users' contribution data in parallel from our API
   > 4. Renders contribution graphs as colored grids — each day is a colored square using GitHub's color palette
   > 5. Shows a VS badge between the two users
   > 6. Displays username, total contributions, and date range for each user
   > 7. Handles loading states and errors
   > 8. Also triggers on Enter key in input fields.
   >
   > Use TypeScript interfaces for the contribution data structure.

3. Let Agent Mode work through the implementation across `index.astro`. Watch as it plans its approach, identifies the files it needs to touch, and writes the code.

4. Review the proposed changes in the diff view before accepting them.

## Task 2: Test the Battle

1. Enter `octocat` and `torvalds` as the two usernames, then click **Battle**.
2. You should see both contribution graphs rendered side by side with colored grids.
3. Test error cases:
   - Leave one or both fields empty and click Battle — you should see a validation error.
   - Enter an invalid username — the app should display an error from the API.
4. Test pressing **Enter** in either input field — it should trigger the battle just like clicking the button.

## Task 3: Iterate with Agent

If anything isn't quite right, give Agent feedback directly in the chat. For example:

- *"The contribution squares are too large, make them 12x12px"*
- *"Add a hover tooltip showing the date and contribution count"*
- *"The loading state needs a pulse animation"*

Agent Mode handles multi-file changes and iterations naturally. Each follow-up prompt builds on the previous context, so you can refine the implementation incrementally without starting over.

## Tips for Agent Mode

- **Be specific about what you want** — clear requirements lead to better results.
- **Break down large tasks into smaller prompts** if Agent goes off track.
- **Review changes before accepting** — use the diff view to understand what was modified.
- **If results aren't perfect, provide feedback and iterate** — Agent learns from your corrections within the conversation.

## ✅ Part 3 Complete

You've learned how to:

- Use **Agent Mode** for complex, multi-file implementations
- **Iterate on results** with targeted feedback
- Handle the **full feature lifecycle** — from implementation to testing to refinement — in a single conversation
