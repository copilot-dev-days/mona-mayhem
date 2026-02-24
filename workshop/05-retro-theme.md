# Part 5: Retro Arcade Theme

## 🎯 Goal

Transform the basic dark page into a full retro arcade experience with scanline effects, neon glows, animated elements, and that signature arcade feel.

## Step 1: Add the Scanline Background

The retro look starts with subtle scanline effects on the body:

> **💬 Copilot Prompt:**
>
> Update the body CSS in index.astro to add a retro scanline effect:
> - Use `repeating-linear-gradient` to create horizontal scanlines in green (rgba of #5fed83 at 0.05 opacity, 1px lines with 2px spacing)
> - Add a second `repeating-linear-gradient` for vertical lines in purple (rgba of #8a2be2 at 0.03 opacity, 1px lines with 4px spacing)
> - Animate the background position to scroll the scanlines upward over 8 seconds, creating a CRT monitor effect

## Step 2: Neon Glow Title

Make the "MONA MAYHEM" title glow like a neon sign:

> **💬 Copilot Prompt:**
>
> Style the h1 with neon glow effects:
> - Multiple `text-shadow` layers: green glow at 5px, 10px, and 15px blur with a purple tint on the outer layer
> - A `glowPulse` animation that alternates between subtle and stronger glow (2s ease-in-out infinite alternate)
> - A very subtle `textShake` animation to simulate electrical flickering (tiny 0.3px translations with 0.1deg rotation, 0.5s infinite)
> - Large font size (2.5rem), wide letter spacing

## Step 3: Animated VS Badge

When battle results appear, there should be a dramatic "VS" between the two players:

> **💬 Copilot Prompt:**
>
> Add CSS for a `.vs-badge` element:
> - Large text (3rem) with a gradient text effect using `background-clip: text` and `-webkit-text-fill-color: transparent`
> - The gradient cycles through green → purple → green using `background-size: 200% 200%`
> - `gradientShift` animation that moves the gradient position (3s ease infinite)
> - `vsPulse` animation that slightly scales up and rotates (2s ease-in-out infinite)

## Step 4: User Section Shine Effect

Add a rotating shine/shimmer overlay to the user result cards:

> **💬 Copilot Prompt:**
>
> Enhance the `.user-section` CSS:
> - Add a `::before` pseudo-element that creates a rotating shine effect: a 200%x200% overlay with a subtle diagonal gradient containing a thin bright strip of green
> - Animate it with a `shine` keyframe that rotates 360 degrees over 3 seconds
> - On hover: change border color to purple, add stronger purple glow shadows, and translate up 5px for a lift effect

## Step 5: Animated Subtitle

> **💬 Copilot Prompt:**
>
> Style the `.subtitle` with:
> - Purple color (#8a2be2) with a purple text-shadow glow
> - A `subtitlePulse` animation that fades between 0.8 and 1.0 opacity (3s ease-in-out infinite)

## Step 6: Float-in Animation for Inputs

> **💬 Copilot Prompt:**
>
> Add a `floatIn` animation to `.input-group`:
> - Starts from opacity 0 and translateY(-20px)
> - Ends at opacity 1 and translateY(0)
> - Duration: 1s ease-out

## Step 7: Username Pulse

> **💬 Copilot Prompt:**
>
> Add a `.namePulse` animation to `.user-name`:
> - Alternates between opacity 0.9 and 1.0
> - Green text-shadow glow effect
> - 2s ease-in-out infinite

## Step 8: Color-shifting Loading Text

> **💬 Copilot Prompt:**
>
> Update the `.loading` CSS with a `colorShift` animation that shifts the text color between green (#5fed83) and purple (#8a2be2) over 3s, combined with the existing pulse animation.

## Step 9: Test the Full Theme

Refresh the page and admire your creation! Check that:
- The background has subtle scrolling scanlines
- The title glows and subtly shakes
- Inputs float in with animation
- The button pulses with a glow
- Clicking Battle shows an animated "VS" badge
- User sections have a rotating shine overlay
- Contribution squares glow on hover
- Loading text shifts colors

## ✅ Checkpoint

- [ ] Scanline background animation is visible
- [ ] Title has neon glow and subtle shake
- [ ] VS badge animates with gradient shift
- [ ] User sections have shine overlay and hover lift effect
- [ ] Inputs have float-in animation
- [ ] Loading text shifts between green and purple
- [ ] Overall arcade aesthetic is cohesive

> [!TIP]
> CSS animations are GPU-accelerated when you use `transform` and `opacity` properties. This means our neon effects and animations are smooth and performant, even on lower-end devices!

> [!NOTE]
> The key to achieving a convincing retro arcade look is layering multiple subtle effects. Each individual animation is small, but together they create an immersive experience. This is a great technique to remember for any themed UI!

👉 **[Continue to Part 6: Polish & Deploy →](06-polish.md)**
