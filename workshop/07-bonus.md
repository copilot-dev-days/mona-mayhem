# Part 7: Bonus Challenges

## 🎯 Goal

Extend Mona Mayhem with additional features! These are open-ended challenges — use Copilot Agent Mode to implement them.

## 🏆 Challenge 1: Win/Loss Banner

Add a winner announcement! After both contribution graphs load, compare the total contributions and display a victory banner.

> **💬 Copilot Prompt:**
>
> After both contribution graphs are rendered, compare the `total_contributions` of both users. Add a winner announcement banner between the VS badge and the comparison area that says "🏆 {username} WINS! 🏆" with neon glow styling. If it's a tie, show "🤝 IT'S A TIE! 🤝". Use the retro arcade theme colors.

## 🏆 Challenge 2: Streak Counter

Show each user's longest contribution streak (consecutive days with at least 1 contribution).

> **💬 Copilot Prompt:**
>
> Add a "Longest Streak" stat to each user section. Calculate it by iterating through the contribution days in order and finding the longest consecutive run of days with count > 0. Display it as "🔥 Longest Streak: X days" below the total contributions.

## 🏆 Challenge 3: Battle History

Keep track of previous battles in localStorage:

> **💬 Copilot Prompt:**
>
> Add a battle history feature:
> 1. After each successful battle, save the result to localStorage (usernames, totals, winner, timestamp)
> 2. Display a "Recent Battles" section below the main content showing the last 5 battles
> 3. Style it with the retro arcade theme
> 4. Add a "Clear History" button

## 🏆 Challenge 4: Sound Effects

Add retro arcade sound effects using the Web Audio API:

> **💬 Copilot Prompt:**
>
> Add retro arcade sound effects using the Web Audio API (no external files needed):
> 1. A "coin insert" beep sound when clicking Battle
> 2. A "power up" ascending tone sequence when results load
> 3. An "explosion" noise burst for errors
> Generate the sounds programmatically using OscillatorNode and GainNode.

## 🏆 Challenge 5: Animated Battle Sequence

Add a dramatic countdown before showing results:

> **💬 Copilot Prompt:**
>
> Instead of immediately showing results, add a dramatic battle sequence:
> 1. Show "3... 2... 1..." countdown with each number scaling up and fading
> 2. Then show "⚡ FIGHT! ⚡" with a flash effect
> 3. Then reveal the contribution graphs with a slide-in animation
> Use CSS animations and setTimeout for the timing.

## 🏆 Challenge 6: Contribution Heatmap Legend

Add a color legend explaining what each shade means:

> **💬 Copilot Prompt:**
>
> Add a contribution legend below each user's graph showing the color scale from "Less" to "More" using the `colors_full` palette from the API response. Style it to match the retro arcade theme.

## 🏆 Challenge 7: Share Battle Results

Add a "Share" button that copies a battle summary to the clipboard:

> **💬 Copilot Prompt:**
>
> Add a "📋 Share Results" button that appears after a battle. When clicked, copy a formatted text summary to the clipboard:
> "🎮 Mona Mayhem Battle Results 🎮\n{user1}: {total1} contributions\n{user2}: {total2} contributions\n🏆 Winner: {winner}\nBattle at: {url}"
> Show a brief "Copied!" confirmation.

## 🎉 Congratulations!

You've built **Mona Mayhem** from scratch using GitHub Copilot! Here's what you accomplished:

- ✅ Created a full-stack Astro application with SSR
- ✅ Built a server-side API proxy for GitHub data
- ✅ Implemented interactive data visualization
- ✅ Designed a retro arcade theme with CSS animations
- ✅ Handled async operations, errors, and loading states
- ✅ Made the app responsive for all devices

### What's Next?

- **Deploy** your app to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [Azure](https://azure.microsoft.com/)
- **Share** your creation on social media with #MonaMayhem
- **Explore** more Copilot features like custom instructions and MCP servers
- **Check out** the other [Copilot Dev Days workshops](https://github.com/copilot-dev-days)

> [!TIP]
> The challenges above are designed to be completed with Copilot Agent Mode. Don't be afraid to iterate — if the first result isn't quite right, refine your prompt and try again. That's the art of AI-assisted development!

### Resources

- [Astro Documentation](https://docs.astro.build/)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
