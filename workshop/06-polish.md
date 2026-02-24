# Part 6: Polish & Deploy

## 🎯 Goal

Add responsive design, refine the user experience, and prepare the app for deployment.

## Step 1: Responsive Design

The app needs to look great on mobile too:

> **💬 Copilot Prompt:**
>
> Add responsive CSS media queries to index.astro:
> - At max-width 1024px: Change `.comparison-area` from 2-column to 1-column grid
> - At max-width 768px:
>   - Reduce h1 to 1.2rem
>   - Reduce subtitle to 0.6rem
>   - Stack `.input-section` vertically with `flex-direction: column` and `align-items: stretch`
>   - Make inputs full width (min-width: 100%)

## Step 2: Improve Error UX

> **💬 Copilot Prompt:**
>
> Enhance the error display in the `.error` CSS class:
> - Red color (#ff3366) with matching border and a subtle red background tint
> - Inset and outer box-shadow glows in red
> - An `errorShake` animation: quick horizontal shake (translateX ±10px over 0.5s)

## Step 3: Input Validation Feedback

The current validation just checks for empty fields. Let's make it more user-friendly:

> **💬 Copilot Prompt:**
>
> Improve the `compare()` function's validation to show a styled error message inside the results div when either username is empty. Use the `.error` CSS class with the message "⚠️ Please enter both usernames! ⚠️".

## Step 4: Keyboard Accessibility

Verify these keyboard interactions work (they should if you completed Part 4):
- Tab between inputs and button
- Enter key in either input triggers the battle
- Button is focusable and activatable with Enter/Space

## Step 5: Test Everything

Run through these test scenarios:

| Test | Expected Result |
|------|----------------|
| Empty both fields, click Battle | Error: "Please enter both usernames" |
| Fill only Player 1, click Battle | Error message |
| Enter valid usernames, click Battle | Contribution graphs displayed |
| Enter invalid username | Error from API |
| Press Enter in input field | Triggers battle |
| Resize to mobile width | Single-column layout |
| Hover over contribution squares | Tooltip with date and count |

## Step 6: Build for Production

Test the production build:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4321` to verify the production build works correctly.

## ✅ Checkpoint

- [ ] App is responsive on mobile screens
- [ ] Error messages display with arcade-style animation
- [ ] All keyboard interactions work
- [ ] Production build succeeds
- [ ] All test scenarios pass

> [!TIP]
> Always test your production build! The dev server and production build can behave differently, especially with SSR. The `npm run preview` command lets you test the production build locally.

👉 **[Continue to Part 7: Bonus Challenges →](07-bonus.md)**
