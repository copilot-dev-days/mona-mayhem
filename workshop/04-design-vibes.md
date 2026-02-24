# Part 4: Design-First Theming

---

In this part, you'll use **Plan Mode** to design a comprehensive theme transformation, then **Agent Mode** to implement it. This is design-first development — start with the vision, iterate on the visuals, and let Copilot handle the CSS heavy lifting.

## Task 1: Plan the Retro Theme

Switch to **Plan** mode in GitHub Copilot.

Enter this prompt:

> I want to transform this page into a full retro arcade experience. Plan a comprehensive visual overhaul that includes: CRT scanline effects on the background, neon glow on the title that pulses like a neon sign, animated VS badge with gradient color shifts, shine/shimmer overlay on the user result cards, float-in animations for input fields, color-shifting loading text between green and purple, and hover glow effects on contribution squares. Keep the dark background (#0a0a1a) with green (#5fed83) and purple (#8a2be2) accent colors.

Copilot will generate a detailed implementation plan covering all the visual effects. **Don't accept it immediately** — review the plan and iterate:

- Suggest adjustments to animation timing (e.g., "Make the neon pulse slower, around 3 seconds")
- Ask about specific effects (e.g., "How will the shimmer overlay work on the cards?")
- Request changes to the approach if something doesn't feel right

Once you're satisfied with the plan, let Copilot proceed to implementation.

## Task 2: Implement the Theme

Switch to **Agent** mode and ask Copilot to implement the plan:

> Implement the retro arcade theme plan we just designed.

Copilot will add multiple CSS animations, pseudo-elements, and transitions across your stylesheet. This may include:

- `@keyframes` for scanlines, neon pulse, shimmer, and float-in effects
- Pseudo-elements (`::before`, `::after`) for overlay effects
- CSS custom properties for theme colors
- Transition and hover states for interactive elements

Once the changes are applied, **check the preview in your browser** to see the full retro arcade transformation.

## Task 3: Fine-Tune the Vibes

Keep the browser preview open and iterate on the design. Try prompts like:

> The scanline effect is too strong, reduce opacity to 0.03

> Add a subtle electrical flicker to the title text

> The VS badge should pulse more dramatically

This is **design-first development** — you're iterating on the visual output in real time. Each prompt refines the experience until it feels right. Don't settle for "good enough" — push the vibes until the page looks like it belongs in an arcade cabinet.

## Task 4: Update Instructions

Your workspace instructions should reflect major design decisions. Ask Copilot:

> Add a design guide section to copilot-instructions.md describing our retro arcade theme: colors, fonts, animation style

This keeps future Copilot interactions consistent with the visual identity you've established. Any new features or components will automatically follow the retro arcade aesthetic.

**Commit and push your changes:**

```
git add -A
git commit -m "Add retro arcade theme with CRT and neon effects"
git push
```

## ✅ Part 4 Complete

**What you learned:**

- **Plan Mode for design systems** — sketch out a comprehensive visual overhaul before writing any code
- **Iterate on visual output** — use quick follow-up prompts to fine-tune animations, colors, and effects
- **Keep instructions updated with design decisions** — document your theme so Copilot stays consistent
- **Design-first development workflow** — start with the vision, implement with AI, refine until it feels right
