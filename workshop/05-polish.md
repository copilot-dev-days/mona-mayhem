# Part 5: Polish & Multi-Agent

[← Part 4](04-design-vibes.md)

---

Now that the app works and looks great, it's time to polish. Instead of doing everything sequentially, you'll hand off polish tasks to **background and cloud agents** that work in parallel — letting you review results as they come in.

## Task 1: Background Agent for Responsive Design

1. In the Chat panel, click **+** → **New background agent**
2. Enter this prompt:

   ```
   Add responsive CSS media queries: at 1024px switch comparison to single column,
   at 768px reduce font sizes, stack inputs vertically, and make the layout
   mobile-friendly. Also improve keyboard accessibility — ensure tab order works,
   Enter triggers battle, and focus states are visible.
   ```

3. Let it run independently — you don't need to watch it
4. When it finishes, **Review** the changes and click **Apply** to merge them in

## Task 2: Background Agent for Error UX

1. In the Chat panel, click **+** → **New background agent**
2. Enter this prompt:

   ```
   Improve the error experience: add a shake animation for errors, styled error
   messages with red (#ff3366) neon glow effects matching the arcade theme, and
   better input validation feedback. Show clear error messages when usernames are
   empty or invalid.
   ```

3. **Review** the changes when the agent completes and click **Apply**

## Task 3: Cloud Agent for Variations (Optional)

1. In the Chat panel, click **+** → **New cloud agent**
2. Enter this prompt:

   ```
   Create an alternative color theme for the battle page — keep the retro arcade
   style but use blue (#00f5ff) and orange (#ff6b35) instead of green and purple.
   Create it as a CSS custom property theme that could be toggled.
   ```

3. Check **agent sessions** to monitor progress
4. Review the design variation in the PR the cloud agent creates

## Task 4: Verify Everything

Run through these test scenarios to make sure everything works:

| Test | Expected Result |
|------|----------------|
| Empty fields, click Battle | Styled error with shake animation |
| Valid usernames | Contribution graphs displayed |
| Invalid username | Error from API with retro styling |
| Enter key in input | Triggers battle |
| Mobile width | Single-column responsive layout |
| Hover contribution squares | Tooltip with date and count |

Build for production and confirm there are no errors:

```bash
npm run build && npm run preview
```

Once everything looks good, commit your working code.

---

## ✅ Part 5 Complete!

**What you learned:**

- Use **background agents** for isolated parallel tasks
- Use **cloud agents** for design exploration and variations
- Delegate polish work to agents while you review and approve results
