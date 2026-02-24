# Part 4: Fetch & Render Contribution Graphs

## 🎯 Goal

Add client-side JavaScript to fetch contribution data from our API and render it as a visual graph when users click the Battle button.

## Step 1: Define the Data Types

First, let's add TypeScript interfaces for the contribution data. Ask Copilot:

> **💬 Copilot Prompt:**
>
> Add a `<script>` tag to the bottom of `index.astro` (before `</body>`). Define a TypeScript interface `ContributionData` that matches the GitHub contributions API response:
> - `schema`: string
> - `generated_at`: string
> - `from`: string (date range start)
> - `to`: string (date range end)
> - `total_contributions`: number
> - `weeks`: array of objects with `index` (number), `first_day` (string), and `contribution_days` (array of objects with `weekday` number, `count` number, `level` number)
> - `colors_full`: string array (color palette for contribution levels)

## Step 2: Add the Fetch Function

> **💬 Copilot Prompt:**
>
> In the same script tag, create an async function `fetchContributions(username: string): Promise<ContributionData>` that:
> 1. Calls `fetch('/api/contributions/${username}')`
> 2. If the response is not OK, parses the error JSON and throws an Error with the message
> 3. Returns the parsed JSON as ContributionData

## Step 3: Render the Contribution Graph

The contribution graph is a grid of colored squares — each representing one day. Weeks are displayed as columns.

> **💬 Copilot Prompt:**
>
> Create two rendering functions:
>
> 1. `renderContributionGraph(data: ContributionData): string` — Returns HTML string with the contribution grid:
>    - Loop through `data.weeks`, creating a `div.week-column` for each week
>    - Inside each week, loop through `contribution_days`, creating a `div.contribution-day` for each day
>    - Set the background color from `data.colors_full[day.level]`
>    - Add a `title` attribute showing the date and contribution count for hover tooltips
>    - Calculate the actual date from `week.first_day` + `day.weekday` offset
>
> 2. `renderUserSection(username: string, data: ContributionData): string` — Returns HTML for a user's section:
>    - A `div.user-section` containing:
>      - `div.user-header` with the username (prefixed with 👤) and stats (total contributions and date range)
>      - `div.contribution-graph` containing the rendered graph

## Step 4: Wire Up the Battle Button

> **💬 Copilot Prompt:**
>
> Create an async function `compare()` that:
> 1. Gets the values from both username inputs (trim whitespace)
> 2. Validates both are filled — if not, show an error message in the results div
> 3. Disables the battle button and shows a "⚡ Loading battle data... ⚡" message
> 4. Fetches both users' data in parallel using `Promise.all`
> 5. On success: renders a "VS" badge between both user sections in a 2-column grid
> 6. On error: shows the error message in a styled error div
> 7. Re-enables the button in a `finally` block
>
> Then add event listeners:
> - Click handler on the battle button
> - Enter key handlers on both input fields to trigger the comparison

## Step 5: Add Basic Graph CSS

> **💬 Copilot Prompt:**
>
> Add CSS for the contribution graph elements:
> - `.comparison-area`: 2-column grid with a gap, with a slide-up animation
> - `.user-section`: dark semi-transparent background, green border, padding
> - `.user-name`: larger font size, green color with text shadow glow
> - `.user-stats`: smaller font, purple color
> - `.contribution-graph`: flexbox with 2px gap, horizontal overflow scroll
> - `.week-column`: vertical flexbox with 2px gap
> - `.contribution-day`: 12x12px squares with a subtle border, scale up to 1.5x on hover with a glow effect
> - `.loading`: centered text with a pulse animation
> - `.error`: red (#ff3366) text and border with a background tint and shake animation

## Step 6: Test the Battle!

Try comparing two GitHub users:
1. Enter `octocat` and `torvalds` 
2. Click "⚡ BATTLE! ⚡"
3. You should see both contribution graphs rendered side by side

Also test:
- Empty username fields → error message
- Invalid username → error from API
- Press Enter in an input field → triggers comparison

## ✅ Checkpoint

- [ ] Clicking "Battle" fetches and displays contribution graphs
- [ ] Each user section shows username, total contributions, and date range
- [ ] Contribution graph renders as a grid of colored squares
- [ ] Hovering over a square shows the date and count
- [ ] Error handling works for missing/invalid usernames
- [ ] Loading state shows while data is being fetched

> [!TIP]
> `Promise.all` is a powerful JavaScript feature that runs multiple async operations in parallel. Instead of fetching User 1 then User 2 sequentially, we fetch both at the same time — cutting the wait time roughly in half!

> [!NOTE]
> The contribution graph uses GitHub's own color palette (`colors_full` from the API response) to ensure the visualization matches GitHub's actual contribution graph colors.

👉 **[Continue to Part 5: Retro Theme →](05-retro-theme.md)**
